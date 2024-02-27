from flask import Flask,render_template,request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/files/", methods = ['POST','GET'])
def fileUpload():
    if(request.method == "POST"):
        print(request.headers)
        for fileKey in request.files:
            file = request.files[fileKey]
            try:
                # FIX LATER
                # Create a folder with the session ID 
                os.mkdir(f"./input/c96c6d5b")
            except:
                print("Folder already exists.")
            # Save into the folder with the session id
            save_path = os.path.join("./input/c96c6d5b", fileKey)
            file.save(save_path)
    return "render_template"