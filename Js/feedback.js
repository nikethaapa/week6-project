var a=document.getElementById("one")
var b=document.getElementById("two")
var c=document.getElementById("three")
var d=document.getElementById("four")
var e=document.getElementById("email")
var f=document.getElementById("message")
var g=document.getElementById("five")
var h=document.getElementById("six")

a.addEventListener("click",function(){
    b.classList.toggle("translate-x-full")
})

c.addEventListener("click",function(){
    b.classList.toggle("translate-x-full")
})


d.addEventListener("click",()=>{
    var e1=e.value.trim()
    var f1=f.value.trim()

    var e2=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    var val=true

    if (!e2.test(e1)){
        g.textContent="*Enter a valid email (example@gmail.com)"
        g.style.color='red'
        val=false
        setTimeout(() => {
            g.textContent=''
        }, 3000);
    }
    else{
        g.textContent=''
    }

    if (f1.length<4){
        h.textContent="*Message must be at least 4 characters"
        h.style.color="red"
        val=false
        setTimeout(() => {
            h.textContent=''
        }, 3000);
    }
    else{
        h.textContent=''
    }

    if (val === true) {
        alert("Feedback Submitted")

        setTimeout(() => {
            f.value = ''
            e.value = ''
        }, 1000)
    }

})