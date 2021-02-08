const product = document.querySelectorAll(".product");

product.forEach((e) => {
  e.addEventListener("click", function () {
    const panel = this.querySelector('[data-action="product-reveal"]');
    const image = this.querySelector("img");
    if (panel.classList.contains("show-content")) {
      panel.classList.remove("show-content");
      image.style.transform = ``;
    } else {
      panel.classList.add("show-content");
      image.style.transform = `scale(0.72)`;
    }
  });
});

//NAVIGATION

const closeNav = document.querySelector(".close");
const openNav = document.querySelector(".header_menubar");
const nav = document.querySelector(".mobile_nav_wrapper");

let state = false;

openNav.addEventListener("click", toggleNav);

function toggleNav() {
  if (state === false) {
    nav.classList.add("show-nav");
    state = true;
  } else {
    nav.classList.remove("show-nav");
    state = false;
  }
}
