document.addEventListener("DOMContentLoaded", () => {

  const cardTexts = document.querySelectorAll(".card-text");

  if (!cardTexts.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      const container = entry.target;

      if (container.classList.contains("written")) {
        obs.unobserve(container);
        return;
      }

      container.style.opacity = 1;
      container.style.transform = "translateY(0)";

      const text = container.dataset.text;
      const words = text.split(" ");
      const paragraph = container.querySelector("p");

      paragraph.textContent = "";

      let index = 0;

      const typeWord = () => {
        if (index < words.length) {
          paragraph.textContent += (index === 0 ? "" : " ") + words[index];
          index++;
          setTimeout(typeWord, 160);
        } else {
          container.classList.add("written");
          obs.unobserve(container);
        }
      };

      setTimeout(typeWord, 800);

    });
  }, { threshold: 0.65 });

  cardTexts.forEach(card => observer.observe(card));

});