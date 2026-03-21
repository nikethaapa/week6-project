document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tabs span");
    const cards = document.querySelectorAll(".card");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            // Add active class to clicked tab
            tab.classList.add("active");

            const category = tab.textContent.toLowerCase();

            // Filter cards
            cards.forEach(card => {
                if (category === "all") {
                    card.style.display = "block";
                } else {
                    if (card.classList.contains(category)) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                }
            });
        });
    });
});
