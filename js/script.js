import './util/quoteGenerator.js';
import './util/toggleMenu.js';

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelectorAll(".fill").forEach((bar, index) => {
            const widths = ["90%", "80%", "40%"];
            bar.style.width = widths[index];
        });
    }, 100);
});
