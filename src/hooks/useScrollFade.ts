import { useEffect } from "react";

export function useScrollFade() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe existing elements
    const observeAll = () => {
      document.querySelectorAll(".section-fade:not(.observed)").forEach((el) => {
        el.classList.add("observed");
        observer.observe(el);
      });
    };

    observeAll();

    // Watch for dynamically added .section-fade elements
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
