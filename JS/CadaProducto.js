let divPadre = document.getElementById('divPadre')

let productosLS = JSON.parse(localStorage.getItem('productos')) || []

let codeProd = location.search.split('=')[2]

let filtro = productosLS.filter((producto) => producto.codigo === parseInt(codeProd))



divPadre.innerHTML = filtro.map((producto) =>
`
<div class="col-lg-4 col-md-6 col-sm-12 mt-5">
    <img src=${producto.img} class='colorCards rounded-4 img-fluid '  >
</div>
<div class="col-lg-8 col-md-6 col-sm-12 mt-5 texto-producto">
    <h3>${producto.nombre}</h3>
<hr>
<section class=''>
    <h6>${producto.categoria}</h6>
    <hr>
    <h4 class='ms-3 text-white'>Precio Especial</h4>
    <h3 class='ms-3 text-white'>$${producto.precio}</h3>
    <hr>
<div class='d-flex justify-content-between'>
<ul class='lista-productos ' >
    <li>
        <i class="bi bi-shield-shaded"></i>
        Garantia - 24 meses
    </li>
    <li>
        <i class="bi bi-check-lg"></i>
        Stock disponible
    </li>
    <li>
        <i class="bi bi-truck"></i>
        Envios a todo el pais
    </li>
</ul>
<button class='btn botones fs-5' onclick='agregarProd(${producto.codigo})'><i class="bi bi-cart-plus" ></i> Agregar al carrito</button>
</div>
<hr>
</section>
</div>
`
)

const arrayProd = []

const agregarProd = (codigo) => {
    let prodLS = JSON.parse(localStorage.getItem('productos'))
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];
    const prodFilter = prodLS.filter(
      (prod) => parseInt(prod.codigo) === parseInt(codigo)
    );
    const prodExiste = carritoLS.filter(
      (prod) => parseInt(prod.codigo) === parseInt(codigo)
    );
    if (prodFilter.length > 0) {
      if (prodExiste.length === 0) {
        arrayProd.push(prodFilter[0]);
        localStorage.setItem("carrito", JSON.stringify(arrayProd));
      }
    }
  };

 