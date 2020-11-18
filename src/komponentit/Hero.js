import React from 'react'
import '../App.css';
import { Nappi } from './Nappi';
import './Hero.css';

function Hero() {
    return (
        <div className='hero-container'>
          <video src='/taustavideo.mp4' autoPlay loop muted />
          <h1>EETU KARTTUNEN</h1>
          <p>Yrityksesi tuleva asiantuntija?</p>
          <div className='hero-btns'>
            <Nappi
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              Tutustu tarkemmin
            </Nappi>
            
          </div>
        </div>
        
        
      );
    }
export default Hero
