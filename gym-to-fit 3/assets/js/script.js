
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dotContainer = document.getElementById('dot-wrapper');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });

  updateDots(index);
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

function updateDots(index) {
  dotContainer.innerHTML = '';

  for (let i = 0; i < testimonials.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === index) {
      dot.classList.add('active');
    }
    dot.onclick = () => showTestimonial(i);
    dotContainer.appendChild(dot);
  }
}
// Initialize dots
updateDots(currentIndex);


function openModal() {
  document.body.scrollTop = 0;
  document.body.classList.add("open-modal");
  document.getElementById("joinModal").style.display = "flex";
}

function closeModal() {
  document.body.classList.remove("open-modal");
  document.getElementById("joinModal").style.display = "none";
}
window.onclick = function(event) {
  if (event.target == document.getElementById("joinModal")) {
    closeModal();
  }
}