import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import StudentContainer from "./components/StudentContainer";
import { Provider } from "react-redux";
import store from "./components/redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <StudentContainer />
      </Provider>
    </div>
  );
}

export default App;
