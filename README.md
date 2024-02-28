# Unconventional Format Converter
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [screenshots](#screenshots)


## General Info
The purpose of this software is to provide users with a web tool to easily convert any multimedia file into another format. It uses an intuitive design and provides the user with the most common formats available.

## Technologies
Project is created with:
* NodeJS
* ReactJS
* ChakraUI
* Flask
* FFMPEG

## Setup
* First set up FFMPEG or download <a href="https://www.ffmpeg.org/download.html" target="_blank">ffmpeg.exe</a> and paste on the root of the application.
* Install all dependecies for the Flask server: `pip install -r requirements.txt`
* Start the flask server: `flask --app main run`
* Install all dependecies for the React app: `cd unconventional-format-page` + `npm install`
* Start the React app: `npm start`

## Screenshots
### Sample Conversion
![Sample conversion](https://github.com/FabioHdez/Unconventional-Format-Converter/blob/main/screenshots/mp3conversion.png)
Here we can see how on the left we have the files uploaded by the user. On the right we have the files after upload and conversion.
### All Formats
![All formats](https://github.com/FabioHdez/Unconventional-Format-Converter/blob/main/screenshots/allformats.png)
Demo of all the formats available

	
