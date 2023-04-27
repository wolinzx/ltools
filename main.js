const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')
const path = require('path')
const WinState = require('electron-win-state').default

const winState = new WinState({
  defaultWidth: 1000,
  defaultHeight: 600,
})

const createWindow = () => {
  const win = new BrowserWindow({
    ...winState.winOptions,
    show: false,
    frame: false,
    // transparent: true,
    titleBarStyle: 'hiddenInset',
    vibrancy: 'sidebar',
    trafficLightPosition: {
      x: 19,
      y: 18,
    },
    webPreferences: {
      preload: path.resolve(__dirname, './preload/index.js'),
    },
  })

  // const isDarkMode = nativeTheme.shouldUseDarkColors
  // if (isDarkMode) win.setVibrancy('ultra-dark')
  // else win.setVibrancy('light')

  // const child = new BrowserWindow({ parent: win })
  // child.show()

  win.loadURL('http://127.0.0.1:3100/')

  // 打开开发者工具
  win.webContents.openDevTools()

  win.on('ready-to-show', () => {
    win.show()
    win.focus()
  })

  winState.manage(win)
}

ipcMain.handle('dark-mode:toggle', (event, args) => {
  if (args) {
    nativeTheme.themeSource = args
  } else {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
  }
  return nativeTheme.shouldUseDarkColors
})

ipcMain.handle('dark-mode:system', () => {
  nativeTheme.themeSource = 'system'
  return nativeTheme.shouldUseDarkColors
})

nativeTheme.on('updated', () => {
  const wins = BrowserWindow.getAllWindows()
  for (let win of wins) {
    win.webContents.send('IPC_DARKMODE_CHANGE', nativeTheme.shouldUseDarkColors)
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.commandLine.appendSwitch('enable-experimental-web-platform-features')

ipcMain.handle('send-event', (event, msg) => {
  return msg
})
