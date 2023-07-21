// Add animation classes when the elements are in the viewport
function animateOnScroll() {
  const elementsToShow = document.querySelectorAll('.animate-on-scroll');
  elementsToShow.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('show');
    }
  });
}

// Check if the element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Listen for scroll events and trigger animations
window.addEventListener('scroll', animateOnScroll);

// Trigger animations on page load
animateOnScroll();
