import React from 'react';
import { Breakpoint } from 'react-socks';

import logoSimple from '../assets/images/logo_simple.png';
import logoFull from '../assets/images/Airbnb_Logo.svg';
import TopNavbar from './nav/TopNavbar';

function Header() {
  return (
    <>
      {/* <Breakpoint small down /> */}
      <Breakpoint medium only>
        <header className="header">
          <div className="header__container-logo">
            <a href="/">
              <img className="header__logo" src={logoSimple} alt="logo simple airbnb" />
            </a>
          </div>
          <TopNavbar />
        </header>
        <div className="main__padding" />
      </Breakpoint>
      <Breakpoint large up>
        <header className="header">
          <div className="header__container-logo">
            <a href="/">
              <img className="header__logofull" src={logoFull} alt="logo complet airbnb" />
            </a>
          </div>
          <TopNavbar />
        </header>
        <div className="main__padding" />
      </Breakpoint>
    </>
  );
}

export default Header;
