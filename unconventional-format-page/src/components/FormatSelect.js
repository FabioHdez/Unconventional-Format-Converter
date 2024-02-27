import React from "react";
import { Text, Select, Center, Stack } from "@chakra-ui/react";

export const FormatSelect = ({changeFormat}) => {
    
  const formats = {
    audio: [
      "mp3", // MPEG Audio Layer III
      "wav", // Waveform Audio File Format
      "aac", // Advanced Audio Coding
      "ogg", // Ogg Vorbis
      "flac", // Free Lossless Audio Codec
      "alac", // Apple Lossless Audio Codec
      "wma", // Windows Media Audio
      "opus", // Opus Interactive Audio Codec
      "ac3", // Dolby Digital AC-3
      "eac3", // Enhanced AC-3
      "ape", // Monkey's Audio
      "dts", // Digital Theater Systems
      "m4a", // MPEG-4 Audio
      "amr", // Adaptive Multi-Rate
    ],
    video: [
      "mp4", // MPEG-4 Part 14
      "avi", // Audio Video Interleave
      "mkv", // Matroska Video
      "mov", // QuickTime File Format
      "wmv", // Windows Media Video
      "flv", // Flash Video
      "webm", // WebM
      "mpeg", // MPEG-1 and MPEG-2
      "vob", // DVD Video Object
      "ogv", // Ogg Video
      "m4v", // MPEG-4 Video
      "3gp", // 3rd Generation Partnership Project
      "ts", // MPEG transport stream
      "hevc", // High Efficiency Video Coding (H.265)
      "h264", // Advanced Video Coding (H.264)
      "vp8", // VP8 Video Codec
      "vp9", // VP9 Video Codec
    ],
    image: [
      "jpg", // Joint Photographic Experts Group
      "png", // Portable Network Graphics
      "gif", // Graphics Interchange Format
      "bmp", // Bitmap Image File
      "tiff", // Tagged Image File Format
      "webp", // Web Picture format
      "heif", // High Efficiency Image File Format
      "svg", // Scalable Vector Graphics
      "raw", // Raw Image Formats
      "jpeg2000", // JPEG 2000
      "ico", // Icon Format
    ],
  };
  return (
    <Stack my={4}>
      <Text textAlign={"center"} fontSize={"xl"} fontWeight={"bold"} >
        Select Format
      </Text>
      <Center>
      <Select placeholder="Select option" maxW={'xl'} name="format" id="format" onChange={(e) => {changeFormat(e.target.value)}}>
        <optgroup label="audio">
            {formats.audio.map((format,index) => {
               return <option key={index} value={format}>{format}</option>
            })}
        </optgroup>

        <optgroup label="video">
            {formats.video.map((format,index) => {
               return <option key={index} value={format}>{format}</option>
            })}
        </optgroup>

        <optgroup label="image">
            {formats.image.map((format,index) => {
               return <option key={index} value={format}>{format}</option>
            })}
        </optgroup>
        
      </Select>
      </Center>
    </Stack>
  );
};
