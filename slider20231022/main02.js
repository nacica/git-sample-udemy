"use strict";

const images = [
  { src: "img/cat01.jpg", description: "猫01" },
  { src: "img/cat02.jpg", description: "猫02" },
  { src: "img/cat03.jpg", description: "猫03" },
  { src: "img/cat04.jpg", description: "猫04" },
  { src: "img/cat05.jpg", description: "猫05" },
];

let image = document.createElement("img");
image.setAttribute("src", images[0].src);
image.setAttribute("alt", images[0].description);

let description = document.createElement("p");
description.textContent = image.alt;

let mainImage = document.getElementById("main_image");
mainImage.insertBefore(image, null);
mainImage.insertBefore(description, null);

let thumbnailImage = document.getElementById("thumbnails");
let thumbnails = document.createElement("img");
for (let i = 0; i < images.length; i++) {
    thumbnails.setAttribute("src", images[i].src);
    thumbnails.setAttribute("alt", images[i].description);
    
    thumbnailImage.insertBefore("thumbnails", null);
    thumbnailImage.insertBefore("thumbnails", null);
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
