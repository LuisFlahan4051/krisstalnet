// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));


// ------------------ Windows ---------------------------
async function framelessWindow () {
  console.log('Creando frameless-window...')

  const win = new BrowserWindow({ 
    width: 600, 
    height: 380, 
    frame: false, 
    resizable: false, 
    icon: 'public/logo192.png' 
  })
  win.loadFile('public/welcome.html')
  win.show()
  //win.webContents.openDevTools()
  
  console.log('Listo!')
  
  sleep(4000).then(() => { 
    win.close()
  });
}


async function mainWindow() {
  console.log('Creando ventana de inicio...')

  sleep(3000).then(() => {
    const mainWindow = new BrowserWindow({
      width: 520,
      height: 680,
      icon: 'public/logo192.png',
      webPreferences: {
        nodeIntegration: true,
        //preload: path.join(__dirname, 'preload.js')
      }
    })

    //mainWindow.loadFile('index.html')
    //mainWindow.loadURL(`file://${__dirname}/app/index.html`)
    mainWindow.loadURL('http://localhost:3000');

    mainWindow.webContents.openDevTools()
    console.log('Listo!')
  });
}


//-------------------- MAIN --------------------------------
app.whenReady().then(() => {
  framelessWindow()
  mainWindow()
  
  // Prevenir abrir varias ventanas en MacOS
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) mainWindow()
  })
})

// Configuraciones de cierre para MacOS
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})