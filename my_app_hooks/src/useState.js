import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <HookSwitcher />
}

const HookSwitcher = () => {
  const [color, setColor] = useState('blue')
  const [fontSize, setFontSize] = useState(12)

  return (
    <div style={ {padding:'10px', border:'1px solid black', height: '25px',
     backgroundColor: color, fontSize:`${fontSize}px`}}>
       Hello World
      <button onClick={() => setColor('white')}>Light</button>
      <button onClick={() => setColor('blue')}>Dark</button>
      <button onClick={() =>setFontSize((s) => s + 2)}>+</button>
      <button onClick={() =>setFontSize((s) => s - 2)}>-</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))