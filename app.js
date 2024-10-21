// C H A R G E R __ L E __ D O M

document.addEventListener("DOMContentLoaded", () => {

// F O N C T I O N __ R E S O L U T I O N
  function checkScreenSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 375 && screenWidth <= 1440) {
      initCarousel();
    } else {
      showOnlyFirstSlide();
    }
  }

// F O N C T I O N __ C A R O U S E L

  function initCarousel() {
    const slides = document.querySelectorAll(".slide");
    let currentSlideIndex = 0;

    //F O N C T I O N __ C L A S S E
    function updateSlides(direction) {
      slides.forEach((slide, index) => {
        slide.classList.remove("active", "slide-exit-left", "slide-exit-right", "slide-enter-left", "slide-enter-right");

        // V E R I F I C A T I O N __ I N D E X + A R R O W S
        if (index === currentSlideIndex) {
          slide.classList.add("active");
          const firstArrow = slide.querySelector(".first-arrow");
          const secondArrow = slide.querySelector(".second-arrow");

          // E V E N T __ C L I C K
          firstArrow.addEventListener("click", () => {
            currentSlideIndex = currentSlideIndex > 0 ? currentSlideIndex - 1 : slides.length - 1;
            updateSlides("left");
          });

          secondArrow.addEventListener("click", () => {
            currentSlideIndex = currentSlideIndex < slides.length - 1 ? currentSlideIndex + 1 : 0;
            updateSlides("right");
          });

          // F I N __ A N I M A T I O N
        } else {
          // Gère la sortie des slides
          if (direction === "left") {
            slide.classList.add("slide-exit-right");
          } else {
            slide.classList.add("slide-exit-left");
          }
        }
      });
    }

    updateSlides();
  }

  // S H O W __ S L I D E 1

  function showOnlyFirstSlide() {
    const slides = document.querySelectorAll(".slide");

    slides.forEach(slide => {
      if (slide.classList.contains("first-slide")) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active", "slide-exit-left", "slide-exit-right", "slide-enter-left", "slide-enter-right");
      }
    });
  }

  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});
