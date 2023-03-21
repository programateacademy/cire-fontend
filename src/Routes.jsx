import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EditInfo } from "./components/organism/PrincipalForm/EditV2";
import AddInfo from "./components/organism/PrincipalForm/FormV2";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<AddInfo />}></Route> */}
          <Route path="/addinfo" element={<AddInfo />}></Route>
          <Route path="/editInfo/:id" element={<EditInfo />} exact></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Routes;