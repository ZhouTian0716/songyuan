const buttons = document.querySelectorAll("[data-carousel-button]");
const slides = document.querySelector("#slides");
const slideLength = document.querySelector("#slides").children.length;
let activeSlide = slides.querySelector("[data-active]");
const carouselDots = document.querySelector("#carousel-dots");

const toggleBtn=document.querySelector("#toggle");

let sliderInterval;

let currentIndex = 0;

const updateCurrent = (currentIndex) => {
  // console.log(currentIndex);
  const activeDot = carouselDots.querySelector("[data-active]");
  // console.log(activeDot);
  // console.log(currentIndex);
  const activeSlide = slides.querySelector("[data-active]");

  delete activeSlide.dataset.active;
  delete activeDot.dataset.active;

  carouselDots.children[currentIndex].dataset.active = true;
  slides.children[currentIndex].dataset.active = true;
};

for (let i = 0; i < slideLength; i++) {
  let slideDot = document.createElement("div");
  slideDot.setAttribute("class", "carousel-dot");
  carouselDots.append(slideDot);
  if (i < 1) {
    carouselDots.children[i].dataset.active = true;
  }
  slideDot.addEventListener("click", () => {
    const dotIndex = i;
    console.log(dotIndex);
    updateCurrent(dotIndex);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    activeSlide = slides.querySelector("[data-active]");
    currentIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (currentIndex < 0) currentIndex = slides.children.length - 1;
    if (currentIndex >= slides.children.length) currentIndex = 0;
    updateCurrent(currentIndex);
  });
});

const autoSlide = () => {
  sliderInterval=setInterval(() => {
    // step 1:lookfor current active index
    activeSlide = slides.querySelector("[data-active]");
    currentIndex = [...slides.children].indexOf(activeSlide);

    // console.log(currentIndex);

    currentIndex++;
    if (currentIndex >= slides.children.length) currentIndex = 0;
    // step 2:update current active index
    updateCurrent(currentIndex);
  }, 3000);
};

document.addEventListener("load", autoSlide());

toggleBtn.addEventListener("click", () =>clearInterval(sliderInterval))
