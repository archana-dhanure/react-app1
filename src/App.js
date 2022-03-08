import React, { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UsersContainer from "./components/UsersContainer";
import MyHooks from "./components/HooksExample";
import NavBar from "./components/NavBar/NavBar";
import Backdrop from "./components/Backdrop/Backdrop";
import SideBar from "./components/SideBar/SideBar";
import BootStrapElements from "./components/BootStrapElements/BootStrapElements";
import Memo from "./components/Concepts/Memo";
function App() {
  let [testNameForMemo, setTestNameForMemo] = useState(1);
  let [showSideBar, setShowSidebar] = useState(false);
  let [showBackDrop, setShowBackDrop] = useState(false);
  let SideBarComp = showSideBar ? <SideBar /> : "";
  let BackDrop = showBackDrop ? (
    <Backdrop handleBackDropClick={handleShowBackDrop} />
  ) : (
    ""
  );

  setTimeout(() => {
    setTestNameForMemo(testNameForMemo);
  }, 500);

  function handleShowSideBar() {
    setShowSidebar(!showSideBar);
    setShowBackDrop(!showBackDrop);
  }
  function handleShowBackDrop() {
    if (true === window.confirm("unmount both comp?")) {
      setShowBackDrop(false);
      setShowSidebar(false);
    } else {
    }
  }

  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <NavBar NavClick={handleShowSideBar} />
          {BackDrop}
          {SideBarComp}
          <div className="main-container">
            <Routes>
              <Route
                path="/memo"
                element={<Memo name={testNameForMemo} />}
              ></Route>
              <Route
                path="/bootstrap_demo"
                element={<BootStrapElements />}
              ></Route>
              <Route path="/home" element={<UsersContainer />}></Route>
              <Route path="/cake" element={<ItemContainer cake />}></Route>
              <Route
                path="/items/:id/:name/:age?"
                element={<ItemContainer />}
              ></Route>
              <Route path="/newcake" element={<NewCakeContainer />}></Route>
              <Route
                path="/IceCreamContainer"
                element={<IceCreamContainer />}
              ></Route>
              <Route path="/CakeContainer" element={<CakeContainer />}></Route>
              <Route path="/MyHooks" element={<MyHooks />}></Route>
              <Route
                path="/HooksCakeContainer"
                element={<HooksCakeContainer />}
              ></Route>
            </Routes>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
