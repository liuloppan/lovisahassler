import React from 'react';
import lovisaImg from './../resources/me.png';
import aboutImg from './../resources/doggo1.png';
import cvImg from './../resources/vis3.png';
import portImg from './../resources/me.png';
import CircularImage from '../components/CircularImage';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Home'>
      <CircularImage imgSrc={lovisaImg} diameter={100} hoverEffect={false} />
      <p className='title'>Hej jag heter Lovisa</p>
      <div className='container-horizontal'>
        <Link to="/cv">
          <CircularImage imgSrc={cvImg} diameter={80} text='CV' />
        </Link>
        <a href="https://www.linkedin.com/in/lovisa-hassler/">
          <CircularImage imgSrc={portImg} diameter={80} text='LinkedIn' />
        </a>
        <Link to="/about">
          <CircularImage imgSrc={aboutImg} diameter={80} text='About me'/>
        </Link>
      </div>
    </div>
  );
}

export default Home;
