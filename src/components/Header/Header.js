import React from 'react';
import logo from '../../logo.svg';
import { withRouter } from 'react-router-dom';

import HomePage from "../../containers/HomePage";
import {
  Link
} from "react-router-dom";
import './Header.scss';

const CN = 'default-header';

  const HeaderComponet = (props) => {
    console.log(props);
    const { className, greeting = "test", showLogo, children  }= props;
    function goBack() {
        props.history.goBack();
    }
 function goForward() {
        props.history.goForward();
    }
    function goHome() {
        props.history.push('/')
    }

  return (
    <header className={`${CN} ${className}`}>
      { showLogo && (
        <img src={logo} className={`${CN}-logo`} alt="logo"  onClick={goHome}/>
      )
      }

      {greeting}
      {children}

      <Link to="/" className={`${CN}__link`}>Home</Link>
      <Link to="/doggos" className={`${CN}__link`} >Doggos</Link>
      <Link to="/router1" className={`${CN}__link`} >Router1</Link>
      <Link to="/router2" className={`${CN}__link`} >Router2</Link>
      <Link to="/newRouter" className={`${CN}__link`} >newRouter</Link>
        <button onClick={goBack}>Go Back</button>
        <button onClick={goForward}>Go Forward</button>

    </header>
  );
};
export const Header= withRouter(HeaderComponet);
