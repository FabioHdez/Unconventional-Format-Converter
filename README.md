# Unconventional Format Converter

## Description
This will be a web application that will accept a multimedia file and let you convert the format to any other format.

## Technologies
| Component | Technology |
|:--------- |:---------- |
| Backend   | Flask      |
| Database  | MySQL      |
| Frontend  | React      |
| Library   | ffmpeg     |

## Milestones
- [ ] Create Python program that lets you convert multimedia files.
- [ ] Create Frontend using react. 
- [ ] Create Backend using flask.

## User Goals
* Users can convert multiple files at a time.
    * Users can choose a folder or select multiple files at a time. 
    * Drag into browser.

* Users will then select the format that they want to convert into.
    * They should have a dropdown to select multimedia type.
    * Then another dropdown with all the options.
    * Design in a way so that the more popular formats are more easily accessible.

* After conversion user can then choose to download the file.
    * If there is only one file then download it. 
    * If multiple create a zip.

* File will be deleted from the server after 5 or 10 minutes.
    * Because the links will be publicly accessible to protect the user's data all conversions will be deleted after 5 or 10 minutes.
    * Maybe add a link that will delete it.
