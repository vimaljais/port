import { Box } from '@mui/material';
import React from 'react';
import TypewriterComponent from './TypewriterComponent';
import 'animate.css';

const SidePanel = () => {
  return (
    <Box
      sx={{
        paddingLeft: {
          sm: '0px',
          md: '50px',
        },
        paddingRight: '100px',
        marginTop: {
          sm: '20px',
          md: '50px',
        },
        height: '800px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: {
          sm: 'center',
          md: 'flex-start',
        },
      }}
    >
      <p className='font-serif text-2xl animate__animated animate__fadeInUp'>Ohh you found me?. Howdy! I am</p>
      <TypewriterComponent />
      <p className='font-serif text-2xl font-bold animate__animated animate__fadeInUp ' style={{ color: '#008bff' }}>
        Software Engineer
      </p>

      <br />
      <br />

      <p className='font-serif text-3xl animate__animated animate__fadeInUp '>
        Hey! How nice of you to look at my personal site, Thank you! I am software engineer that specializes at backend
        apis, front end integration, recently found myself studying UX too.
      </p>
      <div className='border-circle'></div>
    </Box>
  );
};

export default SidePanel;
