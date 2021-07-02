/** @format */

// import package modules
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/SplashPage.css';

// Photo by <a href="https://unsplash.com/@marekpiwnicki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marek Piwnicki</a> on <a href="https://unsplash.com/s/photos/sunset?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import sunsetSplashImage from '../images/sunset_splashPage_image';

const SplashPage = () => {
  const history = useHistory();
  // routing function for onClick
  const loginRedirectOnClick = (e) => {
    // capture the e.target.id to send to state for login

    history.push('/login');
  };

  // test style for the image
  const sunsetSplashImageStyle = {
    width: '100%',
    height: '300px',
  };

  return (
    <div>
      <picture>
        <img
          src={sunsetSplashImage}
          alt='sunset'
          style={sunsetSplashImageStyle}
        ></img>
      </picture>
      <header>
        <h1>
          Prepare for what comes <span id='splash-after'>after</span>.
        </h1>
      </header>
      <div id='splash-button-container'>
        <button
          type='button'
          id='myself'
          onClick={(e) => loginRedirectOnClick(e)}
        >
          Plan for Myself
        </button>
        <button
          type='button'
          id='lovedOne'
          onClick={(e) => loginRedirectOnClick(e)}
        >
          Plan for a Loved One
        </button>
      </div>
    </div>
  );
};

export default SplashPage;
