import {app, BrowserWindow} from 'electron'
import path from 'path';
const createWindow=()=>{
    const win = new BrowserWindow({
        width:800,
        height:600,
        backgroundColor:'#fff111',
    })
    win.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
}

app.whenReady().then(createWindow);