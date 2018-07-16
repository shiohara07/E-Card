function init() {
  var role = {
    king: 0,
    slavel: 1,
    citizen: 2
  };

  //キャンバスの要素を取得
  var canvas = document.getElementById("bg");
  if (canvas.getContext) {
    //二次元グラフィックスのコンテキストを取得
    var plCard1 = canvas.getContext("2d"),
      plCard2 = canvas.getContext("2d"),
      plCard3 = canvas.getContext("2d"),
      plCard4 = canvas.getContext("2d"),
      plCard5 = canvas.getContext("2d"),
      enCard1 = canvas.getContext("2d"),
      enCard2 = canvas.getContext("2d"),
      enCard3 = canvas.getContext("2d"),
      enCard4 = canvas.getContext("2d"),
      enCard5 = canvas.getContext("2d");

    //Playerのカード枠表示
    plCard1.beginPath();
    plCard1.fillStyle = 'rgb(255, 255, 255)';
    plCard1.strokeRect(70, 400, 100, 100);
    plCard1 = role.king;

    plCard2.beginPath();
    plCard2.fillStyle = 'rgb(255, 255, 255)';
    plCard2.strokeRect(190, 400, 100, 100);
    plCard2 = role.slavel;

    plCard3.beginPath();
    plCard3.fillStyle = 'rgb(255, 255, 255)';
    plCard3.strokeRect(310, 400, 100, 100);
    plCard3 = role.citizen;

    plCard4.beginPath();
    plCard4.fillStyle = 'rgb(255, 255, 255)';
    plCard4.strokeRect(430, 400, 100, 100);
    plCard4 = role.citizen;

    plCard5.beginPath();
    plCard5.fillStyle = 'rgb(255, 255, 255)';
    plCard5.strokeRect(550, 400, 100, 100);
    plCard5 = role.citizen;

    //Enemyのカード枠表示
    enCard1.beginPath();
    enCard1.fillStyle = 'rgb(255, 255, 255)';
    enCard1.strokeRect(70, 40, 100, 100);
    enCard2.beginPath();
    enCard2.fillStyle = 'rgb(255, 255, 255)';
    enCard2.strokeRect(190, 40, 100, 100);
    enCard3.beginPath();
    enCard3.fillStyle = 'rgb(255, 255, 255)';
    enCard3.strokeRect(310, 40, 100, 100);
    enCard4.beginPath();
    enCard4.fillStyle = 'rgb(255, 255, 255)';
    enCard4.strokeRect(430, 40, 100, 100);
    enCard5.beginPath();
    enCard5.fillStyle = 'rgb(255, 255, 255)';
    enCard5.strokeRect(550, 40, 100, 100);

  }

  canvas.onclick = function(e) {
    console.log(e);
    alert("Playerのカード1は" + plCard1);
  };
}
