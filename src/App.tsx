import { useState } from "react";
import "./App.css";
import SidebarButton from "./components/sidebarButton";
import { MainModel } from "./logic/main";

function App() {
  const [model, setModel] = useState(new MainModel());

  return (
    <>
      <div id="main">
        <div id="side_bar">
          <div id="button_area">
            <SidebarButton
              imgName="play"
              onClick={() => {
                model.debugModel();
              }}
            ></SidebarButton>
            <SidebarButton imgName="pause" onClick={() => {}}></SidebarButton>
            <SidebarButton
              imgName="reset"
              onClick={() => {
                setModel(new MainModel());
              }}
            ></SidebarButton>
          </div>
        </div>
        <div id="body"></div>
      </div>
    </>
  );
}

export default App;
