"use strict";

const images = [
  { src: "img/cat01.jpg", alt: "猫の画像01" },
  { src: "img/cat02.jpg", alt: "猫の画像02" },
  { src: "img/cat03.jpg", alt: "猫の画像03" },
  { src: "img/cat04.jpg", alt: "猫の画像04" },
  { src: "img/cat05.jpg", alt: "猫の画像05" },
];

let mainImage = document.getElementById("main_image");
let image = document.createElement("img");
image.setAttribute("src", images[0].src);
image.setAttribute("alt", images[0].alt);

let description = document.createElement("p");
description.textContent = image.alt;

mainImage.insertBefore(image, null);
mainImage.insertBefore(description, null);

let thumbnails = document.getElementById("thumbnails");

for (let i = 0; i < images.length; i++) {
  let thumbnailImage = document.createElement("img");
  thumbnailImage.setAttribute("src", images[i].src);
  thumbnailImage.setAttribute("alt", images[i].alt);

  thumbnails.insertBefore(thumbnailImage, null);
}

thumbnails.addEventListener(
  "click",
  function (e) {
    if (e.target.src) {
      image.src = e.target.src;
      description.textContent = e.target.alt;
    }
  },
  false
);
