import React, { useState } from "react";
import "../header/header.scss";
import docsLogo from "../../images/Google_Docs_Logo.png";
import { MenuList } from "../../lists/MenuList";
import star from "../../images/Star.png";
import move from "../../images/File_Move.png";
import cloudDone from "../../images/Cloud_Done.png";
import commemt from "../../images/Comment.png";
import videoCall from "../../images/Video_Call.png";
import lock from "../../images/Lock.png";
import profile from "../../images/Profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/fontawesome-free-solid";
import ShareModal from "./ShareModal";

function Header() {
  const selectText = (e) => {
    e.target.select();
  };
  const [value, setValue] = useState("Untitled document");
  const [modal, setModal] = useState(false);
  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      setValue("");
    }
  };
  const getInputWidth = () => {
    const baseWidth = 20;
    const textLength = value.length;
    return `${baseWidth + textLength * 8}px`;
  };

  return (
    <div className="header">
      <div className="left-panel">
        <a href="https://docs.google.com/document/"><img src={docsLogo} alt="Docs Logo" className="docs-logo"></img></a>
        <div>
          <div className="title" style={{ width: getInputWidth() }}>
            <input
              onClick={selectText}
              type="text"
              className="rename"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ width: getInputWidth() }}
            ></input>
            <img src={star} alt="Star" className="icon-style"></img>
            <img src={move} alt="File Move" className="icon-style"></img>
            <img src={cloudDone} alt="Clooud Done" className="icon-style"></img>
          </div>

          <div>
            {MenuList.map((item) => {
              return <span className="menu-list">{item.text}</span>;
            })}
          </div>
        </div>
      </div>
      <div className="right-panel">
        <img src={commemt} alt="Comment" className="style"></img>
        <div className="video-call">
          <img src={videoCall} alt="Video Call" className="style"></img>
          <FontAwesomeIcon icon={faCaretDown} className="down-arrow" />
        </div>
        <button className="share-button" onClick={() => setModal(true)}>
          <img src={lock} alt="Lock" className="lock-icon"></img>Share
        </button>
        <img src={profile} alt="Profile" className="profile"></img>
      </div>
      {modal && (
        <div className="popup">
          <ShareModal value={value} setModal={setModal} />
        </div>
      )}
    </div>
  );
}

export default Header;
