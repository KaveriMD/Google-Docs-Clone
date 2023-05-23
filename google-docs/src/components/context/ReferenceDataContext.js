import { useState, createContext } from "react";

const ReferenceDataContext = createContext();

const ReferenceDataContextProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [zoomValue, setZoomValue] = useState("100%");

  return (
    <ReferenceDataContext.Provider
      value={{
        bold,
        setBold,
        text,
        setText,
        italic,
        setItalic,
        underline,
        setUnderline,
        zoom,
        setZoom,
        zoomValue,
        setZoomValue,
      }}
    >
      {children}
    </ReferenceDataContext.Provider>
  );
};

export { ReferenceDataContext, ReferenceDataContextProvider };
