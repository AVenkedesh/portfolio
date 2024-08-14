const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
            if (entry.target.classList.contains("hidden")) {
                entry.target.classList.add("show");
            }
            if (entry.target.classList.contains("slide-in-right")) {
                entry.target.classList.add("slide-in-right-active");
            }
            if (entry.target.classList.contains("slide-in-left")) {
                entry.target.classList.add("slide-in-left-active");
            }
      }
      else {
        entry.target.classList.remove("show");
        entry.target.classList.remove("slide-in-right-active");
        entry.target.classList.remove("slide-in-left-active");
      }
});
});
  
const Elements = document.querySelectorAll('.hidden, .slide-in-right, .slide-in-left');
Elements.forEach((element) => {
    observer.observe(element); // Observe each hidden element
});



const logos = document.querySelectorAll('.logos-container, img');
logos.forEach((logo, index) => {
  logo.style.animationDelay = `${index * 0.2}s`;
});

