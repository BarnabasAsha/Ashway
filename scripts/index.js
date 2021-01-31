const productContent = document.querySelectorAll(".product_content");
const toggleContentOff = Array.from(
  document.querySelectorAll(".product-content-escape")
);
const toggleContentOn = Array.from(document.querySelectorAll(".icon_arrow-up"));

toggleContentOn.map((content) => {
  content.addEventListener("click", showContent);
});

toggleContentOff.map((content) => {
  content.addEventListener("click", hideContent);
});

function showContent(e) {
  e.target.parentElement.parentElement.parentElement.children[2].classList.add(
    "show-content"
  );
}

function hideContent(e) {
  e.target.parentElement.parentElement.parentElement.classList.remove(
    "show-content"
  );
}

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
