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

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-add-cart")) {
    const product = e.target.parentElement;
    const infoProduct = {
      quanty: 1,
      title: product.querySelector("h2").textContent,
      price: product.querySelector("p").textContent,
    };
    //some recorre la cantidad de productos
    const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showhtml();
  }
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showhtml();
	}
});
// funcion para mostrar html

const showhtml = () => {
  const showHTML = () => {
    if (!allProducts.length) {
      cartEmpty.classList.remove('hidden');
      rowProduct.classList.add('hidden');
      cartTotal.classList.add('hidden');
    } else {
      cartEmpty.classList.add('hidden');
      rowProduct.classList.remove('hidden');
      cartTotal.classList.remove('hidden');
    }

  //limpiar html
  rowProduct.innerHTML = '';
  let total = 0;
	let totalOfProducts = 0;

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
    rowProduct.append(containerProduct);

    total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
  });
  valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
  }};
