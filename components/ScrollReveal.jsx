'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');

    document
      .querySelectorAll('.projects-grid, .mockup-grid, .ui-grid, .stack-grid, .contact-grid')
      .forEach(grid => {
        [...grid.children].forEach((child, index) => {
          child.style.transitionDelay = `${index * 0.08}s`;
        });
      });

    if (!('IntersectionObserver' in window) || !revealEls.length) {
      revealEls.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    revealEls.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
