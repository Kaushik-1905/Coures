let images = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png"
];

let index = 0;
let imageEl = document.getElementById("img");


function showimage() {
  imageEl.src = images[index];
}


function next() {
  index++;

  if (index == images.length) {
    index = 0; 
  }

  showimage();
}

function prev() {
  index--;

  if (index < 0) {
    index = images.length - 1;
  }

  showimage();
}

document.getElementById("next").onclick = next;
document.getElementById("prev").onclick = prev;

showimage();