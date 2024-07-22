
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName]=useState("");
  const changed=(e)=>{
    setName(e.target.value);
    e.preventDefault();
  }
  return (
    <div>
        <form>
          <input type="text" onChange={changed}/>
          {<p>Hello {name}!</p>}
        </form>
    </div>
  )
}

export default App
