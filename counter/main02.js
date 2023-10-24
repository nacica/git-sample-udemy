"use strict";

// <span>：characterCount 

// <p>：characterCountWrap 

// <textarea>：inputText 

// 改行：正規表現：/\r?\n/g



let inputText=document.getElementById('inputText');
inputText.addEventListener('keyup',keyUp,false);

funciton keyUp(e){
    let str = inputText.value;
    str=str.replace('/\r?\n/g','');

    let num = 10-str.length






}