import React, {useState} from 'react';
import lovisaImg from './../resources/me.png';
import lovisa2Img from './../resources/me2.jpg';
import aboutImg from './../resources/doggo1.png';
import cvImg from './../resources/vis3.png';
import portImg from './../resources/me.png';
import CircularImage from '../components/CircularImage';
import { Link } from 'react-router-dom';
import FlipCard from '../components/FlipCard';

const Home = () => {
  return (
    <div className='Home'>
      <div className='container-vertical'>
        <div className='profile'>
          <div className='profile-image-container'>
            <FlipCard frontImg={lovisaImg} backImg={lovisa2Img}></FlipCard>
          </div>
          <p className='title'>Hej jag heter Lovisa</p>
        </div>
        <div className='container-horizontal'>
          <Link to="/cv">
            <CircularImage imgSrc={cvImg} diameter={80} text='CV' />
          </Link>
          <a href="https://www.linkedin.com/in/lovisa-hassler/" target="_blank">
            <CircularImage imgSrc={portImg} diameter={80} text='LinkedIn' />
          </a>
          <Link to="/about">
            <CircularImage imgSrc={aboutImg} diameter={80} text='About me'/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
