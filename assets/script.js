document.addEventListener("DOMContentLoaded", function () {
  const y = new Date().getFullYear();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = y;

  // Simple reveal on scroll
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("reveal");
      });
    },
    { threshold: 0.08 }
  );
  document
    .querySelectorAll(".section, .project, .hero-card")
    .forEach((el) => obs.observe(el));
});
