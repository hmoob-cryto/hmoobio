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
      { threshold: 0.05, rootMargin: "50px" }
    );

    const observeAll = () => {
      document.querySelectorAll(".section-fade").forEach((el) => {
        if (!el.hasAttribute("data-observed")) {
          el.setAttribute("data-observed", "true");
          observer.observe(el);
        }
      });
    };

    // Initial pass
    observeAll();

    // Watch for dynamically added elements
    const mutationObserver = new MutationObserver(observeAll);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Fallback: periodic check for first 5 seconds
    const interval = setInterval(observeAll, 500);
    const timeout = setTimeout(() => clearInterval(interval), 5000);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
}
