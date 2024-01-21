import React from "react";
import fb from '../../assets/fb.png';
import ig from '../../assets/ig.png';
import gh from '../../assets/gh.png';
 
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <FacebookIcon /> <GithubIcon />
      </div>
<p>© 2021 hirayasaalon.com</p>
    </div>
  );
}
 
export default Footer;