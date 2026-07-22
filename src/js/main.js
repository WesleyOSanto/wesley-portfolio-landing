document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href").slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        event.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
