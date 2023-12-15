"""
Converter Script

Description:
This is the script file that will handle all the conversions for the
application. It will handle audio, video and image formats.
"""

import subprocess

def main(input,output):
    convertCommand = ['ffmpeg', '-i', input, output]
    subprocess.run(convertCommand)


if __name__ == "__main__":
    main('input.webm','output.mp4')