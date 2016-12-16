const path = require('path');
const url = require('url');
const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', onAppReady);

function onAppReady() {
  createWindow();
}

function createWindow() {
  mainWindow = new BrowserWindow(
    {
      width: 800,
      height: 600
    }
  );

  mainWindow.loadURL(
    url.format(
      {
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      }
    )
  );

  mainWindow.webContents.openDevTools();

  mainWindow.on(
    'closed', function () {
      mainWindow = null
    }
  )
}

app.on('window-all-closed', onAllWindowAllClosed);

function onAllWindowAllClosed() {
  if(process.platform !== 'darwin') {
    app.quit()
  }
}

app.on('activate', onAppActivate);

function onAppActivate() {
  if(mainWindow === null) {
    createWindow()
  }
}
