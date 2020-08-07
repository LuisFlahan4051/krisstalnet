import React from 'react';
import './App.scss';
const { BrowserWindow } = window.require('electron').remote; 
//You need to add nodeIntegration: true, in to webPreferences in starter-electron.ts and conserv de { } in the import.


function createFramelessWindow() {
  let win = new BrowserWindow({ width: 800, height: 600, frame: false })
  win.show()
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello React and Electron</p>
        <button onClick={createFramelessWindow}>Frameless window!</button>
      </header>
    </div>
  );
}

export default App;