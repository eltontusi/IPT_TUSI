document.addEventListener('DOMContentLoaded', () => {
    // Function to move the slides
    function moveSlide(direction, carouselId) {
      const carousel = document.getElementById(carouselId);  // Get the specific carousel by ID
      const slides = carousel.querySelectorAll('img');  // Get all the images inside this carousel
      
      // Find the current active slide index
      let currentSlide = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
      
      // Remove active class from the current slide
      slides[currentSlide].classList.remove('active');
      
      // Calculate the new slide index, ensuring it loops around
      currentSlide = (currentSlide + direction + slides.length) % slides.length;
  
      // Add active class to the new slide
      slides[currentSlide].classList.add('active');
    }
  
    // Add event listeners to the next/prev buttons
    const prevButtons = document.querySelectorAll('.carousel-prev');
    const nextButtons = document.querySelectorAll('.carousel-next');
  
    prevButtons.forEach(button => {
      button.addEventListener('click', () => {
        const carouselId = button.getAttribute('data-carousel');  // Get the carousel ID from the button
        moveSlide(-1, carouselId);  // Move the slide to the previous image
      });
    });
  
    nextButtons.forEach(button => {
      button.addEventListener('click', () => {
        const carouselId = button.getAttribute('data-carousel');  // Get the carousel ID from the button
        moveSlide(1, carouselId);  // Move the slide to the next image
      });
    });
  
    // Initialize the carousels (display the first image by default)
    document.querySelectorAll('.carousel').forEach(carousel => {
      const slides = carousel.querySelectorAll('img');
      if (slides.length > 0) slides[0].classList.add('active'); // Show the first slide by default
    });
  });
  