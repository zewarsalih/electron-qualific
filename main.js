console.log('By: hupfront.com')

const { app, Menu, BrowserWindow } = require('electron');
const path = require('path');


function createWindow() {
    const app = new BrowserWindow({
        width: 595,
        height: 842,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    app.loadFile('index.html');
}

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})





app.on('ready', function () {
    createWindow()

    const template = [
        {
            label: 'Qualific',
            submenu: [
                { role: 'about' },
                {
                    role: 'quit',
                    accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q'
                }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' }
            ]
        },
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
})
