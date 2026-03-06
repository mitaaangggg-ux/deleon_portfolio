// Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Fade-in on scroll
const io = new IntersectionObserver(
  (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("show")),
  { threshold: 0.12 }
);
document.querySelectorAll(".fade").forEach(el => io.observe(el));

// Typewriter (Home only)
const typeEl = document.getElementById("type");
if (typeEl) {
  const words = ["UI layout design.", "wireframes.", "visual hierarchy."];
  let w = 0, i = 0, del = false;

  function tick(){
    const word = words[w];
    if (!del) {
      i++;
      typeEl.textContent = word.slice(0, i);
      if (i === word.length) { del = true; setTimeout(tick, 900); return; }
    } else {
      i--;
      typeEl.textContent = word.slice(0, i);
      if (i === 0) { del = false; w = (w + 1) % words.length; }
    }
    setTimeout(tick, del ? 45 : 60);
  }
  tick();
}

// Lightbox for certificates 
const lightbox = document.querySelector(".lightbox");

if (lightbox) {
  const img = lightbox.querySelector("img");

  document.querySelectorAll("[data-lightbox]").forEach((card) => {
    card.addEventListener("click", () => {
      const src = card.getAttribute("data-lightbox");

      // show overlay
      lightbox.classList.add("show");

      // set image source
      img.src = src;

      // error handling
      img.onerror = () => {
        alert("Image not found: " + src);
        lightbox.classList.remove("show");
      };
    });
  });

  // close when clicking background
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
    }
  });

  // close with ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("show");
    }
  });
}