const btnCart = document.querySelector(".container-cart-icon");
const containerCartProducts = document.querySelector(
  ".container-cart-products"
);

btnCart.addEventListener("click", () => {
  containerCartProducts.classList.toggle("hidden-cart");
});

const cartInfo = document.querySelector(".cart-product");
const rowProduct = document.querySelector(".row-product");

//lista de todos los contenedores de productos
const productsList = document.querySelector(".container-items");

//variable de arreglos productos
let allProducts = [];

productsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-add-card")) {
    console.log("click");
    const product = e.target.parentElement;
    const infoProduct = {
      quanty: 1,
      title: product.querySelector("h2").textContent,
      price: product.querySelector("p").textContent,
    };
    /* combinar arrays */
    allProducts = [...allProducts, infoProduct];
    showhtml();
  }
});
// funcion para mostrar html

const showhtml = () => {
  allProducts.forEach((product) => {
    const containerProduct = document.createElement("section");
    containerProduct.classList.add("cart-product");
    /* añadir la informacion */
    containerProduct.innerHTML = `
    <article class="info-cart-product">
            <span class="cantidad-producto-carrito">${product.quanty}</span>
            <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>
        </article>
        <!-- icono de x -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon-close"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    `
    rowProduct.appendChild(containerProduct)
  })
};
