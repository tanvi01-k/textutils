import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (Message, type)=>{
    setAlert({
      msg: Message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  } 
  const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "Success");
    document.title = 'TextUtils - Dark Mode';
    // setInterval(() => {
    //   document.title = 'TextUtils is Amazing Mode';
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'Install TextUtils Now';
    // }, 1500);
    
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "Success");
    document.title = 'TextUtils - Light Mode';
  }
  }

  return (
    <>
       {/* <Navbar title="TextUtils" aboutText="About us"/> */}
       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
       {/* <Navbar/> */}
       <Alert alert={alert}/>
       <div className="container my-3">
          <TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
          <About/>
        </div>
    </>
  );
  }


export default App;
