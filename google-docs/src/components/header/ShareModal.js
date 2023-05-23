import React from "react";
import "../header/shareModal.scss";
import support from "../../images/Help.png";
import settings from "../../images/Settings.png";
import profile from "../../images/Profile.jpeg";
import lock from "../../images/Lock.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/fontawesome-free-solid";
import insert from "../../images/Add_Link.png";

function ShareModal(props) {
  const value = props.value;
  const setModal = props.setModal;
  return (
    <div className="popup-content">
      <div className="popup-title">
        <div className="share-title">Share '{value}' </div>
        <img src={support} alt="Help" className="popup-icon"></img>
        <img src={settings} alt="Settings" className="popup-icon"></img>
      </div>
      <input
        type="text"
        placeholder="Add people and groups"
        className="add-people"
      ></input>
      <div className="people-with-access">People with access</div>
      <div className="user-detail">
        <img src={profile} alt="Profile" className="profile"></img>
        <div>
          <div className="name">Kaveri M.D (you)</div>
          <div className="mail-id">mdkaveri11@gmail.com</div>
        </div>
        <div className="owner">Owner</div>
      </div>
      <div className="people-with-access">General access</div>
      <div className="user-detail">
        <img src={lock} alt="Lock" className="restricted-icon"></img>
        <div>
          <div className="restricted-text">
            <div className="name">Restricted </div>
            <FontAwesomeIcon icon={faCaretDown} className="down-arrow" />
          </div>
          <div className="mail-id">
            Only people with access can open with the link
          </div>
        </div>
      </div>
      <div className="popup-button">
        <button className="copy-link">
          <img src={insert} alt="Add Link" className="insert-icon"></img> Copy
          link
        </button>
        <button className="done" onClick={() => setModal(false)}>
          Done
        </button>
      </div>
    </div>
  );
}

export default ShareModal;
