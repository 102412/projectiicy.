const bracelet = document.querySelector(".bracelet-visual img")

document.addEventListener("mousemove", e => {

let x = (window.innerWidth/2 - e.pageX) / 40
let y = (window.innerHeight/2 - e.pageY) / 40

bracelet.style.transform =
`rotateY(${x}deg) rotateX(${y}deg)`

})


/* parallax glow */

const glow = document.querySelector(".crystal-glow")

document.addEventListener("mousemove", e =>{

glow.style.transform =
`translate(${e.clientX/40}px, ${e.clientY/40}px)`

})
