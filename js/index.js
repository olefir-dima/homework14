const sliderImg = document.getElementById("sliderImg");
const imgCount = 9;
const minImgIndex = 1;
let currentImgIndex = minImgIndex;

function nextImg() {
  currentImgIndex++;
  showImg();
}

function prevImg() {
  currentImgIndex--;
  showImg();
}

function updateButtonsVisibility() {
  prevBtn.style.display =
    currentImgIndex === minImgIndex ? "none" : "inline-block";
  nextBtn.style.display =
    currentImgIndex === imgCount ? "none" : "inline-block";
}

function showImg() {
  sliderImg.src = "images/" + currentImgIndex + ".jpg";
  updateButtonsVisibility();
}

showImg();
