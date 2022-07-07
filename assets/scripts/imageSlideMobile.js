let slideMobileIndex = 1;
showSlidesMobile(slideMobileIndex);

// Next/previous controls
function plusMobileSlides(n) {
  showSlidesMobile(slideMobileIndex += n);
}


function showSlidesMobile(n) {
  let i;
  let slides = document.getElementsByClassName("mobileSlides");
  if (n > slides.length) { slideMobileIndex = 1 }
  if (n < 1) { slideMobileIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideMobileIndex - 1].style.display = "block";
}