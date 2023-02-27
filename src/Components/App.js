import { useState , useEffect } from 'react';
import Navbar from './Navbar/Navbar'


const App = ( ) => {
let htmlCode = '' , cssCode='' , jsCode='' 
const changeHandler = (e) => {
  htmlCode = document.getElementById("html-code").value
  cssCode = document.getElementById("css-code").value
  jsCode = document.getElementById("js-code").value

  let output = document.getElementById('output')
  output.contentDocument.body.innerHTML = htmlCode +`<style>${cssCode}</style>` ;
  output.contentWindow.eval(jsCode)
}

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="left">
        <label><i className="fa-brands fa-html5"></i> HTML</label>
        <textarea  onChange={changeHandler} id='html-code'></textarea>
        <label><i className="fa-brands fa-css3-alt"></i> CSS</label>
        <textarea  onChange={changeHandler}  id='css-code'></textarea>
        <label><i className="fa-brands fa-js"></i> JS</label>
        <textarea  onChange={changeHandler} id='js-code'></textarea>
      </div>
      <div className="right">
        <label htmlFor='output'><i className="fa-solid fa-play"></i> output</label>
        <iframe id="output" ></iframe>
      </div>
    </div>
    </>
    
  );
}

export default App;
