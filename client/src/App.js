import logo from './logo.svg';
import React, {Component} from 'react';
import './css/App.css';
import './css/Main.css';
import menu_icon from './sorce/menu_icon.svg';
import UserUpdate from './components/UserUpdate';

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
          <UserUpdate></UserUpdate>       
        </div>
        {/* Content */}
      </div>
    );
  }
}

export default App;
