// ========== PAGE LOADER ==========
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      
      // Loader hide hone k baad hero animation start karo
      if (document.getElementById('hero')) {
        firstPageAnm();
      }
    }, 2000);
  }
});

// ========== LOCOMOTIVE SCROLL INITIALIZATION ==========
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  smartphone: {
    smooth: false
  },
  tablet: {
    smooth: false
  }
});

window.addEventListener('load', () => {
  scroll.update();
});

// ========== MENU FUNCTIONALITY ==========
const menuOverlay = document.getElementById('menuOverlay');
const menuTrigger = document.querySelector('.menu-trigger');
const menuClose = document.getElementById('menuClose');

function openMenu() {
  menuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (scroll) scroll.stop();
}

function closeMenu() {
  menuOverlay.classList.remove('active');
  document.body.style.overflow = '';
  if (scroll) scroll.start();
}

if (menuTrigger) {
  menuTrigger.addEventListener('click', openMenu);
}

if (menuClose) {
  menuClose.addEventListener('click', closeMenu);
}

// Close menu on link click
document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(closeMenu, 300);
  });
});

// ESC to close menu
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuOverlay && menuOverlay.classList.contains('active')) {
    closeMenu();
  }
});

// ========== SCROLL PROGRESS BAR ==========
const progressBar = document.getElementById('scroll-progress');

if (progressBar) {
  if (scroll) {
    scroll.on('scroll', (args) => {
      const scrollY = args.scroll.y;
      const documentHeight = document.querySelector('#main').scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercent = scrollY / (documentHeight - windowHeight);
      progressBar.style.transform = `scaleX(${scrollPercent})`;
    });
  } else {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const documentHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercent = scrollY / (documentHeight - windowHeight);
      progressBar.style.transform = `scaleX(${scrollPercent})`;
    });
  }
}

// ========== ENHANCED CUSTOM CURSOR ==========
document.addEventListener("DOMContentLoaded", function() {
  const cursor = document.querySelector("#cursor");
  
  if (cursor) {
    cursor.style.position = "fixed";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "999999";
    cursor.style.opacity = "0";
    cursor.style.transform = "translate(-50%, -50%)";
    
    document.addEventListener("mousemove", function(e) {
      cursor.style.opacity = "1";
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
    
    document.addEventListener("mouseleave", function() {
      cursor.style.opacity = "0";
    });
    
    document.addEventListener("mouseenter", function() {
      cursor.style.opacity = "1";
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        cursor.classList.add('hover-link');
      });
      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover-link');
      });
    });
    
    const buttons = document.querySelectorAll('.submit-btn, #abouttext a, button, .contact-submit, .cta-button');
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        cursor.classList.add('hover-button');
      });
      btn.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover-button');
      });
    });
  }
});

// ========== HERO ANIMATION (Only on homepage) ==========

if (document.getElementById('hero')) {
  function firstPageAnm() {
    var tl = gsap.timeline();

    tl.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    
    tl.to(".boundingelem", {
      y: 0,
      stagger: 0.25,
      duration: 1.8,
      delay: 0,
      ease: Expo.easeInOut,
    });
    
    tl.from("#headend", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
  }
}

// ========== PROJECT HOVER EFFECT ========== 
document.querySelectorAll(".elem").forEach(function(elem) {
  var rotate = 0;
  var diffrot = 0;
 
  elem.addEventListener("mouseleave", function() {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });
  
  elem.addEventListener("mousemove", function(dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      duration: 0.5,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

// ========== POPUP FUNCTIONALITY (Homepage only) ==========
const popup = document.getElementById('quotePopup');
const getQuoteBtn = document.getElementById('getQuoteBtn');
const letsTalkBtn = document.getElementById('letsTalkBtn');
const closePopupBtn = document.getElementById('closePopup');
const quoteForm = document.getElementById('quoteForm');

if (popup && getQuoteBtn) {
  function openPopup() {
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (scroll) scroll.stop();
  }

  function closePopup() {
    popup.classList.remove('active');
    document.body.style.overflow = '';
    if (scroll) scroll.start();
  }

  getQuoteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openPopup();
  });

  if (letsTalkBtn) {
    letsTalkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openPopup();
    });
  }

  closePopupBtn.addEventListener('click', closePopup);

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      closePopup();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('active')) {
      closePopup();
    }
  });

  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      projectType: document.getElementById('projectType').value,
      budget: document.getElementById('budget').value,
      message: document.getElementById('message').value,
    };
    
    console.log('Form Data:', formData);
    
    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      onComplete: () => {
        gsap.to('.submit-btn', {
          scale: 1,
          duration: 0.1
        });
      }
    });
    
    alert('Thanks! I will get back to you soon! 🚀');
    
    quoteForm.reset();
    setTimeout(closePopup, 1000);
  });
}

// ========== LIVE TIME UPDATE ==========
const timeElement = document.getElementById('time');
if (timeElement) {
  function updateCountryTime() {
    const now = new Date();
    const options = { 
      timeZone: 'Asia/Karachi', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    };
    const timeString = now.toLocaleTimeString('en-US', options);
    timeElement.textContent = timeString;
  }

  updateCountryTime();
  setInterval(updateCountryTime, 1000);
}