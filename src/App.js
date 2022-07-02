import Navbar from './components/Navbar'
import TextForm from './components/TextForm'


import './App.css';
import { useState } from 'react';

function App() {
const [mode, setMode ] = useState("light");

const toggleMode = () =>{

  if(mode === "light"){
    setMode("dark")
    document.body.style.backgroundColor= "grey"
  } else {
    setMode("light")
    document.body.style.backgroundColor= "white"
  }
}

  return (
    <div className="App">
      <Navbar title="textUtilis" mode={mode} toggleMode={toggleMode}/>
      <div className="container text-left">
        <TextForm mode={mode} />
      </div>
    </div>
  );
}

export default App;
