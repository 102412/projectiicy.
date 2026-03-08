
const glow = document.querySelector(".cursor-glow")
const crystal = document.querySelector(".crystal")

/* cursor glow movement */

document.addEventListener("mousemove", e => {

glow.style.left = e.clientX + "px"
glow.style.top = e.clientY + "px"

})


/* crystal follows mouse */

document.addEventListener("mousemove", e => {

let x = (window.innerWidth/2 - e.clientX) / 20
let y = (window.innerHeight/2 - e.clientY) / 20

crystal.style.transform =
`rotateY(${x}deg) rotateX(${y}deg)`

})


/* scroll parallax */

window.addEventListener("scroll", () => {

let scroll = window.scrollY

crystal.style.transform +=

` translateY(${scroll*.15}px)`

})
