const primaryNav = document.querySelector("#primary-navigation");
const navToggleBtn = document.querySelector("#btn__nav__toggle");

navToggleBtn.addEventListener("click", () => {
  const visible = primaryNav.getAttribute("data-visible");
  if (visible === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navToggleBtn.setAttribute("aria-expanded", "true");
    navToggleBtn.classList.replace("fa-bars", "fa-close");
  } else {
    primaryNav.setAttribute("data-visible", "false");
    navToggleBtn.setAttribute("aria-expanded", "false");
    navToggleBtn.classList.replace("fa-close", "fa-bars");
  }
});
