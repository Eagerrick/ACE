// back-to-top.js

(function () {
    const btn = document.getElementById("backToTop");
    if (!btn) return;

    const SHOW_THRESHOLD = 200;
    const SCROLL_SPEED = 20; // pixels per frame (adjust for rhythm)

    function toggleButton() {
        if (window.scrollY > SHOW_THRESHOLD) {
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    }

    function scrollToTop() {
        function step() {
            const currentScroll = window.scrollY || document.documentElement.scrollTop;

            if (currentScroll > 0) {
                window.scrollTo(0, currentScroll - SCROLL_SPEED);
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    window.addEventListener("scroll", toggleButton, { passive: true });
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        scrollToTop();
    });

    toggleButton();
})();
