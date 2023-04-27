const { contextBridge, ipcRenderer } = require('electron')

const handleSend = async () => {
  let fallback = await ipcRenderer.invoke('send-event', 'hhh')
  console.log(fallback, 'fallback')
}

const handleDarkModeChange = (callback) => ipcRenderer.on('IPC_DARKMODE_CHANGE', callback)

// console.log(window.ipcRenderer, 'window.ipcRenderer')
// window.ipcRenderer.on('IPC_DARKMODE_CHANGE', (event, shouldUseDarkColors) => {
//   // window.document.documentElement.setAttribute('data-theme', shouldUseDarkColors ? 'dark' : 'light')
//   appStore.setDocumentTheme(shouldUseDarkColors ? 'dark' : 'light')
// })

contextBridge.exposeInMainWorld('myApi', {
  platform: process.platform,
  handleSend,
  handleDarkModeChange,
})

contextBridge.exposeInMainWorld('darkMode', {
  toggle: (arg) => ipcRenderer.invoke('dark-mode:toggle', arg),
  system: () => ipcRenderer.invoke('dark-mode:system'),
})
