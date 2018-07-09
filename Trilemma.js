function Trilemma(you, your){
  switch (you) {
    case 0: // 自分が皇帝のカードを出したとき
      if(your == 1){
        render("img/win.png");
      }else if (your == 2){
        render("img/lose.png");
      }
      break;
    case 1: // 自分が平民のカードを出したとき
      if(your == 0){
        render("img/lose.png");
      }else if (your == 1) {
        render("img/draw.png");
      }else {
        render("img/win.png");
      }
      break;
    case 2: // 自分が奴隷のカードを出したとき
      if(your == 0){
        render("img/win.png");
      }else if (your == 1) {
        render("img/lose.png");
      }
      break;
  }
}

function render(img) {
 document.write('<img src =' + img + '>');
}
