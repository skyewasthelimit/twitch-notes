import React from 'react';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-title'>Our Mission</div>
      <div className='about'>
        Twitch Notes was developed to be an organizational
        tool for busy live streamers. It is built to aid
        broadcasters in managing various off and on stream
        tasks with full integration to Twitch allowing for
        ease of use and intuitive full implementation with 
        Twitch API.
      </div>
      <a href="/tasktracker"><button className='notes-btn'>GET STARTED</button></a>
    </div>
  )
}

export default About;
