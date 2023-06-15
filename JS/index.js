let prodLS = JSON.parse(localStorage.getItem("productos"));

let divIndexProd = document.getElementById("divIndexProd")

let filtro = prodLS.filter(prod => prod.categoria.includes("Destacado"))

divIndexProd.innerHTML = filtro.map(producto => `
<div class="col-lg-4 col-md-6 col-sm-12 justify-content-center d-flex">
    <div class="card w-75 my-3 colorCards text-white sombra">
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <hr>
            <h6>Precio: ${producto.precio}</h6>
            <p class="card-text">Categoría: ${producto.categoria}</p>
            <a href="#" class="btn botones">Ver más</a>
        </div>
    </div>
</div>`).join("")


