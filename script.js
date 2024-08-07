// Initialization for ES Users
import { Input, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Input, Ripple });


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#page-wrapper'),
//     smooth: true,
//     lerp:0.05,
//     direction:"vertical",
//     getSpeed:true,
// });
const main=document.querySelector("#page-wrapper");

const para=document.querySelector('#page-wrapper');
main.addEventListener("scroll",()=>{
    console.log(window.scrollX,window.scrollY);
});
window.onscroll = function() {
  var distanceScrolled = window.scrollY;
  const elem=document.querySelector("#photo img");
  elem.style.scale=`${1+(distanceScrolled/1000)}`;
}
// console.log('Hi');
// window.addEventListener("scroll", () => {
//     const scrollThing = document.querySelector(".scrollThing");
//     const scrollThingTop = scrollThing.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;
  
//     // Check if the top of the scrollThing element is within 100 pixels of the bottom of the window
//     if (scrollThingTop < windowHeight - 100) {
//       // Add a class to trigger the animation
//       scrollThing.classList.add("animate");
//     }
//   });

const body1=document.querySelector('body');
const themeSwitch=document.querySelector('#themeSwitcher')
themeSwitch.addEventListener('click',(body)=>{
  if(body1.classList.contains('dark')){
    body1.classList.remove('dark');
  }else{
    body1.classList.add('dark');
  }
  
})
const menu=document.querySelector("#menu");
const menubar=document.querySelector("#menubar");
menu.addEventListener('click',()=>{
    menubar.classList.add("visible");
})


