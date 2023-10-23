'use strict';


const images = [
  {src: 'img/cat01.jpg', alt: '猫の画像1'},
  {src: 'img/cat02.jpg', alt: '猫の画像2'},
  {src: 'img/cat03.jpg', alt: '猫の画像3'},
  {src: 'img/cat04.jpg', alt: '猫の画像4'},
  {src: 'img/cat05.jpg', alt: '猫の画像5'}
];





// メイン画像の初期値を設定
let image = document.createElement('img');
image.setAttribute('src', images[0].src);
image.setAttribute('alt', images[0].alt);





// 説明の初期値を設定
let description = document.createElement('p');
description.textContent = image.alt;





// 作成した要素を表示する
let mainImage = document.getElementById('main_image');
mainImage.insertBefore(image, null);
mainImage.insertBefore(description, null);




// サムネイル画像の表示
let thumbnails = document.getElementById('thumbnails');
for(let i = 0; i < images.length; i++) {
  let thumbnailImage = document.createElement('img');
  thumbnailImage.setAttribute('src', images[i].src);
  thumbnailImage.setAttribute('alt', images[i].alt);
  thumbnails.insertBefore(thumbnailImage, null);
}




// クリックしたサムネイル画像をメイン画像に設定する
thumbnails.addEventListener('click', function(e) {
  if(e.target.src) {
    // console.log(e.target);
    image.src = e.target.src;
    description.textContent = e.target.alt;
  }
}, false);