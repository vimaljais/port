import { Grid } from '@mui/material';
import styles from '../styles/Home.module.css';
import About from './components/About';
import Navbar from './components/Navbar';
import ResumePdf from './components/ResumePdf';
import SidePanel from './components/SidePanel';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Home() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: ['#54097F', '#96d3fd', '#c996fd'],
      },

      shape: {
        type: 'circle',
        stroke: {
          width: 0.5,
          color: '#fff',
        },
        polygon: {
          nb_sides: 8,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.6,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: '#000000',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
      },
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: false,
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 150,
          line_linked: {
            opacity: 0.8,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };
  return (
    <div>
      {/* <ResumePdf /> */}

      <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={options} />

      <Navbar />

      <Grid sx={{ height: 'calc(100vh - 50px)', position: 'fixed' }} container spacing={2}>
        <Grid item xs={12} md={5}>
          <SidePanel />
        </Grid>
        <Grid sx={{ zIndex: '-1' }} item xs={12} md={7}></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}></Grid>
        <Grid sx={{ height: 'calc(100vh - 50px)' }} item xs={12} md={7}>
          <About />
        </Grid>
      </Grid>
      <div style={{ height: '10000px' }}></div>
    </div>
  );
}
