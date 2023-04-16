import './App.css';
import './normal.css';
import './logo.svg';
import React from 'react';
import {ReactComponent as ReactLogo} from './logo.svg';

function App() {
  return (
    <div className="App">
      <aside className='side-menu'>
        <div className="side-menu-button">
          <span>+</span>
          New chat
        </div>
      </aside>
      <section className='chatbox'>
        <div className="chat-log">
          <div className="chat-message">
            <div className="chat-message-center">
              <div className="avatar">

              </div>
              <div className="message">
                Hello world
              </div>
            </div>
          </div>
          <div className="chat-message chatgpt">
            <div className="chat-message-center">
              <div className="avatar chatgpt">
              <ReactLogo />
              </div>
              <div className="message">
                I m an AI
              </div>
            </div>
          </div>
        </div>
        <div className="chat-input-holder">
          <textarea rows="1" className="chat-input-textarea" placeholder="Send a message..."></textarea>
          <p className="copyright"><span className="sp-copyright">ChatGPT April 23 Version.</span> Created by Mohd Ghouse Tazeem. This may produce inaccurate information about, people, places, or facts.</p>
        </div>
      </section>


    </div>
  );
}

export default App;
