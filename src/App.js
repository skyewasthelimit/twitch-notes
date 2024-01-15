import './App.css';
import React, { useState } from 'react';
import TaskTracker from './components/TaskTracker';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function TwitchNotes() {
  return (<Router>
    <div className="App">
      <div className='header'>
        <div className="title-wrapper">
          <div className='title'>Twitch Notes 💜</div>
        </div>
        <div className="nav-wrapper">
          <a href="/"><div className='nav-link'>About</div></a>
          <a href="/tasktracker"><div className='nav-link'>Notes</div></a>
          <div className='nav-link'>Nav 3</div>
          <div className='nav-link'>Nav 4</div>
          <div className='nav-link'>Log-In / Sign-Up</div>
        </div>

      </div>

      <div className="body">
        <div className="side-panel">

        </div>
        <div className="body-main">
          <div className="task-container">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/tasktracker" element={<TaskTracker />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default TwitchNotes;
