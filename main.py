from flask import Flask,render_template,request,make_response
from flask_cors import CORS
import os
import uuid
from helpers.converter import convert

app = Flask(__name__)
CORS(app)
@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/files/", methods = ['POST','GET'])
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
    response = make_response("response")
    return response

