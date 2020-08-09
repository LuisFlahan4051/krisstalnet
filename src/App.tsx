import React from 'react';
import './App.scss';
import Login  from './components/Login/index';
import Responsiva from './components/Responsiva/index'

/* const { BrowserWindow } = window.require('electron').remote; 
const remote = window.require('electron').remote; 
function mainWindow() {
  console.log('Creando ventana de inicio...')

  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    icon: 'public/logo192.png',
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  //mainWindow.loadFile('index.html')
  //mainWindow.loadURL(`file://${__dirname}/app/index.html`)
  mainWindow.loadURL('http://localhost:3000/welcome.html');

  mainWindow.webContents.openDevTools()
  console.log('Listo!')

  var secondWin = remote.getCurrentWindow()
  secondWin.close()
}*/

function App() {
  return (
    <div className="App">
      
      <Login />
      <Responsiva />

      
      {/* <header className="App-header">
        <p>Hello React and Electron</p>
        <button onClick={mainWindow}>Frameless window!</button>
      </header> */}
    </div>
  );
}

export default App;