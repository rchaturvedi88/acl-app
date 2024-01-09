import React from 'react';
import ReactDOM from 'react-dom';
// import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faYoutube,
     faFacebook,
     faTwitter,
     faInstagram
   } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
     ReactDOM.createRoot(document.body).render(SocialIcons)
     return(
     <div class="social-container bg-cyan-400 p-5">
   
      <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social inline-block bg-red-700  transition-transform m-2 hover:translate-y-4">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social inline-block bg-blue-700 transition-transform m-2 hover:translate-y-4">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social inline-block bg-blue-800  transition-transform m-2 hover:translate-y-4">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social inline-block bg-slate-700 transition-transform m-2 hover:translate-y-4">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
</div>
     // <>
     // <SocialIcon url="https://twitter.com" />,
     // <SocialIcon url="https://www.facebook.com/" />,
     // <SocialIcon url="https://www.youtube.com/" />,
     // </>

);
}
export default SocialIcons;