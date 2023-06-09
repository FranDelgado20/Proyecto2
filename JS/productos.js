const productos = [
  {
    codigo: 100,
    nombre: "Teclado Mecánico Redragon Kumara 552",
    precio: 21450,
    categoria: "Destacado",
    img: "/IMG/Productos/kumara.png",
    cantidad: 1,
  },
  {
    codigo: 101,
    nombre: "Mouse Logitech G203 White Lightsync RGB",
    precio: 15999,
    categoria: "Destacado",
    img: "/IMG/Productos/g203.png",
    cantidad: 1,
  },
  {
    codigo: 102,
    nombre: "Auriculares HyperX Cloud Flight Wireless",
    precio: 71550,
    categoria: "Destacado",
    img: "/IMG/Productos/cloud-flight.png",
    cantidad: 1,
  },
  {
    codigo: 103,
    nombre: "Procesador AMD Ryzen 5 3600 4.2GHz + Wraith Stealth Cooler",
    precio: 93900,
    categoria: "Procesadores",
    img: "/IMG/Productos/ryzen5.png",
    cantidad: 1,
  },
  {
    codigo: 104,
    nombre: "Procesador AMD Ryzen 7 5700G 4.6GHz + Wraith Stealth Cooler",
    precio: 154900,
    categoria: "Procesadores",
    img: "/IMG/Productos/ryzen7.png",
    cantidad: 1,
  },
  {
    codigo: 105,
    nombre: "Procesador Intel Core i3 10100F 4.3GHz",
    precio: 40550,
    categoria: "Procesadores",
    img: "/IMG/Productos/i3.png",
    cantidad: 1,
  },
  {
    codigo: 106,
    nombre: "Placa de Video ASUS GeForce GTX 1660 Super 6GB GDDR6",
    precio: 204900,
    categoria: "Placas de video",
    img: "/IMG/Productos/gtx1660.png",
    cantidad: 1,
  },
  {
    codigo: 107,
    nombre: "Placa de Video Zotac GeForce RTX 3070 Ti 8GB GDDR6X",
    precio: 316900,
    categoria: "Placas de video",
    img: "/IMG/Productos/3070ti.png",
    cantidad: 1,
  },
  {
    codigo: 108,
    nombre: "Placa de Video MSI GeForce RTX 3090 24GB GDDR6X",
    precio: 443650,
    categoria: "Placas de video",
    img: "/IMG/Productos/3090.png",
    cantidad: 1,
  },
  {
    codigo: 109,
    nombre: "Disco Sólido SSD Western Digital Green 480GB",
    precio: 19199,
    categoria: "Almacenamiento",
    img: "/IMG/Productos/wd-green.png",
    cantidad: 1,
  },
  {
    codigo: 110,
    nombre: "Disco Rígido Western Digital Blue 1TB",
    precio: 22199,
    categoria: "Almacenamiento",
    img: "/IMG/Productos/wd-blue.png",
    cantidad: 1,
  },
  {
    codigo: 111,
    nombre: "Memoria Adata DDR4 8GB 3600MHz XPG Spectrix",
    precio: 24550,
    categoria: "RAM",
    img: "/IMG/Productos/ram.png",
    cantidad: 1,
  },
];

if(!JSON.parse(localStorage.getItem("productos"))) localStorage.setItem("productos", JSON.stringify(productos));

let prodLS = JSON.parse(localStorage.getItem("productos"))

let divProd = document.getElementById("divProd");

divProd.innerHTML = prodLS
  .map(
    (producto) => `
    <div class="col-lg-3 col-md-6 col-sm-12 justify-content-center d-flex">
        <div class="card w-75 my-3 colorCards text-white sombra">
            <img src="${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <hr>
                <h6>Precio: $${producto.precio}</h6>
                <p class="card-text">Categoría: ${producto.categoria}</p>
                <button class="btn botones" onclick='irVerMas(${producto.codigo})'>Ver más</button>
            </div>
        </div>
    </div>
`
  )
  .join("");

let buscarId = document.getElementById("buscarId");

const buscarProducto = (event) => {
  const { value } = event.target;

  let busqueda = value.toLowerCase();

  let filtro = prodLS.filter((prod) => {
    let nombre = prod.nombre.toLowerCase();
    let categoria = prod.categoria.toLowerCase();

    return nombre.includes(busqueda) || categoria.includes(busqueda);
  });
  if (filtro.length > 0) {
    divProd.innerHTML = filtro
      .map(
        (producto) => `
    <div class="col-lg-3 col-md-6 col-sm-12 justify-content-center d-flex">
        <div class="card w-75 my-3 colorCards text-white sombra">
            <img src="${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <hr>
                <h6>Precio: ${producto.precio}</h6>
                <p class="card-text">Categoría: ${producto.categoria}</p>
                <button class="btn botones" onclick='irVerMas(${producto.codigo})'>Ver más</button>
            </div>
        </div>
    </div>
`
      )
      .join("");
  } else
    divProd.innerHTML = `<h3 class="text-white text-center mt-3">No hay resultados</h3>`;
};

buscarId.addEventListener("input", buscarProducto);

const irVerMas = (codigo) => {
  let usersLS = JSON.parse(localStorage.getItem("users"));
  let idUsuario = location.search.split("=")[1];
  let usuarioFiltro = usersLS.filter(
    (usuario) => usuario.id === parseInt(idUsuario)
  );

  if(usuarioFiltro.length !== 0){
    if(usuarioFiltro[0].login === true && usuarioFiltro[0].role === "user") location.href = `/html/cadaproducto.html?id=${usuarioFiltro[0].id}?code=${codigo}`
    else if(usuarioFiltro[0].login === true && usuarioFiltro[0].role === "admin") location.href = `/html/administrador.html?id=${usuarioFiltro[0].id}`
  }
  else location.href = `/html/login.html`
}
