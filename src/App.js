import React, {useState, useEffect, useRef} from "react";
import './assets/styles.css';
import smile from './assets/smile.png';

function App() {
  useEffect(() => {
const canvas = document.getElementById("canvas");
const clear = document.getElementById("clear");
const pallete = document.getElementById("pallete");
const stroke = document.getElementById("stroke");
const ctx = canvas.getContext('2d');
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;


clear.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

pallete.addEventListener('click', e => {
  if(e.target.className === 'color') {
      ctx.strokeStyle = e.target.value;
  }
});

stroke.addEventListener('click', e=> {
    if(e.target.className === 'lineWidth') {
      lineWidth = e.target.value;
  }
})

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);
 });
 return (
  <div className="App">
   <div id='header'>
    <div id='title'>
    <h1>Scribbled</h1>
    <img src={smile}/>
    </div>
    <div id="pallete">
    <button className='color' value="#e2a0a0" type="submit"/>
    <button className='color' value="#e2b9a0" type="submit"/>
    <button className='color' value="#e2cca0" type="submit"/>
    <button className='color' value="#cde2a0" type="submit"/>
    <button className='color' value="#a0e2dc" type="submit"/>
    <button className='color' value="#a0b6e2" type="submit"/>
    <button className='color' value="#bd9fe0" type="submit"/>
    <button className='color' value="#e2a0e0" type="submit"/>
    <button className='color' value="#b5b3b3" type="submit"/>
    <button className='color' value="#FFF" type="submit"/>
    <button className='color' value="#000" type="submit"/>
    </div>
    <div id="stroke">
    <label className='lineWidth'>Stroke:</label>
    <input className='lineWidth' type='number'/>
    <button id='clear'>Clear</button>
    </div>
   </div>
   <canvas id="canvas"></canvas>
  </div>
);
}

export default App;
