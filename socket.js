//--------------------------------------
// モジュール読み込み
//--------------------------------------
const port = 3004;							//自分のポート番号に変更
const app  = require('express')();
const http = require('http').Server(app);
const io   = require('socket.io')(http);

//--------------------------------------
// Webサーバ
//--------------------------------------
app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/GameScene.html');
});
http.listen(port, ()=>{
  console.log(`listening on *:${port}`);
})

//--------------------------------------
// Socket.io
//--------------------------------------
io.on('connection', (socket)=>{
  // 接続時のメッセージ
  console.log('a user connected');

  socket.on('card', (card)=>{
    io.emit('card', card);
    console.log('card' + card);
  });
  // 切断
  Socket.on('disconnect', ()=>{
    console.log('user disconnected');
  });
});
