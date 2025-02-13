function toggleMenu() {
    document.querySelector(".navBar").classList.toggle("show");
}
document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelectorAll(".navBar li").forEach(item => {
    item.addEventListener("click", toggleMenu);
});