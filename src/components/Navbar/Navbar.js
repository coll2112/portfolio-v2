import React, { Component } from 'react';
import Selfie from '../../images/selfie.png';
import './navbar.scss';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isToggled: false,
      mobileNavMenu: 'mobileNavbarContainer animated slideInLeft'
    };
  }

  toggleNav = () => {
    this.setState({ isToggled: !this.state.isToggled });
  };

  render() {
    console.log(this.state.isToggled);
    return (
      <div>
        <div className='mobileNavBar'>
          <span>
            <i className='fas fa-bars' onClick={() => this.toggleNav()} />
          </span>
        </div>
        <div className='navbarContainer'>
          <div className='navbarContent'>
            <img src={Selfie} />
            <div>
              <a href='#home'>
                <p>
                  <i className='fas fa-home' />
                  <span className='linkTitle'>Home</span>
                </p>
              </a>
              <a href='#about'>
                <p>
                  <i className='fas fa-user' />
                  <span className='linkTitle'>About</span>
                </p>
              </a>
              <a href='#portfolio'>
                <p>
                  <i className='fas fa-image' />
                  <span className='linkTitle'>Portfolio</span>
                </p>
              </a>
              <a href='#skills'>
                <p>
                  <i class='fas fa-code' />
                  <span className='linkTitle'>Skills</span>
                </p>
              </a>
              <a href='#contact'>
                <p>
                  <i className='fas fa-envelope' />
                  <span className='linkTitle'>Contact</span>
                </p>
              </a>
            </div>
            <div className='social'>
              <a href='https://github.com/Gray754' target='_blank'>
                <p>
                  <i className='fab fa-github' />
                </p>
              </a>
              <a
                href='https://www.linkedin.com/in/leegcollins/'
                target='_blank'
              >
                <p>
                  <i className='fab fa-linkedin' />
                </p>
              </a>
            </div>
          </div>
        </div>
        {this.state.isToggled ? (
          <div
            className={this.state.mobileNavMenu}
            onBlur={() =>
              this.setState({
                isToggled: false,
              })
            }
          >
            <div className='mobileNavbarContent'>
              <img src={Selfie} />
              <div>
                <a href='#home'>
                  <p>
                    <i className='fas fa-home' />
                    <span className='linkTitle'>Home</span>
                  </p>
                </a>
                <a href='#about'>
                  <p>
                    <i className='fas fa-user' />
                    <span className='linkTitle'>About</span>
                  </p>
                </a>
                <a href='#portfolio'>
                  <p>
                    <i className='fas fa-image' />
                    <span className='linkTitle'>Portfolio</span>
                  </p>
                </a>
                <a href='#skills'>
                  <p>
                    <i class='fas fa-code' />
                    <span className='linkTitle'>Skills</span>
                  </p>
                </a>
                <a href='#contact'>
                  <p>
                    <i className='fas fa-envelope' />
                    <span className='linkTitle'>Contact</span>
                  </p>
                </a>
              </div>
              <div className='social'>
                <a href='https://github.com/Gray754' target='_blank'>
                  <p>
                    <i className='fab fa-github' />
                  </p>
                </a>
                <a
                  href='https://www.linkedin.com/in/leegcollins/'
                  target='_blank'
                >
                  <p>
                    <i className='fab fa-linkedin' />
                  </p>
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Navbar;
