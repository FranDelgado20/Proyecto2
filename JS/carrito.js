const carrito = JSON.parse(localStorage.getItem('carrito')) || []
let tBody = document.getElementById('tBody')



tBody.innerHTML = carrito.map((prod) => `

<tr>
<th scope="row">${prod.codigo}</th>
<td>${prod.nombre}</td>
<td class='d-flex justify-content-between text-center'>
<button class="btn btn-outline-danger" onclick="restarCantidad(${prod.codigo})"><i class="bi bi-dash-lg"></i></button>
<h4 id="${prod.codigo}"> ${prod.cantidad} </h4>
<button class="btn btn-outline-success" onclick='sumarCantidad(${prod.codigo})'><i class="bi bi-plus-lg"></i></button>
</td>
<td>$${prod.precio}</td>
<td id='total${prod.codigo}'>$${prod.precio}</td>
<td>
<button class="btn btn-outline-danger" onclick="eliminarProdCarrito(${prod.codigo})"><i class="bi bi-x-circle"></i></button>
</td>
</tr>`).join("")

let cantidadProd = carrito.forEach(prod => {
  let cantidadProd = document.getElementById(`${prod.codigo}`)
  return cantidadProd
})
console.log(cantidadProd)
const eliminarProdCarrito = (codigo) => {
  const prodFilter = carrito.filter((prod) => prod.codigo !== codigo);
  Swal.fire({
    title: "¿Estás seguro de querer borrar este producto de su carrito?",
    text: "Esta acción no se puede revertir",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Producto borrado",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      localStorage.setItem("carrito", JSON.stringify(prodFilter));
      location.reload()
    }
  });
}

const restarCantidad = (codigo) =>{
  carrito.forEach((producto) => {
    if(producto.codigo === codigo){
      if(producto.cantidad > 1){
        producto.cantidad--
        cantidadProd.innerText = `${producto.cantidad}`
      }
    } 
  })
}
const sumarCantidad = (codigo) =>{
  carrito.forEach((producto) => {
    if(producto.codigo === codigo){
      producto.cantidad++
      cantidadProd.innerText = `${producto.cantidad}`
    }
  })
}
  let totalValor = document.getElementById('totalValor')
  let totalFinal = 0
  totalValor.innerText = carrito.map(prod => totalFinal += prod.precio)
  totalValor.innerText = `$${totalFinal} `

  const irAError404 = () => {
    let idUsuario = location.search.split("=")[1];
    
    location.href = `/HTML/Error404.html?id=${idUsuario}`
  }

  


