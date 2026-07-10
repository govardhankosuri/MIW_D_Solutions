// Open popup
function openPopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = "flex";
    }
}

// Close popup
function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = "none";
    }
}

// Close when clicking outside popup
document.querySelectorAll(".popup").forEach(function (popup) {
    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});

// Close on ESC key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        document.querySelectorAll(".popup").forEach(function (popup) {
            popup.style.display = "none";
        });
    }
});