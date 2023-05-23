import "./App.css";
import Header from "./components/header/Header";
import LeftNavigation from "./components/leftComponent/leftNavigation/LeftNavigation";
import ToolBar from "./components/toolBar/ToolBar";
import RightNavigation from "./components/rightComponent/rightNavigation/RightNavigation";
import { ReferenceDataContextProvider } from "./components/context/ReferenceDataContext";

function App() {
  return (
    <div className="app">
      <ReferenceDataContextProvider>
        <Header />
        <ToolBar />
        <div className="features">
          <LeftNavigation />
          <RightNavigation />
        </div>
      </ReferenceDataContextProvider>
    </div>
  );
}

export default App;
