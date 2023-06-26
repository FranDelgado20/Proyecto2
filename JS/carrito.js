const carrito = JSON.parse(localStorage.getItem('carrito')) || []
let tBody = document.getElementById('tBody')

carrito.forEach((prod) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <th scope="row">${prod.codigo}</th>
          <td>${prod.nombre}</td>
          <td>
          <input type='number' class='form-control' min="0" name='cantidad.${prod.codigo}' value='1' id='${prod.codigo}'</input>
          </td>
         <td>$${prod.precio}</td>
         <td id='total${prod.codigo}'>$${prod.precio}</td>
    `;
    tBody.appendChild(tr);
    const input = document.getElementById(prod.codigo);
    input.addEventListener("input", (ev) =>
      changeInput(ev, prod.precio, prod.codigo)
    );
  });


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

  const changeInput = (event, precio, prodCodigo) => {
    const total = document.getElementById(`total${prodCodigo}`);
    const { value } = event.target;
    
    totalFinal -= cantidadPrecio
    cantidadPrecio = precio * value;
    totalFinal += cantidadPrecio
    
    total.innerText = `$${cantidadPrecio}`
    totalValor.innerText = `$${totalFinal} `

  };

  const irAError404 = () => {
    let idUsuario = location.search.split("=")[1];
    
    location.href = `/HTML/Error404.html?id=${idUsuario}`
  }

  


