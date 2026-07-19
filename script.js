/* ==========================================================================
   ENIGMA 5.0 — Vanilla JS
   - Sticky navbar scroll detection
   - Intersection Observer for reveal animations
   - Mobile nav toggle
   - Smooth scroll for anchor links
   - Counter animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------
     1. STICKY NAVBAR — add/remove .scrolled class on scroll
     ------------------------------------------------------------------ */
  const navbar = document.querySelector('.navbar');
  const SCROLL_THRESHOLD = 60; // px from top before triggering

  function handleNavbarScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Throttle scroll events for performance
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleNavbarScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Run on load in case page is already scrolled
  handleNavbarScroll();

  /* ------------------------------------------------------------------
     2. MOBILE NAV TOGGLE
     ------------------------------------------------------------------ */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');

  function openMobileNav() {
    navToggle.classList.add('active');
    navLinks.classList.add('open');
    navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  // Close nav when overlay is clicked
  navOverlay.addEventListener('click', closeMobileNav);

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  /* ------------------------------------------------------------------
     3. SMOOTH SCROLL for anchor links
     ------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#' || targetId === '#register') return; // skip placeholder

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navHeight - 10;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ------------------------------------------------------------------
     4. INTERSECTION OBSERVER — reveal animations on scroll
     ------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after revealing to save resources
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,  // Trigger when 12% visible
      rootMargin: '0px 0px -40px 0px' // Slightly before fully in view
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    revealElements.forEach(el => el.classList.add('visible'));
  }

  /* ------------------------------------------------------------------
     5. ACTIVE NAV LINK HIGHLIGHTING on scroll
     ------------------------------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    const scrollPos = window.scrollY + navbar.offsetHeight + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);

      if (navLink) {
        if (scrollPos >= top && scrollPos < top + height) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  });

  /* ------------------------------------------------------------------
     6. CONTACT FORM — simple validation feedback
     ------------------------------------------------------------------ */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('#formName').value.trim();
      const email = contactForm.querySelector('#formEmail').value.trim();
      const message = contactForm.querySelector('#formMessage').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      // Simple email format check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Success (placeholder — replace with actual form handler)
      alert('Thanks for reaching out! We\'ll get back to you soon. 🚀');
      contactForm.reset();
    });
  }

  /* ------------------------------------------------------------------
     7. TYPED/COUNTER ANIMATION for prize amount
     ------------------------------------------------------------------ */
  const prizeAmountEl = document.querySelector('.prize-amount');

  if (prizeAmountEl && 'IntersectionObserver' in window) {
    let hasCounted = false;

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasCounted) {
          hasCounted = true;
          animateCounter(prizeAmountEl, 25000, 1500);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterObserver.observe(prizeAmountEl);
  }

  /**
   * Animate a number counting up
   * @param {HTMLElement} el - The element to update
   * @param {number} target - Target number
   * @param {number} duration - Animation duration in ms
   */
  function animateCounter(el, target, duration) {
    const start = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      el.textContent = '₹' + current.toLocaleString('en-IN');

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  /* ------------------------------------------------------------------
     8. CUSTOM GLOWING HACKER CURSOR
     ------------------------------------------------------------------ */
  // Mobile / touch screen detection
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(hover: none)').matches;

  if (!isTouchDevice) {
    // 1. Create cursor elements
    const cursorDot = document.createElement('div');
    const cursorRing = document.createElement('div');
    
    cursorDot.className = 'custom-cursor-dot';
    cursorRing.className = 'custom-cursor-ring';
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);
    
    // Hide native cursor on desktop
    document.documentElement.classList.add('custom-cursor-active');

    // Coordinates setup
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    
    // Track mouse position
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update dot position instantly
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    // LERP animation loop for trailing ring
    const LERP_FACTOR = 0.15; // Smooth trailing delay factor
    
    function animateCursor() {
      // Linear interpolation math
      ringX += (mouseX - ringX) * LERP_FACTOR;
      ringY += (mouseY - ringY) * LERP_FACTOR;
      
      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    // 2. Interactive States: expand & hover targets
    const hoverTargets = 'a, button, .btn, .nav-logo, input, textarea, [role="button"]';
    
    document.body.addEventListener('pointerenter', (e) => {
      if (e.target.matches && e.target.matches(hoverTargets)) {
        cursorRing.classList.add('hover-active');
        cursorDot.classList.add('hover-active');
      }
    }, { capture: true, passive: true });

    document.body.addEventListener('pointerleave', (e) => {
      if (e.target.matches && e.target.matches(hoverTargets)) {
        cursorRing.classList.remove('hover-active');
        cursorDot.classList.remove('hover-active');
      }
    }, { capture: true, passive: true });

    // Staggered interactive state for Cards
    const cardTargets = '.terminal-card, .highlight-card, .prize-tier, .perk-featured-card';
    
    document.body.addEventListener('pointerenter', (e) => {
      if (e.target.matches && e.target.matches(cardTargets)) {
        cursorRing.classList.add('card-hover');
      }
    }, { capture: true, passive: true });

    document.body.addEventListener('pointerleave', (e) => {
      if (e.target.matches && e.target.matches(cardTargets)) {
        cursorRing.classList.remove('card-hover');
      }
    }, { capture: true, passive: true });

    // 3. Click Pulse/Ripple Animation
    window.addEventListener('mousedown', (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'cursor-ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      
      // Auto-remove ripple element after CSS animation completes
      setTimeout(() => {
        ripple.remove();
      }, 450);
    });
  }

});
