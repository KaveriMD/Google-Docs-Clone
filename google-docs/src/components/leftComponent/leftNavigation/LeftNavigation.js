import React, { useContext } from "react";
import "../leftNavigation/leftNavigation.scss";
import bulletList from "../../../images/List_Bulleted.png";
import { ReferenceDataContext } from "../../context/ReferenceDataContext";

function LeftNavigation() {
  const { text, setText, bold, italic, underline, zoomValue } =
    useContext(ReferenceDataContext);
  let boldText,
    italicText,
    underlineText,
    pageWidth,
    pageHeight,
    fontPercentage;
  bold && (boldText = "bold");
  italic && (italicText = "italic");
  underline && (underlineText = "underline");
  if (zoomValue === "Fit") {
    pageWidth = "960px";
    pageHeight = "819px";
    fontPercentage = "210%";
  }
  if (zoomValue === "75%") {
    pageWidth = "400px";
    pageHeight = "842px";
    fontPercentage = "75%";
  }
  if (zoomValue === "125%") {
    pageWidth = "800px";
    pageHeight = "1404px";
    fontPercentage = "125%";
  }

  return (
    <div className="left-navigation">
      <img src={bulletList} alt="List Bulleted" className="document"></img>

      <div className="text-editor">
        <textarea
          className="text-area"
          id="myTextarea"
          placeholder="Type @ to insert"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            fontWeight: boldText,
            fontStyle: italicText,
            textDecoration: underlineText,
            width: pageWidth,
            height: pageHeight,
            fontSize: fontPercentage,
          }}
          autoFocus
        />
      </div>
    </div>
  );
}

export default LeftNavigation;
