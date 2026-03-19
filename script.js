var a=document.getElementById("one")
var b=document.getElementById("two")
var c=document.getElementById("three")

a.addEventListener("click",function(){
    b.classList.toggle("translate-x-full")
})

c.addEventListener("click",function(){
    b.classList.toggle("translate-x-full")
})
