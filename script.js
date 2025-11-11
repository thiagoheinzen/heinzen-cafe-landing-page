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
  let carousel = document.querySelector('.testimonials__carousel');
  if (!carousel) return;

  let slides = Array.prototype.slice.call(carousel.querySelectorAll('.testimonial'));
  if (slides.length <= 1) return;

  let currentIndex = 0;
  function showSlide(index) {
    slides.forEach(function (el, i) {
      let isActive = i === index;
      el.style.display = isActive ? 'block' : 'none';
      el.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });
  }

  showSlide(currentIndex);

  let prevBtn = carousel.querySelector('.testimonial__control--prev');
  let nextBtn = carousel.querySelector('.testimonial__control--next');

  function goPrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function goNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  if (prevBtn) prevBtn.addEventListener('click', goPrev);
  if (nextBtn) nextBtn.addEventListener('click', goNext);


  carousel.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    }
  });

  let touchStartX = null;
  let touchStartY = null;
  const SWIPE_THRESHOLD = 40;

  carousel.addEventListener('touchstart', function (e) {
    const t = e.changedTouches && e.changedTouches[0];
    if (!t) return;
    touchStartX = t.clientX;
    touchStartY = t.clientY;
  }, { passive: true });

  carousel.addEventListener('touchend', function (e) {
    const t = e.changedTouches && e.changedTouches[0];
    if (!t || touchStartX === null || touchStartY === null) return;
    const dx = t.clientX - touchStartX;
    const dy = t.clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    touchStartX = null;
    touchStartY = null;
  }, { passive: true });
})();

// Carousel da seção About
(function () {
  let carousel = document.querySelector('.about__carousel');
  if (!carousel) return;

  let slides = Array.prototype.slice.call(carousel.querySelectorAll('.about_carousel_img'));
  if (slides.length <= 1) return;

  let currentIndex = 0;
  function showSlide(index) {
    slides.forEach(function (el, i) {
      let isActive = i === index;
      el.style.display = isActive ? 'block' : 'none';
      el.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });
  }

  showSlide(currentIndex);

  let prevBtn = carousel.querySelector('.about__control--prev');
  let nextBtn = carousel.querySelector('.about__control--next');

  function goPrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function goNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  if (prevBtn) prevBtn.addEventListener('click', goPrev);
  if (nextBtn) nextBtn.addEventListener('click', goNext);

  // Navegação por teclado
  carousel.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    }
  });

  // Navegação por swipe em dispositivos touch
  let touchStartX = null;
  let touchStartY = null;
  const SWIPE_THRESHOLD = 40;

  carousel.addEventListener('touchstart', function (e) {
    const t = e.changedTouches && e.changedTouches[0];
    if (!t) return;
    touchStartX = t.clientX;
    touchStartY = t.clientY;
  }, { passive: true });

  carousel.addEventListener('touchend', function (e) {
    const t = e.changedTouches && e.changedTouches[0];
    if (!t || touchStartX === null || touchStartY === null) return;
    const dx = t.clientX - touchStartX;
    const dy = t.clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    touchStartX = null;
    touchStartY = null;
  }, { passive: true });
})();