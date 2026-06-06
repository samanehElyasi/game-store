// Banner

const Bannertext = document.querySelector("#banner-text");

const console = ["Ps5", "Xbox", "Ps4"];

let current = 0;

function Textchange() {
  setInterval(() => {
    Bannertext.textContent = console[current];
    current = (current + 1) % console.length;
  }, 2000);
}
Textchange();



//         Light Dark Body        ////////

const sunEl = document.querySelector("#sun");
const moonEl = document.querySelector("#moon");

sunEl.addEventListener("click", () => {
  document.body.classList.remove("bg-color");
  document.body.classList.add("bg-colorlight");
  sunEl.classList.add("hidden");
  moonEl.classList.remove("hidden");

  localStorage.setItem("theme","light")
});

moonEl.addEventListener("click", () => {
  document.body.classList.add("bg-color");
  document.body.classList.remove("bg-colorlight");
 

  moonEl.classList.add("hidden");
  sunEl.classList.remove("hidden");

  localStorage.setItem("theme","dark")
});


const theme = localStorage.getItem("theme")

if(theme == "light"){
    document.body.classList.add("bg-colorlight");
  sunEl.classList.add("hidden");
  moonEl.classList.remove("hidden");

}else{
    document.body.classList.add("bg-color");
    moonEl.classList.add("hidden");
    sunEl.classList.remove("hidden");
}



//           Nav Bar        ///////

const MenuEl = document.querySelectorAll(".nav-header__products  a")


MenuEl.forEach((item)=>{
    item.addEventListener("mouseenter",()=>{
        const submenu = document.querySelector(".nav-header__product-name")
     
       item.classList.add("active")
    })
    item.addEventListener("mouseout",()=>{
        item.classList.remove("active")
    })


})


const showhamburger = document.querySelector(".nav-header__hamburger")
const closehamburger = document.querySelector(".close-hamburger")
const openhamburger = document.querySelector(".open-hamburgermenu")

openhamburger.addEventListener('click',()=>{
  showhamburger.classList.add("show")

})

closehamburger.addEventListener("click",()=>{
 showhamburger.classList.remove("show")

})


