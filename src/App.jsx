import React from "react";

import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/feed" element={<Feed />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
