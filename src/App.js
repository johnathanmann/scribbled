import './styles.css';
import './canvas.js'

function App() {
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
      <input id='lineWidth' type='number' value='5'/>
      <button id='clear'>Clear</button>
     </div>
     <canvas id="canvas"></canvas>
    </div>
  );
}

export default App;
