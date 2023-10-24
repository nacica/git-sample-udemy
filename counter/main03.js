// <span>：characterCount

// <p>：characterCountWrap

// <textarea>：inputText

// 改行：正規表現：/\r?\n/g

function keyUp(e) {
  let inputText = document.getElementById("inputText");
  let str = inputText.value;
  str = str.replace("/\r?\n/g", "");

  let num = 10 - str.length;

  let characterCount = document.getElementById("characterCount");
  characterCount.textContent = num;

  let characterCountWrap = document.getElementById("characterCountWrap");
  if (num >= 0) {
    characterCountWrap.style.color = 'black';
  } else {
    characterCountWrap.style.color = 'red';
  }
}

inputText.addEventListener("keyup", keyUp, false);
