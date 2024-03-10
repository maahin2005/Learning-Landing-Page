import { Box, AspectRatio } from '@chakra-ui/react';
import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer() {
  return (
    <Box mt={20}>
      {/* <Box
        position={'absolute'}
        top={0}
        left={0}
        width={'100%'}
        height={'100%'}
        background={'url(/svgs/purple-rectangle.svg)'}
        backgroundPosition={'center'}
        backgroundSize={'cover'}
        zIndex={0}
      /> */}
      <AspectRatio ratio={16 / 9}>
        <ReactPlayer
          controls="true"
          loop={true}
          url="Videos/home-page-vid.mp4"
          playing={true}
          width="100%"
          height="100%"
          light="/Images/vid-thumbnail.png"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            borderRadius: '10px',
          }}
        />
      </AspectRatio>
    </Box>
  );
}

export default VideoPlayer;
