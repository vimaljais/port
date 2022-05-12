import { Box } from '@mui/system';
import React from 'react';
import js from '../assets/js.svg';
import react from '../assets/react.svg';
import node from '../assets/node.svg';
import git from '../assets/git.svg';
import css from '../assets/css.svg';
import html from '../assets/html.svg';
import { Grid } from '@mui/material';
import Image from 'next/image';
import 'animate.css';

const skills = [
  {
    name: 'JavaScript',
    icon: js,
  },
  {
    name: 'React',
    icon: react,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Node',
    icon: node,
  },

  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'HTML',
    icon: html,
  },
];
const About = () => {
  return (
    <Box
      className='animate__animated animate__fadeInUp'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20%',
        height: '100%',
        alignItems: 'center',
        top: '50px',
      }}
    >
      <Box
        sx={{
          width: {
            sm: '100%',
            md: '80%',
          },
        }}
      >
        <p className='font-bold' style={{ fontSize: '2.5rem', color: '#008bff', width: '100%', textAlign: 'center' }}>
          What i do?
        </p>
        <p
          style={{ fontSize: '1.5rem', width: '100%', textAlign: 'center', paddingTop: '20px', paddingBottom: '40px' }}
        >
          I`ve been coding professionally for 6 years now and currently working as a Software Engineer that focuses on
          architecture, APIs, nitty-gritty business logics and even front end integration stuff now, how time flies!
          Here are few technologies that are cup of my tea coffee .
        </p>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Grid
            sx={{
              width: {
                md: '60%',
              },
            }}
            container
            spacing={{ xs: 2, md: 3 }}
          >
            {skills.map((skill) => (
              <Grid
                className='flex flex-col transform transition duration-300 hover:scale-125 cursor-default'
                xs={4}
                item
                key={skill.name}
              >
                <Image className='w-full justify-center flex' width='70px' height='70px' src={skill.icon} />
                <p className='w-full text-center'>{skill.name}</p>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
