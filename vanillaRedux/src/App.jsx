import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import * as action from "./store/ActionCreator";
function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const handleClick = () => {
    dispatch({
      type: action.INCREMENT,
    });
  };

  return (
    <>
      <h1>love redux {store.count}x</h1>
      <button onClick={handleClick}>Increment.. </button>
    </>
  );
}

export default App;
