const productos = [
  {
   
    codigo: '100',
    nombre: "Teclado Mecánico Redragon Kumara 552",
    precio: 21450,
    categoria: "Destacado",
    img: "/IMG/Productos/kumara.png",
  },
  {
  
    codigo: '101',
    nombre: "Mouse Logitech G203 White Lightsync RGB",
    precio: 15999,
    categoria: "Destacado",
    img: "/IMG/Productos/g203.png",
  },
  {
   
    codigo: '102',
    nombre: "Auriculares HyperX Cloud Flight Wireless",
    precio: 71550,
    categoria: "Destacado",
    img: "/IMG/Productos/cloud-flight.png",
  },
  {
    
    codigo: '103',
    nombre: "Procesador AMD Ryzen 5 3600 4.2GHz + Wraith Stealth Cooler",
    precio: 93900,
    categoria: "Procesadores",
    img: "/IMG/Productos/ryzen5.png",
  },
  {
    
    codigo: '104',
    nombre: "Procesador AMD Ryzen 7 5700G 4.6GHz + Wraith Stealth Cooler",
    precio: 154900,
    categoria: "Procesadores",
    img: "/IMG/Productos/ryzen7.png",
  },
  {
  
    codigo: '105',
    nombre: "Procesador Intel Core i3 10100F 4.3GHz",
    precio: 40550,
    categoria: "Procesadores",
    img: "/IMG/Productos/i3.png",
  },
  {
    
    codigo: '106',
    nombre: "Placa de Video ASUS GeForce GTX 1660 Super 6GB GDDR6",
    precio: 204900,
    categoria: "Placas de video",
    img: "/IMG/Productos/gtx1660.png",
  },
  {
    
    codigo: '107',
    nombre: "Placa de Video Zotac GeForce RTX 3070 Ti 8GB GDDR6X",
    precio: 316900,
    categoria: "Placas de video",
    img: "/IMG/Productos/3070ti.png",
  },
  {
  
    codigo: '108',
    nombre: "Placa de Video MSI GeForce RTX 3090 24GB GDDR6X",
    precio: 443650,
    categoria: "Placas de video",
    img: "/IMG/Productos/3090.png",
  },
  {
    

    codigo: '109',
    nombre: "Disco Sólido SSD Western Digital Green 480GB",
    precio: 19199,
    categoria: "Almacenamiento",
    img: "/IMG/Productos/wd-green.png",
  },
  {
   

    codigo: '110',
    nombre: "Disco Rígido Western Digital Blue 1TB",
    precio: 22199,
    categoria: "Almacenamiento",
    img: "/IMG/Productos/wd-blue.png",
  },
  {
 

    codigo: '111',
    nombre: "Memoria Adata DDR4 8GB 3600MHz XPG Spectrix",
    precio: 24550,
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
</div>`)

.join("");

  const arrayProd = []

const AgregarProductoCarrito = (id) => {
  const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []
 const prodfilter = prodLS.filter((prod) => prod.id === id)
 const prodExistCart = carritoLS.filter((prod) => prod.id === id)

 if(prodfilter.length > 0){
  if(prodExistCart.length === 0){
    arrayProd.push(prodfilter[0])
    localStorage.setItem('carrito', JSON.stringify(arrayProd))
  }
 }
}


