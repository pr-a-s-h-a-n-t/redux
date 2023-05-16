import { useState } from "react";

import "./App.css";
import Button from "./component/Button";
import Loading from "./component/Loading";
import UserData from "./component/UserData";

function App() {
  return (
    <>
      <h1>saga</h1>
      <Button />
      <Loading />
      <UserData />
    </>
  );
}

export default App;
