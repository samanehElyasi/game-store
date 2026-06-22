async function getData() {
  try {
    const res = await fetch("./api/db.json");
    const data = await res.json();


     renderCart(data.games);
  } catch (error) {
    console.error("error");
  }
}

getData();

function renderCart(games) {
  
  games.forEach((item) => {
    const divchild = document.createElement("div");
  divchild.className = "divcart";

    divchild.innerHTML = `
        <div class="img-carts">
          <img src="${item.image}" alt="${item.title}" class="carts-images">
        </div>  
        <h3 class="title-gamelist">${item.title}</h3>
        <div class="price-cart">
          <span class="price-carts">${item.price.toLocaleString()}</span>
          <span class="price-discount">${item.discount.toLocaleString()}</span>
        </div>
        <div class="products-slider__shop-icon">
          <img src="${item.imgicon}">
          </div>
        `;
         divcards.appendChild(divchild);
  });
 
}

const divcards = document.querySelector("#products-slider__card");


const arrowright=document.querySelector("#right-arrowproduct")
const arrowrleft =document.querySelector("#left-arrowproduct")
const maindiv=document.querySelector("#products-slider__card")
arrowright.addEventListener("click",()=>{
  
maindiv.scrollLeft += 125
})
arrowrleft.addEventListener("click",()=>{
  maindiv.scrollLeft -= 125
  })