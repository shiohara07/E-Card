function Trilemma(you, your){
  if(you == 0){ // ホスト側が皇帝の時
    if(your == 1){ // ゲストが平民
      alert("皇帝の勝ち");
    }else if (your == 2) { // ゲストが奴隷
      alert("奴隷の勝ち");
    }
  }else if (you == 1) { // ホスト側が平民の時
    if(your == 1){
      alert("引き分け");
    }else if (your == 2) {
      alert("平民の勝ち");
    }else if (your == 0) {
      alert("皇帝の勝ち");
    }
  }else if (you == 2) { // ホスト側が奴隷の時
    if(your == 1){
      alert("平民の勝ち");
    }else if (your == 0) {
      alert("奴隷の勝ち");
    }
  }
}
