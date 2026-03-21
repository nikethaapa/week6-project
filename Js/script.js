var a=document.getElementById("one")
var b=document.getElementById("two")
var c=document.getElementById("three")
var d=document.getElementById("four")
var e=document.getElementById("five")

a.addEventListener("click",()=>{
    b.classList.toggle("translate-x-full")
})

c.addEventListener("click",()=>{
    b.classList.toggle("translate-x-full")
})

d.addEventListener("click",()=>{
    alert("Table Booked Successfully")
})

e.addEventListener("click",()=>{
    alert("Item added to cart")
})

// Popular Dishes Filter
const tabs = document.querySelectorAll(".tabs span");
const cards = document.querySelectorAll(".card");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));
        
        // Add active class to clicked tab
        tab.classList.add("active");
        
        // Get the filter type
        const filterType = tab.textContent.toLowerCase();
        
        // Filter cards
        cards.forEach(card => {
            if (filterType === "all") {
                card.style.display = "block";
            } else {
                if (card.classList.contains(filterType)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            }
        });
    });
});
