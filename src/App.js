import './App.css';
import React, { useState } from 'react';
import TaskTracker from './components/TaskTracker';


function TwitchNotes() {
  return (
    <div className="App">
      <div className='header'>
        <div className="title-wrapper">
          <div className='title'>Twitch Notes 💜</div>
        </div>
        <div className="nav-wrapper">
          <div className='nav-link'>Nav 1</div>
          <div className='nav-link'>Nav 2</div>
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
            <TaskTracker />
          </div>
        </div>
      </div>

    </div>
  );
}

export default TwitchNotes;
