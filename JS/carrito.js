const carrito = JSON.parse(localStorage.getItem('carrito')) || []
const tBody = document.getElementById('tBody')

carrito.forEach((prod) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <th scope="row">${prod.codigo}</th>
          <td>${prod.nombre}</td>
          <td>
          <input type='number' class='form-control' min="0" name='cantidad.${prod.codigo}' id='${prod.codigo}'</input>
          </td>
         <td>$${prod.precio}</td>
         <td id='total${prod.codigo}'>$0</td>
    `;
    tBody.appendChild(tr);
    const input = document.getElementById(prod.codigo);
    input.addEventListener("input", (ev) =>
      changeInput(ev, prod.precio, prod.codigo)
    );
  });
  let cantidadPrecio = 0;
  let totalValor = document.getElementById('totalValor')
  let totalFinal = 0
  const changeInput = (event, precio, prodCodigo) => {
    const total = document.getElementById(`total${prodCodigo}`);
    const { value } = event.target;
    cantidadPrecio = precio * value;
    totalFinal = totalFinal + cantidadPrecio
    
    total.innerText = cantidadPrecio;
    totalValor.innerText = `$${totalFinal} `
  };
  