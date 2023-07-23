// JavaScript (script.js)
const elements = document.querySelectorAll(".element-to-animate");

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateElementsOnScroll() {
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("show-animation");
    }
  });
}

window.addEventListener("scroll", animateElementsOnScroll);
