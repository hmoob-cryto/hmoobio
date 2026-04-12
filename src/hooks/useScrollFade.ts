import { useEffect } from "react";

export function useScrollFade() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "100px 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll(".section-fade:not(.visible)").forEach((el) => {
        observer.observe(el);
      });
    };

    // Initial pass
    observeAll();

    // Watch for dynamically added elements (data loaded async)
    const mutationObserver = new MutationObserver(observeAll);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Fallback: periodic check for first 10 seconds
    const interval = setInterval(observeAll, 300);
    const timeout = setTimeout(() => clearInterval(interval), 10000);

    // Safety: make everything visible after 5s regardless
    const safety = setTimeout(() => {
      document.querySelectorAll(".section-fade:not(.visible)").forEach((el) => {
        el.classList.add("visible");
      });
    }, 5000);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearInterval(interval);
      clearTimeout(timeout);
      clearTimeout(safety);
    };
  }, []);
}
