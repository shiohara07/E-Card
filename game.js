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
  res.sendFile(__dirname + '/GamePlay.html');
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

  socket.on('game wait', function() {

  })

  // 切断
  socket.on('disconnect', ()=>{
    console.log('user disconnected');
  });
});

var gameControler = function() {

};

function game() {
  var targetElem = {},
  battleData = {
    countTime: 10,
    commed: false,
    enemyCommend: false
  };
}

gameControler().prototype.battle = function () {
  init: function() {
    var that = this, i;
    targetElem.modalBg;
    targetElem.modal;
    targetElem.battleView;
    targetElem.myHand;
    targetElem.enemyHand;
    targetElem.handList;
    targetElem.memberList;
  },

  gameStart: function(){
    var that = this;
    targetElem.modalBg.style.display = "none";
    targetElem.modal.stayle.display = "none";
    targetElem.battleView.classList.add("start");
    that.
  },

  gameReset: function(){
    var that = this;
    clearTimeout(that.timmer);
    battleData.commed = false;
    battleData.enemyCommend = false;
    battleData.countTime = 10;
    targetElem.timeVal.innerHTML = "";
    targetElem.enemyHand.classList.remove("selected");
    Socket.emit('battleReser', battleData);
  },

  enemyset: function() {
    var that = this;
    targetElem.enemyHand.classList.add("selected");
    if(battleData.commed){
      socket.emit('getEnemyData', battleData, {});
    } else {
      return false;
    }
  },

  judge: function(enemySelectedHand){
    var that = this,
    enemyHand = enemySelectedHand;
    switch(enemyHand){
      case emperor:
        if(enemyHand)
        break;
    }
  }
};


function render(img) {
 document.write('<img src =' + img + '>');
}
