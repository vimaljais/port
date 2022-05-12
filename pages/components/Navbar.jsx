import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';
import Image from 'next/image';

const Navbar = () => {
  const [Darken, setDarken] = useState(false);

  const theme = createTheme({
    palette: {
      black: {
        main: '#000000',
      },
      shadow: {
        main: 'rgba(0,0,0,0.2)',
      },
    },
  });

  if (typeof window !== 'undefined') {
    window.onscroll = function (e) {
      if (window.scrollY > 200) {
        if (!Darken) {
          setDarken(true);
        }
      } else {
        if (Darken) {
          setDarken(false);
        }
      }
    };
  }

  useEffect(() => {
    console.log(Darken);
  }, [Darken]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        className={` transition-all duration-200
    ${Darken ? 'bg-white' : 'bg-transparent'}`}
        sx={{ flexGrow: 1, position: 'sticky', top: '0', zIndex: '9999' }}
      >
        <AppBar sx={{ backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none' }} position='static'>
          <Toolbar sx={{ display: 'flex', width: '100%' }}>
            <div className='mt-4 ml-4  transform transition duration-500 hover:scale-125 '>
              <Image width='90px' height='90px' src={Logo} />
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
              <Button
                size='large'
                sx={{
                  margin: '0px 10px 0px 10px',
                  '&:hover': {
                    color: 'primary',
                    backgroundColor: 'rgba(0,139,255,0.3)',
                  },
                  fontSize: '1.2rem',
                  fontWeight: '400',
                  paddingRight: '20px',
                  paddingLeft: '20px',
                  borderRadius: '16px',
                }}
                color='black'
              >
                About
              </Button>
              <Button
                sx={{
                  margin: '0px 10px 0px 10px',
                  '&:hover': {
                    color: 'primary',
                    backgroundColor: 'rgba(0,139,255,0.3)',
                  },

                  fontSize: '1.2rem',
                  fontWeight: '400',

                  paddingRight: '20px',
                  paddingLeft: '20px',
                  borderRadius: '16px',
                }}
                color='black'
              >
                Projects
              </Button>
              <Button
                sx={{
                  margin: '0px 10px 0px 10px',
                  '&:hover': {
                    color: 'primary',
                    backgroundColor: 'rgba(0,139,255,0.3)',
                  },

                  fontSize: '1.2rem',
                  fontWeight: '400',
                  paddingRight: '20px',
                  paddingLeft: '20px',
                  borderRadius: '16px',
                }}
                color='black'
              >
                Resume
              </Button>
              <Button
                sx={{
                  margin: '0px 10px 0px 10px',
                  '&:hover': {
                    color: 'primary',
                    backgroundColor: 'rgba(0,139,255,0.3)',
                  },

                  fontSize: '1.2rem',
                  fontWeight: '400',
                  paddingRight: '20px',
                  paddingLeft: '20px',
                  borderRadius: '16px',
                }}
                color='black'
              >
                Contact
              </Button>
            </Box>

            <Box
              sx={{
                width: '20%',
                display: {
                  xs: 'none',
                  md: 'flex',
                  '&:hover': {
                    color: 'primary',
                    backgroundColor: 'rgba(25, 118, 210, 0.2)',
                  },
                },
              }}
            ></Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
