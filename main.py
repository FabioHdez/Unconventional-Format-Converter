from flask import Flask,render_template,request,make_response,send_file,jsonify
from flask_cors import CORS
import os
import uuid
from helpers.converter import convert
from zipfile import ZipFile
import io


app = Flask(__name__)
CORS(app)
@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/files/", methods = ['POST'])
def fileUpload():
    session_id = uuid.uuid4().hex
    if(request.method == "POST"):
        try:
            os.mkdir(f"./input/{session_id}")
        except:
            # If for some reason the folder exists delete everything
            print("Folder already exists.")
            for file in os.listdir(f"./input/{session_id}"):
                file_path = os.path.join(f"./input/{session_id}", file)
                os.remove(file_path)

        for fileKey in request.files:
            file = request.files[fileKey]
            # Save into the folder with the session id
            save_path = os.path.join(f"./input/{session_id}", fileKey)
            file.save(save_path)
            # TODO CONVERT, SEND FILES, DELETE FOLDERS
            convert(session_id,request.headers["format"])
    
    dataResponse = {
        "session_id": session_id,
        'files': []
    }
    
    for file in os.listdir(f"./output/{session_id}"):
        file_path = os.path.join(f"./output/{session_id}", file)
        size = os.stat(file_path).st_size
        fileInfo = {
            "name": file,
            "size": size
        }
        dataResponse["files"].append(fileInfo)

    print(dataResponse)
    response = make_response(dataResponse)
    return response

@app.route("/files/download/<session_id>", methods = ['GET'])
def fileDownload(session_id):
    file_paths = []
    for file in os.listdir(f"./output/{session_id}"):
        file_path = os.path.join(f"./output/{session_id}", file)
        print(os.stat(file_path).st_size)
        file_paths.append(file_path)
    
    memory_file = io.BytesIO()
    with ZipFile(memory_file, 'w') as zf:
        for file in file_paths:
            # Add file to the zip file
            # os.path.basename(file) is used to extract the file name
            zf.write(file, os.path.basename(file))
    memory_file.seek(0)
    return send_file(memory_file, download_name=f'files-{session_id}.zip', as_attachment=True)