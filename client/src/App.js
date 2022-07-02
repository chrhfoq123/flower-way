import logo from './logo.svg';
import React, {Component} from 'react';
import './css/App.css';
import './css/Main.css';
import menu_icon from './sorce/menu_icon.svg';
import Register from './components/Register';

class App extends Component
{
  render()
  {
    return(
      <div className='app'>
        {/* Header */}
        <div className='header'>
          <img src={menu_icon} width='48px' height='48px' />
          <span className='title'>
            회원가입
          </span>
        </div>
        {/* Header */}
        {/* Content */}
        <div className='content'>
          <Register></Register>
        </div>
        {/* Content */}
      </div>
    );
  }
}

export default App;
