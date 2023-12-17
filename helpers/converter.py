"""
Converter Script

Description:
This is the script file that will handle all the conversions for the
application. It will handle audio, video and image formats.
"""
import os
import subprocess

def convert(id:str,input:list,format:str):
    """ Converts a list of inputs and stores them in the "session ID" directory to group 
        the files. The directory will be stored in the output parent directory.

    Args:
        id (str): The "session ID" 
        input (list): All the files for conversion.
        format (str): Desired format.  

    Returns: 
        Void.
        Generates a folder and stores the converted files.
    """
    try:
        os.mkdir(f"./output/{id}")
    except:
        print("Folder already exists.")
    for i in input:
        name = i.split(".")[0]
        # ffmpeg -y -i input.mov -v quiet af23s2/output.mp4
        convertCommand = ['ffmpeg','-y','-i', f"./input/{id}/{i}",'-v','quiet', f"output/{id}/{name}{format}"]
        subprocess.run(convertCommand)

if __name__ == "__main__":
    pass
    # convert('c96c6d5b',['input.webm','input2.webm','input3.webm','input4.webm'],'.mp4')