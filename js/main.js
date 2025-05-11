// Main JavaScript file for Ittefaq Life PPRC & PVC Pipes website

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      
      // Animate hamburger to X
      const bars = document.querySelectorAll('.bar');
      bars.forEach(bar => bar.classList.toggle('x'));
    });
  }

  // Testimonial Slider
  const testimonials = document.querySelectorAll('.testimonial');
  const prevButton = document.querySelector('.testimonial-controls .prev');
  const nextButton = document.querySelector('.testimonial-controls .next');
  
  if (testimonials.length > 0 && prevButton && nextButton) {
    let currentIndex = 0;
    
    // Hide all testimonials except the first one
    testimonials.forEach((testimonial, index) => {
      if (index !== 0) {
        testimonial.style.display = 'none';
      }
    });
    
    // Function to show the current testimonial
    function showTestimonial(index) {
      testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
      });
      testimonials[index].style.display = 'block';
    }
    
    // Previous button click
    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
      showTestimonial(currentIndex);
    });
    
    // Next button click
    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
      showTestimonial(currentIndex);
    });
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(function() {
      currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
      showTestimonial(currentIndex);
    }, 5000);
  }

  // Scroll Animation
  const scrollElements = document.querySelectorAll('.scroll-animation');
  
  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('scrolled');
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };
  
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
  
  // Initialize animation on page load
  handleScrollAnimation();
}); 