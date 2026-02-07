// Contact form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('contactName').value,
      email: document.getElementById('contactEmail').value,
      subject: document.getElementById('contactSubject').value,
      message: document.getElementById('contactMessage').value,
    };
    
    console.log('Contact Form Data:', formData);
    
    // Success animation
    gsap.to('.contact-submit', {
      scale: 0.95,
      duration: 0.1,
      onComplete: () => {
        gsap.to('.contact-submit', {
          scale: 1,
          duration: 0.1
        });
      }
    });
    
    // Success message
    alert('Thank you! Your message has been sent. I will get back to you soon! 🚀');
    
    // Reset form
    contactForm.reset();
  });
}
