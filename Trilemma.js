function Trilemma(you, your){
  switch (you) {
    case 0: // 自分が皇帝のカードを出したとき
      if(your == 1){
        alert("あなたの勝ち");
      }else if (your == 2) {
        alert("あなたの負け");
      }
      break;
    case 1: // 自分が平民のカードを出したとき
      if(your == 0){
        alert("あなたの負け");
      }else if (your == 1) {
        alert("引き分け");
      }else {
        alert("あなたの勝ち");
      }
      break;
    case 2: // 自分が奴隷のカードを出したとき
      if(your == 0){
        alert("あなたの勝ち");
      }else if (your == 1) {
        alert("あなたの負け");
      }
      break;
  }
}
