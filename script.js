// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// Simple cursor follower implementation
document.addEventListener("DOMContentLoaded", function() {
  // Get cursor element
  const cursor = document.querySelector("#cursor");
  
  // Set initial styling
  cursor.style.position = "fixed";
  cursor.style.pointerEvents = "none";
  cursor.style.zIndex = "999999";
  
  // Hide cursor initially
  cursor.style.opacity = "0";
  
  // Show and move cursor on mousemove
  document.addEventListener("mousemove", function(e) {
    // Show cursor
    cursor.style.opacity = "1";
    
    // Move cursor to mouse position
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
  
  // Hide cursor when mouse leaves the window
  document.addEventListener("mouseleave", function() {
    cursor.style.opacity = "0";
  });
  
  // Show cursor when mouse enters the window
  document.addEventListener("mouseenter", function() {
    cursor.style.opacity = "1";
  });
});

// First page animation
function firstPageAnm() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  });
  tl.to(".boundingelem", {
    y: 0,
    stagger:.25,
    duration: 1.5,
    delay:-1,
    ease: Expo.easeInOut,
  });
  tl.from("#headend", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    delay:-1,
    ease: Expo.easeInOut,
  });
}
firstPageAnm();

// Project hover effect
document.querySelectorAll(".elem").forEach(function(elem) {
  var rotate = 0;
  var diffrot = 0;
 
  elem.addEventListener("mouseleave", function() {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
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

  function updateCountryTime() {
    const now = new Date();
    const options = { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = now.toLocaleTimeString('en-US', options);
    document.getElementById('time').textContent =  timeString;
  }

  updateCountryTime();
  setInterval(updateCountryTime, 1000);

