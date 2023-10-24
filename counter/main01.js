"use strict";

const inputText = document.getElementById("inputText");
inputText.addEventListener("keyup", AAA, false);

// イベントハンドラ
function AAA(e) {
  // 入力された値を取得
  let str = inputText.value;
  str = str.replace(/\r?\n/g, "");

  // 残りの文字数
  let num = 10 - str.length;

  // 文字数表示部分の要素を取得 <span>
  const characterCount = document.getElementById("characterCount");

  // 残りの文字数をセットして表示
  characterCount.textContent = num;

  // 残り文字数表示部分のp要素を取得 <p>
  const characterCountWrap = document.getElementById("characterCountWrap");

  // 文字色の設定
  if (num >= 0) {
    characterCountWrap.style.color = "black";
  } else {
    characterCountWrap.style.color = "red";
  }
}
