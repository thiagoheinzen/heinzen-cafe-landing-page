AOS.init();


(function() {
  const logoLink = document.querySelector('.logo-link');
  
  if (logoLink) {
    logoLink.addEventListener('click', function(e) {
      e.preventDefault();
      
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
})();

(function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  
  if (hamburger && nav) {
    
    function toggleMenu() {
      const isOpen = nav.classList.contains('active');
      
      
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
      
      
      hamburger.setAttribute('aria-expanded', !isOpen);
      
      
      if (!isOpen) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    }
    
    function closeMenu() {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }
    
    
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });
    

    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        closeMenu();
        
        
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            
            if (targetId === 'about') {
              const headerHeight = document.querySelector('.header').offsetHeight;
              const targetPosition = targetElement.offsetTop - headerHeight;
              
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
            } else {
              
              const headerHeight = document.querySelector('.header').offsetHeight;
              const targetPosition = targetElement.offsetTop - headerHeight;
              
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
            }
          }
        }
      });
    });
    
 
    document.addEventListener('click', function(e) {
      if (nav.classList.contains('active') && 
          !hamburger.contains(e.target) && 
          !nav.contains(e.target)) {
        closeMenu();
      }
    });
    

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        closeMenu();
        hamburger.focus();
      }
    });
  }
})();

(function () {
  const carousel = document.querySelector('.testimonials__carousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.testimonial'));
  if (slides.length <= 1) return;

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((el, i) => {
      const isActive = i === index;
      el.style.display = isActive ? 'block' : 'none';
      el.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });
  }

  function goNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function goPrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);

  let interval = setInterval(goNext, 7000);

  carousel.addEventListener('mouseenter', () => clearInterval(interval));
  carousel.addEventListener('mouseleave', () => interval = setInterval(goNext, 7000));

})();

(function () {
  const carousel = document.querySelector('.about__carousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.about_carousel_img'));
  if (slides.length <= 1) return;

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((el, i) => {
      const isActive = i === index;
      el.style.display = isActive ? 'block' : 'none';
      el.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });
  }

  function goNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function goPrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);

  let interval = setInterval(goNext, 5000);

  carousel.addEventListener('mouseenter', () => clearInterval(interval));
  carousel.addEventListener('mouseleave', () => interval = setInterval(goNext, 5000));

})();
