// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#print');
b.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  // 課題3-1: 正解判定する
  let k = document.querySelector('input[name="kazu"]');
  yoso = parseInt(k.value,10);
  kaisu = kaisu + 1;
  let n = document.querySelector("span#kaisu");
  let a = document.querySelector("span#answer");
  n.textContent = kaisu + '回目の予想：'+ yoso;
  if(kaisu >= 4){
    a.textContent = "答えは" + kotae +"でした.　すでにゲームは終わってます";
  }else if(yoso === kotae){
        a.textContent = "正解です．おめでとう!";
    }else{
      if(kaisu === 3){
      a.textContent ='まちがい。残念でした答えは ' + kotae +'です.';
      }else if(kotae < yoso){
      a.textContent = 'まちがい。答えはもっと小さいですよ';
      } else{
      a.textContent = 'まちがい。答えはもっと大きいですよ';
      }
  }
}