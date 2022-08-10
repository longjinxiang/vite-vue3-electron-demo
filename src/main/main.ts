const { app, BrowserWindow } = require('electron')
const path = require('path')
// import { app, BrowserWindow } from 'electron'
// import path from 'path'
// const NODE_ENV = process.env.NODE_ENV
const NODE_ENV = '123'

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('./dist/index.html')
  // win.loadURL(
  //   NODE_ENV === 'development'
  //   ? 'http://localhost:5173'
  //   : `file://${path.join(__dirname, '../dist/index.html')}`
  // );
  // win.loadURL('http://127.0.0.1:5173/')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


// https://zhuanlan.zhihu.com/p/423211730 可参考文章