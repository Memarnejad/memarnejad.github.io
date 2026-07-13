document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".site-banner");
  const sidebar = document.getElementById("sidebar");

  if (!banner || !sidebar) return;

  function updateSidebar() {
    const offset = Math.max(0, banner.offsetHeight - window.scrollY);

    sidebar.style.top = `${offset}px`;
    sidebar.style.height = `calc(100vh - ${offset}px)`;
  }

  updateSidebar();

  window.addEventListener("scroll", updateSidebar, { passive: true });
  window.addEventListener("resize", updateSidebar);
});