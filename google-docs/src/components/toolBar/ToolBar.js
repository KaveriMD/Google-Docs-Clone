import React, { useContext } from "react";
import "./toolBar.scss";
import undo from "../../images/Undo.png";
import redo from "../../images/Redo.png";
import print from "../../images/Print.png";
import spellCheck from "../../images/Spell_Check.png";
import paint from "../../images/Paint.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faBold,
  faCaretDown,
  faEllipsisV,
  faItalic,
  faMinus,
  faPencilAlt,
  faPlus,
  faUnderline,
} from "@fortawesome/fontawesome-free-solid";
import highLight from "../../images/Highlighter.png";
import insert from "../../images/Add_Link.png";
import addComment from "../../images/Add_Comment.png";
import addImage from "../../images/Image.png";
import alignLeft from "../../images/Align_Left.png";
import lineSpacing from "../../images/Line_Spacing.png";
import checkList from "../../images/Checklist.png";
import bulletList from "../../images/List_Bulleted.png";
import numberList from "../../images/List_Numbered.png";
import { ReferenceDataContext } from "../context/ReferenceDataContext";
import { ZoomList } from "../../../src/lists/ZoomList.js";

function ToolBar() {
  const {
    bold,
    setBold,
    italic,
    setItalic,
    underline,
    setUnderline,
    zoom,
    setZoom,
    zoomValue,
    setZoomValue,
  } = useContext(ReferenceDataContext);
  const handleBold = () => {
    setBold(!bold);
  };
  const handleItalic = () => {
    setItalic(!italic);
  };
  const handleUnderline = () => {
    setUnderline(!underline);
  };
  const handleZoom = () => {
    setZoom(!zoom);
  };
  const handleZoomValue = (item) => {
    setZoomValue(item);
    setZoom(!zoom);
  };
  return (
    <div className="tool-bar-box">
      <div className="tool-bar">
        <div className="ctrl-text">
          <img src={undo} alt="Undo" className="tool-bar-icon"></img>
          <img src={redo} alt="Redo" className="tool-bar-icon"></img>
          <img src={print} alt="Print" className="tool-bar-icon"></img>
          <img
            src={spellCheck}
            alt="Spell Check"
            className="tool-bar-icon"
          ></img>
          <img src={paint} alt="Paint" className="tool-bar-icon"></img>
          <div className={zoom ? "zoom-focus" : "zoom"} onClick={handleZoom}>
            <div>{zoomValue}</div>
            <FontAwesomeIcon icon={faCaretDown} className="down-arrow" />
          </div>
          {zoom && (
            <div className="zoom-options-box">
              {ZoomList.map((item) => {
                return (
                  <div
                    className="zoom-options"
                    onClick={() => handleZoomValue(item.text)}
                  >
                    {item.text}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="border-line"></div>
        <div className="styles-text">
          <div> Normal Text</div>
          <FontAwesomeIcon icon={faCaretDown} className="down-arrow" />
        </div>

        <div className="border-line"></div>
        <div className="font-text">
          <div>Arial</div>{" "}
          <FontAwesomeIcon icon={faCaretDown} className="down-arrow" />
        </div>
        <div className="border-line"></div>
        <div className="vary-font-size">
          <FontAwesomeIcon icon={faMinus} className="font-size-icon" />
          <div className="font-size">11</div>
          <FontAwesomeIcon icon={faPlus} className="font-size-icon" />
        </div>
        <div className="border-line"></div>
        <div className="ctrl-text-style">
          <FontAwesomeIcon
            icon={faBold}
            className={bold ? "font-size-icon-focus" : "font-size-icon"}
            onClick={handleBold}
          />
          <FontAwesomeIcon
            icon={faItalic}
            className={italic ? "font-size-icon-focus" : "font-size-icon"}
            onClick={handleItalic}
          />
          <FontAwesomeIcon
            icon={faUnderline}
            className={underline ? "font-size-icon-focus" : "font-size-icon"}
            onClick={handleUnderline}
          />
          <div className="text-color">
            <div>A</div>
            <div className="border-bottom"></div>
          </div>
          <img
            src={highLight}
            alt="Highlighter"
            className="tool-bar-icon"
          ></img>
        </div>

        <div className="border-line"></div>
        <img src={insert} alt="Add Link" className="tool-bar-icon"></img>
        <img src={addComment} alt="Add Comment" className="tool-bar-icon"></img>
        <img src={addImage} alt="Add pic" className="tool-bar-icon"></img>
        <div className="border-line"></div>
        <div className="paragraph">
          <div className="align-text">
            <img
              src={alignLeft}
              alt="Align Left"
              className="tool-bar-icon"
            ></img>
            <FontAwesomeIcon icon={faCaretDown} className="down-arrow" />
          </div>
          <img
            src={lineSpacing}
            alt="Line Spacing"
            className="tool-bar-icon"
          ></img>
          <img src={checkList} alt="Checklist" className="tool-bar-icon"></img>
          <FontAwesomeIcon icon={faCaretDown} className="down-arrow-hover" />
          <img
            src={bulletList}
            alt="List Bulleted"
            className="tool-bar-icon"
          ></img>
          <FontAwesomeIcon icon={faCaretDown} className="down-arrow-hover" />
          <img
            src={numberList}
            alt="List Numbered"
            className="tool-bar-icon"
          ></img>
          <FontAwesomeIcon icon={faCaretDown} className="down-arrow-hover" />
          <FontAwesomeIcon icon={faEllipsisV} className="edit-icon" />
        </div>
        <div className="edit-menu">
          <FontAwesomeIcon icon={faPencilAlt} className="edit-icon" />
          <FontAwesomeIcon icon={faCaretDown} className="down-arrow" />
        </div>
        <div className="border-line"></div>
        <FontAwesomeIcon icon={faAngleUp} className="edit-icon" />
      </div>
      <div className="x-axis"></div>
    </div>
  );
}

export default ToolBar;
