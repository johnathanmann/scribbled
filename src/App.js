import React, {useState, useEffect, useRef} from "react";
import './styles.css';

function App() {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
const clear = document.getElementById("clear");
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
      <h1>Scribbled</h1>
      <div className='color' data-color="#e2a0a0"></div>
      <div className='color' data-color="#e2b9a0"></div>
      <div className='color' data-color="#e2cca0"></div>
      <div className='color' data-color="#cde2a0"></div>
      <div className='color' data-color="#a0e2dc"></div>
      <div className='color' data-color="#a0b6e2"></div>
      <div className='color' data-color="#bd9fe0"></div>
      <div className='color' data-color="#e2a0e0"></div>
      <div className='color' data-color="#b5b3b3"></div>
      <div className='color' data-color="#FFF"></div>
      <label htmlFor='lineWidth'>Stroke:</label>
      <input id='lineWidth' type='number'/>
      <button id='clear'>Clear</button>
     </div>
     <canvas id="canvas"></canvas>
    </div>
  );
}

export default App;
