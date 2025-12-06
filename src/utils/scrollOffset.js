export function setHeaderOffsetVar(selector = "#site-header") {
  const el = document.querySelector(selector);
  const root = document.documentElement;
  if (!el || !root) return;

  const update = () => {
    const h = el.getBoundingClientRect().height || 72;
    // small extra spacing so anchored content isn't flush to the header
    root.style.setProperty("--header-h", `${Math.ceil(h)}px`);
  };

  // initial set
  update();

  // update on resize (debounced)
  let t;
  window.addEventListener("resize", () => {
    clearTimeout(t);
    t = setTimeout(update, 120);
  });
}
