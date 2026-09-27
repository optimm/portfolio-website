// Fades elements marked with data-reveal in as they first scroll into view.
// The pre-rendered HTML is fully visible; content only starts hidden once this
// runs (the reveal-ready class), so crawlers and no-JS visitors see everything.
export function initReveal() {
  if (!("IntersectionObserver" in window)) return undefined;
  document.documentElement.classList.add("reveal-ready");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute("data-shown", "");
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.1 }
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
  return () => io.disconnect();
}
