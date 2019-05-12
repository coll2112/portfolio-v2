import React, { Component } from 'react';
import Selfie from '../../images/selfie.png';
import './navbar.scss';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isToggled: false,
      mobileNavMenu: 'mobileNavContainer slideInRight'
    };
  }

  toggleNav = () => {
    this.setState({ isToggled: !this.state.isToggled });
  };

  render() {
    // console.log(this.state.isToggled);
    return (
      <div className='navbarContainer'>
        <span
          className={this.state.mobileNavMenu}
          onClick={() => this.toggleNav()}
        >
          <i className='fas fa-bars' />
        </span>
        <div className='navbarContent'>
          <img src={Selfie} />
          <div>
            <a href='#home'>
              <p>
                <i className='fas fa-home' title='Home' />
                <span className='linkTitle'>Home</span>
              </p>
            </a>
            <a href='#about'>
              <p>
                <i className='fas fa-user' title='About' />
                <span className='linkTitle'>About</span>
              </p>
            </a>
            <p>
              <i className='fas fa-image' title='Portfolio' />
              <span className='linkTitle'>Portfolio</span>
            </p>
            <p>
              <i class='fas fa-code' title='Skills' />
              <span className='linkTitle'>Skills</span>
            </p>
            <p>
              <i className='fas fa-envelope' title='Contact' />
              <span className='linkTitle'>Contact</span>
            </p>
          </div>
          <div className='social'>
            <p>
              <i className='fab fa-github' />
            </p>
            <p>
              <i className='fab fa-linkedin' />
            </p>
            <p>
              <i className='fas fa-at' />
            </p>
          </div>
        </div>
        {/* <div className='mobileNavContent'>
          <img src={Selfie} />
          <div>
            <p>
              <i className='fas fa-home' title='Home' />
              <p>Home</p>
            </p>
            <p>
              <i className='fas fa-user' title='About' />
              <p>About</p>
            </p>
            <p>
              <i className='fas fa-image' title='Portfolio' />
              <p>Portfolio</p>
            </p>
            <p>
              <i className='fas fa-laptop-code' title='Skills' />
              <p>Skills</p>
            </p>
            <p>
              <i className='fas fa-envelope' title='Contact' />
              <p>Contact</p>
            </p>
          </div>
          <div className='social'>
            <p>
              <i className='fab fa-github' />
            </p>
            <p>
              <i className='fab fa-linkedin' />
            </p>
            <p>
              <i className='fas fa-at' />
            </p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Navbar;
