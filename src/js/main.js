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

  // ---- Hero demo card: spotlight + tilt on mouse move ----
  const demoCard = document.getElementById("demoCard");
  if (demoCard) {
    demoCard.addEventListener("mousemove", (event) => {
      const rect = demoCard.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      demoCard.style.setProperty("--mx", `${x}px`);
      demoCard.style.setProperty("--my", `${y}px`);

      const rotateY = ((x / rect.width) - 0.5) * 14;
      const rotateX = ((y / rect.height) - 0.5) * -14;
      demoCard.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    demoCard.addEventListener("mouseleave", () => {
      demoCard.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";
    });
  }

  // ---- Hero demo card: cycling interaction tags ----
  const tags = document.querySelectorAll("#demoTags .hero__tag");
  if (tags.length) {
    let activeIndex = 0;
    setInterval(() => {
      tags[activeIndex].classList.remove("is-active");
      activeIndex = (activeIndex + 1) % tags.length;
      tags[activeIndex].classList.add("is-active");
    }, 1800);

    tags.forEach((tag, index) => {
      tag.addEventListener("click", () => {
        tags[activeIndex].classList.remove("is-active");
        activeIndex = index;
        tag.classList.add("is-active");
      });
    });
  }

  // ---- Buttons: floating pill effect (letter flip + arrow + ripple) ----
  const ARROW_SVG =
    '<svg class="btn__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    "</svg>";

  document.querySelectorAll(".btn").forEach((btn) => {
    const label = btn.textContent.replace(/\s+/g, " ").trim();
    const showArrow = !btn.classList.contains("btn--small");

    const wordsHTML = [...label]
      .map((char, i) => {
        const safeChar = char === " " ? "&nbsp;" : char;
        return (
          `<span class="btn__char"><span style="--i:${i}" data-label="${safeChar}">${safeChar}</span></span>`
        );
      })
      .join("");

    btn.innerHTML =
      `<span class="btn__text"><span class="btn__words">${wordsHTML}</span>${showArrow ? ARROW_SVG : ""}</span>`;

    btn.addEventListener("click", (event) => {
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement("span");
      ripple.className = "btn__ripple";
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });
});
