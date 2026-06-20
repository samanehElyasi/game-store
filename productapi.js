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
  const divchild = document.createElement("div");
  divchild.className = "divcart";
  games.forEach((item) => {
     
     
      
    divchild.innerHTML += `
        <div class="img-carts">
          <img src="${item.image}" alt="${item.title}" class="carts-images">
        </div>  
        <h3 class="title-gamelist">${item.title}</h3>
        <div class="price-cart">
          <span class="price-carts">${item.price.toLocaleString()}</span>
          <span class="price-discount">${item.discount.toLocaleString()}</span>
        </div>
        `;
  });
  divcards.appendChild(divchild);
}

const divcards = document.querySelector("#products-slider__card");
const sectionCart = document.querySelector("products-slider__view");
