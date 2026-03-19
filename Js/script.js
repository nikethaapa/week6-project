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


