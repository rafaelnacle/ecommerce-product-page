let slideMobileIndex = 1;
showSlides(slideMobileIndex);

// Next/previous controls
function plusMobileSlides(n) {
  showSlides(slideMobileIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mobileSlides");
  if (n > slides.length) { slideMobileIndex = 1 }
  if (n < 1) { slideMobileIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideMobileIndex - 1].style.display = "block";
}