import logo from './logo.svg';
import React, {Component} from 'react';
import './css/App.css';
import './css/Main.css';
import menu_icon from './sorce/menu_icon.svg';

class App extends Component
{
  render()
  {
    return(
      <div className='app'>
        {/* Header */}
        <div className='header'>
          <img src={menu_icon} width='48px' height='48px' />
        </div>
        {/* Header */}
        {/* Content */}
        <div className='content'>
          <div className=''>
            이제 각 화면에 맞는 구성
          </div>          
        </div>
        {/* Content */}
      </div>
    );
  }
}

export default App;
