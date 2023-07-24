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

const scriptURL = 'https://script.google.com/macros/s/AKfycbwySXHtRsvhcDSYeKTbm7V5g-C0TIv_FnJ1Zaw_NSF1DazC96MRGSERlI1RW-u7NVql/exec'
      const form = document.forms['submit-to-google-sheet']
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message))
      })
    
      window.onload = function() {
        var heroContent = document.querySelector('.hero-content');
        heroContent.classList.add('show');
      };