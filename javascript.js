document.addEventListener("DOMContentLoaded", function () {

  // ===== CINEMATIC INTRO =====
  const intro = document.getElementById("cinematicIntro");
  const tagline = document.getElementById("introTagline");
  const sound = document.getElementById("introSound");

  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (isDark) {
    tagline.textContent = "Where the ocean whispers at night";
  } else {
    tagline.textContent = "Where the journey begins with light";
  }

  document.body.style.overflow = "hidden";

  if (sound) {
    sound.volume = 0;
    sound.play().then(() => {
      let vol = 0;
      const fadeIn = setInterval(() => {
        if (vol < 0.3) {
          vol += 0.02;
          sound.volume = vol;
        } else {
          clearInterval(fadeIn);
        }
      }, 100);
    }).catch(() => {});
  }

  setTimeout(() => {
    intro.classList.add("hide");

    if (sound) {
      let vol = sound.volume;
      const fadeOut = setInterval(() => {
        if (vol > 0.02) {
          vol -= 0.02;
          sound.volume = vol;
        } else {
          clearInterval(fadeOut);
          sound.pause();
        }
      }, 100);
    }

    document.body.style.overflow = "auto";
  }, 3800);

  // ===== HERO TEXT & NAV FADE =====
  const nav = document.querySelector(".floating-nav");

  window.addEventListener("load", () => {
    setTimeout(() => {
      nav.classList.add("visible");
    }, 2200);
  });

  // ===== NAV SCROLL EFFECT =====
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // ===== ADVENTURES CONTENT REVEAL =====
  const adventureContents = document.querySelectorAll(".adventure-content");
  const adventureObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  adventureContents.forEach(content => {
    adventureObserver.observe(content);
  });

  // ===== ADVENTURE BLOCK PARALLAX =====
  const blocks = document.querySelectorAll(".adventure-block");
  window.addEventListener("scroll", () => {
    blocks.forEach(block => {
      const rect = block.getBoundingClientRect();
      const speed = 0.3;
      const offset = rect.top * speed;
      block.style.backgroundPosition = `center ${offset}px`;
    });
  });

  // ===== DISCOVERIES REVEAL =====
  const discoveries = document.querySelectorAll(".discovery");
  const discoveryObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  discoveries.forEach(section => {
    discoveryObserver.observe(section);
  });

  // ===== FINAL BACKGROUND GENTLE PARALLAX =====
  const finalBg = document.querySelector(".final-bg");
  window.addEventListener("scroll", () => {
    if (!finalBg) return;

    const rect = finalBg.parentElement.getBoundingClientRect();
    const speed = 0.2;
    const offset = rect.top * speed;

    finalBg.style.transform = `translateY(${offset}px)`;
  });

});