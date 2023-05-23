import React from "react";
import "../rightNavigation/rightNavigation.scss";
import { IconList } from "../../../lists/IconList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faPlus } from "@fortawesome/fontawesome-free-solid";

function RightNavigation() {
  return (
    <div className="right-navigation">
      {IconList.map((item) => {
        return (
          <div className="icon-list">
            <a href={item.url} target="_blank" ><img src={item.icon} alt="Google Icon" className="icons"></img></a>
          </div>
        );
      })}
      <div className="border-top"></div>
      <div className="plus-icon">
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="side-panel">
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
}

export default RightNavigation;
