import { useState } from "react";
import "./App.css";
import SidebarButton from "./components/sidebarButton";
import { MainModel } from "./logic/main";
import OnePeople from "./components/onePeople";

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
        <div id="body">
          <table>
            <thead>
              <tr>
                <th>名前</th>
                <th>幸福度</th>
                <th>初期印象</th>
                <th>印象平均</th>
                <th>印象予想平均</th>
                <th>親密度平均</th>
              </tr>
            </thead>
            {model.debugModel().map((onePeopleMod) => {
              return <OnePeople onePeopleModel={onePeopleMod}></OnePeople>;
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
