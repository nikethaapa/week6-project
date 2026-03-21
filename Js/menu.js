const products = document.querySelectorAll(".product_item");
const search = document.getElementById("search");
const checkboxes = document.querySelectorAll('input[name="filter"]');

// Run filter when typing
search.addEventListener("keyup", filterProducts);

// Run filter when checkbox changes
checkboxes.forEach(box => {
    box.addEventListener("change", filterProducts);
});

function filterProducts() {

    const searchValue = search.value.toLowerCase();

    const activeFilters = Array.from(checkboxes)
        .filter(box => box.checked)
        .map(box => box.value.toLowerCase());

    products.forEach(product => {

        const name = product.querySelector("h3").textContent.toLowerCase();
        const tags = product.dataset.tags.toLowerCase();

        const matchSearch = name.includes(searchValue);

        const matchFilter =
            activeFilters.length === 0 ||
            activeFilters.some(f => tags.includes(f));

        if (matchSearch && matchFilter) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}




var a=document.getElementById("one")
var b=document.getElementById("two")
var c=document.getElementById("three")


a.addEventListener("click",()=>{
    b.classList.toggle("translate-x-full")
})

c.addEventListener("click",()=>{
    b.classList.toggle("translate-x-full")
})