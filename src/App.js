import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";


let name = "Gaurang";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      typ:type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#003366';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
      }else{
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert("light mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
  }

  return (
    <>
      
      <Navbar title="Gaurang" home="My Home" about="About" mode={mode} enableDarkMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextForm heading='My Textutility' mode={mode} showAlert={showAlert} />
      <About></About>
      </div>
      </>
  );
}

export default App;
