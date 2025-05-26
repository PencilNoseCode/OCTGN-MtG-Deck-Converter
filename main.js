const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const waitPort = require('wait-port');
const asar = require('asar'); // Required to extract files from the asar archive

let mainWindow;
let serverProcess;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadURL('http://localhost:8080');
  
  mainWindow.on('closed', () => {
    mainWindow = null;
    if (serverProcess) {
      serverProcess.kill();
    }
  });
}

async function startServer() {
  let serverPath;

  // app.asar archive is only generated in prod
  const isProd = fs.existsSync(path.join(process.resourcesPath, 'app.asar'));

  if (isProd) {
    // We need to extract the archive to run the server
    const extractedDir = path.join(app.getPath('temp'), 'server');
    if (!fs.existsSync(extractedDir)) {
      fs.mkdirSync(extractedDir);
    }
    await asar.extractAll(path.join(process.resourcesPath, 'app.asar'), extractedDir);
    serverPath = path.join(extractedDir, 'server', 'index.js');
  }
  else {
    serverPath = path.join(__dirname, 'server', 'index.js');
  }

  // Now spawn the server from the extracted directory
  serverProcess = childProcess.spawn('node', [serverPath], {
    stdio: 'inherit',
    shell: true,
  });


  // Wait for Express server port 8080 to be open before continuing
  const open = await waitPort({ host: 'localhost', port: 8080, timeout: 10000 });
  if (!open) {
    console.error('Server did not start on port 8080 within timeout');
    app.quit();
  }
}

app.whenReady().then(() => {
  startServer()
    .then(() => {
      // Now that the server is up, create the Electron window
      createWindow();
    })
    .catch((error) => {
      console.error('Failed to start server, quitting...', error);
      app.quit();
    });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('quit', () => {
  if (serverProcess) {
    serverProcess.kill();
  }
});
