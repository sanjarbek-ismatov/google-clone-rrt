import React, { useState } from "react";
import "../styles/header.scss";

const Header = () => {
  const [text, setText] = useState<string>("");

  return (
    <header>
      <div className="header">
        <div className="header-nav">
          <a
            href="https://mail.google.com/mail/&ogbl"
            target="_blank"
            rel="noreferrer"
          >
            Gmail
          </a>
          <a
            href="https://www.google.co.uz/imghp?hl=uz&ogbl"
            target="_blank"
            rel="noreferrer"
          >
            Rasmlar
          </a>
          <svg className="menu">
            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
          </svg>
          <img
            className="profile-image"
            src="https://github.com/uzweb-code/google-search/blob/main/src/images/profile.jpg?raw=true"
            alt="profile"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
