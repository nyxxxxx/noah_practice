// 引入相關模組
const fs = require('fs');
const express = require('express');
const cors = require('cors'); // 引入 cors 套件
const app = express();

// 設定伺服器的 Port
const port = 3000;

// 使用 cors 中間件處理 CORS 設置
app.use(cors());

console.log('進入讀取程式碼')

// 處理檔案目錄讀取的路由
app.get('/files', (req, res) => {
  const directoryPath = './src/assets/images/season/spring'; // 請替換為您想要讀取的目錄路徑
  // 讀取目錄下的檔案清單
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).send('讀取目錄失敗！');
    }
    // 將檔案清單回傳至前端
    res.json(files);
  });
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`伺服器在 http://localhost:${port} 上運行。`);
});
