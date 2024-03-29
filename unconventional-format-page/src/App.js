import "./App.css";
import { Box, SimpleGrid, Container,Text,Button,Flex, Spacer, Divider, Center, Input, CircularProgress  } from "@chakra-ui/react";
import { ConversionColumn } from "./components/ConversionColumn";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FormatSelect } from "./components/FormatSelect";
import axios from 'axios'

import { useState, useEffect } from "react";

function App() {
  const [files, setFiles] = useState(null)
  const [outFiles, setOutFiles] = useState(null)
  const [format, setFormat] = useState(null)
  const [progress, setProgress] = useState({ started: false, pc:0})
  const [ready, setReady] = useState(null)
  const [session_id, setSession_id] = useState(null)

  useEffect(() => {
    if (files) {
      setReady(null)
      setOutFiles(null)
      console.log("asdasd"+outFiles)
      setSession_id(null)
      console.log(files);
      // More than 5 files -> ERR
      if (files.length > 5) {
        console.error("TOO MANY FILES");
        setFiles(null)
        return
      }
      //MAX_SIZE = MB * 1024KB/1MB * 1024BYTES/KB
      const MAX_SIZE = 1000 * 1024 * 1024; 
      let totalSize = 0;
      
      // Loop through all the files:
      // - adding to the total size for checking later
      // - checking if the files are multimedia files
      for (var i = 0; i < files.length; i++) {
        totalSize += files[i].size;
        let fileType = files[i].type.split("/")[0];
        if (
          fileType !== "audio" &&
          fileType !== "video" &&
          fileType !== "image"
        ) {
          console.error("FILE IS NOT A VIDEO OR AUDIO OR IMAGE");
          setFiles(null)
          return
        }
      }
      // More than MAX_SIZE -> ERR
      if (totalSize > MAX_SIZE) {
        console.error("SIZE LIMIT EXCEEDED");
        setFiles(null)
        return
      }
      setProgress(prevState => {
        return { ...prevState, pc: 0}
      })
    }
  }, [files,format]);

  function sendFilesHttp(){
    setReady(false)
    const fd = new FormData();

    for(var i = 0; i < files.length; i++){
      fd.append(files[i].name, files[i]);
    }
    axios.post('http://127.0.0.1:5000/files/', fd, {
      onUploadProgress: (progressEvent) => {
        setProgress(prevState => {
          return { ...prevState, pc: progressEvent.progress*100}
        })
      },
      headers: {
        "format": format
      }
    }).then(res => {
      console.log(res)
      if(res.status === 200){
        // FIX LATER FOR JSON FILE
        setSession_id(res.data.session_id)
        setOutFiles(res.data.files)
        setReady(true)
      }
    }).catch(err =>{
      console.log(err)
    })
  }

  return (
    <Container maxW={'80%'}>
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Divider my={2} />
      <FormatSelect changeFormat = {setFormat} />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Center>
      <Box>
          <Text textAlign={"center"} fontSize={"xl"} fontWeight={"bold"} mb={4}>Input</Text>
          <ConversionColumn files={files} />
          <Input type="file" hidden id="fileInput" onChange={(e) => {setFiles(e.target.files)}} multiple/>
          <Button type="file" width={'full'} onClick={() => {document.getElementById("fileInput").click()}}>Import</Button>
        </Box>
        </Center>
        <Center>
        <Box>
        <Text textAlign={"center"} fontSize={"xl"} fontWeight={"bold"} mb={4}>Output</Text>
          <ConversionColumn files={outFiles} len={files == null?0:files.length} />
          {/* ADD DOWNLOAD BUTTON LATER. DOWNLOAD BUTTON SHOULD SHOW ONLY AFTER RECEIVING HTTP CONFIRMATION */}
          {/* <Button hidden={progress.pc === 100 ? false:true} width={'full'} onClick={()=>console.log("clicked")}>Download</Button> */}
          <Button isDisabled = {true} hidden={ready === null || ready === true?true:false} width={'full'}>Converting...</Button>
          <Button hidden={!ready} width={'full'} onClick={()=>{window.location.href='http://localhost:5000/files/download/'+session_id}}>Download</Button>
          <Button hidden={ready!=null} width={'full'} onClick={sendFilesHttp} isDisabled={files === null || files.length <= 0 || format === '' || format === null  ? true:false}>Convert</Button>
        </Box>
        </Center>
      </SimpleGrid>
      <Center hidden={progress.pc === 0 || progress.pc === 100 ? true:false}>
        <CircularProgress value={progress.pc} />
      </Center>
      <Spacer />
      <Footer />
    </Flex>
    </Container>
  );
}

export default App;
