
/* CURSOR TRAIL */

const canvas = document.getElementById("cursor-trail")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

document.addEventListener("mousemove", e => {

particles.push({

x:e.clientX,

y:e.clientY,

life:100

})

})


function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach((p,i)=>{

ctx.beginPath()

ctx.arc(p.x,p.y,6,0,Math.PI*2)

ctx.fillStyle="rgba(120,200,255,.4)"

ctx.fill()

p.life--

if(p.life<=0){

particles.splice(i,1)

}

})

requestAnimationFrame(animate)

}

animate()



/* CRYSTAL SCROLL MOTION */

const crystal = document.querySelector(".crystal")

window.addEventListener("scroll",()=>{

let scroll = window.scrollY

crystal.style.transform =

`rotateY(${scroll*.15}deg) rotateX(${scroll*.1}deg)`

})


/* PARALLAX LIGHT */

document.addEventListener("mousemove", e => {

crystal.style.transform +=

` translate(${e.clientX/200}px,${e.clientY/200}px)`

})
