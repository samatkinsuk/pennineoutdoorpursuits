const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-navigation");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a") && window.matchMedia("(max-width: 1000px)").matches) {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }
});

document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
  dropdown.addEventListener("toggle", () => {
    if (dropdown.open) {
      document.querySelectorAll(".nav-dropdown").forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) otherDropdown.open = false;
      });
    }
  });
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());