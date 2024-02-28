"""
Converter Script

Description:
This is the script file that will handle all the conversions for the
application. It will handle audio, video and image formats.
"""
import os
import subprocess

def convert(id:str,format:str):
    """ Converts a list of inputs and stores them in the "session ID" directory to group 
        the files. The directory will be stored in the output parent directory.

    Args:
        id (str): The "session ID" 
        format (str): Desired format.  

    Returns: 
        Void.
        Generates an output folder and stores the converted files.
    """
    try:
        os.mkdir(f"./output/{id}")
    except:
        # If folder exists delete everything
        print("Folder already exists.")
        for file in os.listdir(f"./output/{id}"):
            file_path = os.path.join(f"./output/{id}", file)
            os.remove(file_path)

    for file in os.listdir(f"./input/{id}"):
        name = file.split(".")[0]
        # ffmpeg -y -i "./input/af23s2/input.mov" -v quiet "./output/af23s2/input.mov"
        file_path = os.path.join(f"./input/{id}", file)
        out_file_path = os.path.join(f"./output/{id}", f"{name}.{format}")
        convertCommand = ['ffmpeg','-y','-i', file_path,'-v','quiet', out_file_path]
        subprocess.run(convertCommand,check=True)