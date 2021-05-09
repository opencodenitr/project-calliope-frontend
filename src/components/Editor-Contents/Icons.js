import React from 'react';
import '../../assets/styles/editors.css';
import {
    faInstagram,
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Icons() {
    return (
        <>   
        <FontAwesomeIcon className="icons_first" icon={faInstagram} />
        <FontAwesomeIcon className="icons" icon={faFacebook} />
        <FontAwesomeIcon className="icons" icon={faTwitter} />
  </>
    );
  }
  
  export default Icons;
