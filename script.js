// ================= BACK TO TOP BUTTON =================
(function () {
    const btn = document.getElementById("backToTop");
    if (!btn) return;

    const SHOW_THRESHOLD = 200;
    const SCROLL_SPEED = 20; // pixels per frame

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

// ================= LEAFLET MAP =================
(function () {
    const mapContainer = document.getElementById("map");
    if (!mapContainer) return;

    // Initialize Leaflet map
    const map = L.map("map", {
        center: [38.73738824770978, -9.138672816480867], // Instituto Superior Técnico
        zoom: 16,
        dragging: false,        // lock dragging
        scrollWheelZoom: false, // lock zoom
        doubleClickZoom: false,
        zoomControl: false
    });

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker
    L.marker([38.73738824770978, -9.138672816480867])
        .addTo(map)
        .bindPopup("Instituto Superior Técnico")
        .openPopup();
})();