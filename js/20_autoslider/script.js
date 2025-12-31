const images = [
  { src: "img1.png" },
  { src: "img2.png" },
  { src: "img3.png" },
  { src: "img4.png" },
  { src: "img5.png" },
];



let index = 0;
let imageEl = document.getElementById("img");


function showimage() {
  imageEl.src = images[index].src;
}

showimage();



setInterval(() => {
  index = (index + 1) % images.length;
  showimage();
}, 3000);

