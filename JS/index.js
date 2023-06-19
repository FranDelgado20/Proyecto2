const productos = [
  {
    id:1,
    nombre: "Teclado Mecánico Redragon Kumara 552",
    precio: "$21450",
    categoria: "Destacado",
    img: "/IMG/Productos/kumara.png",
  },
  {
    id:2,
    nombre: "Mouse Logitech G203 White Lightsync RGB",
    precio: "$15999",
    categoria: "Destacado",
    img: "/IMG/Productos/g203.png",
  },
  {
    id:3,
    nombre: "Auriculares HyperX Cloud Flight Wireless",
    precio: "$71550",
    categoria: "Destacado",
    img: "/IMG/Productos/cloud-flight.png",
  },
  {
    id:4,
    nombre: "Procesador AMD Ryzen 5 3600 4.2GHz + Wraith Stealth Cooler",
    precio: "$93900",
    categoria: "Procesadores",
    img: "/IMG/Productos/ryzen5.png",
  },
  {
    id:5,
    nombre: "Procesador AMD Ryzen 7 5700G 4.6GHz + Wraith Stealth Cooler",
    precio: "$154900",
    categoria: "Procesadores",
    img: "/IMG/Productos/ryzen7.png",
  },
  {
    id:6,
    nombre: "Procesador Intel Core i3 10100F 4.3GHz",
    precio: "$40550",
    categoria: "Procesadores",
    img: "/IMG/Productos/i3.png",
  },
  {
    id:7,
    nombre: "Placa de Video ASUS GeForce GTX 1660 Super 6GB GDDR6",
    precio: "$204900",
    categoria: "Placas de video",
    img: "/IMG/Productos/gtx1660.png",
  },
  {
    id:8,
    nombre: "Placa de Video Zotac GeForce RTX 3070 Ti 8GB GDDR6X",
    precio: "$316900",
    categoria: "Placas de video",
    img: "/IMG/Productos/3070ti.png",
  },
  {
    id:9,
    nombre: "Placa de Video MSI GeForce RTX 3090 24GB GDDR6X",
    precio: "$443650",
    categoria: "Placas de video",
    img: "/IMG/Productos/3090.png",
  },
  {
    id:10,
    nombre: "Disco Sólido SSD Western Digital Green 480GB",
    precio: "$19199",
    categoria: "Almacenamiento",
    img: "/IMG/Productos/wd-green.png",
  },
  {
    id:11,
    nombre: "Disco Rígido Western Digital Blue 1TB",
    precio: "$22199",
    categoria: "Almacenamiento",
    img: "/IMG/Productos/wd-blue.png",
  },
  {
    id:12,
    nombre: "Memoria Adata DDR4 8GB 3600MHz XPG Spectrix",
    precio: "$24550",
    categoria: "RAM",
    img: "/IMG/Productos/ram.png",
  },
];

localStorage.setItem("productos", JSON.stringify(productos));

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
            <button type= 'button' class="btn botones" onclick='AgregarProductoCarrito(${producto.id})'>Agregar Carrito</button>
        </div>
    </div>
</div>`).join("")
const AgregarProductoCarrito = (id) => {
  console.log(id); 
 }


