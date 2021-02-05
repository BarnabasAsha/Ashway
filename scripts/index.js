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
    nav.style.display = "block";
    state = true;
  } else {
    nav.style.display = "none";
    state = false;
  }
}
