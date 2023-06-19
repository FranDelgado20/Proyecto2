const carrito = JSON.parse(localStorage.getItem('carrito')) || []
const tBody = document.getElementById('tBody')

/* tBody.innerHTML = carrito.map((prod) =>
`
<tr>
 <th scope="row">${prod.codigo}</th>
 <td>${prod.nombre}</td>
 <td>${prod.precio}</td>
 <td>
 <input type='number' class='w-50' name='cantidad'> 
 </td>
 <td>0</td>
</tr>
`
).join('')

const imputsCantidad = document.querySelectorAll('imput[name=¨cantidad¨]')
imputsCantidad.forEach((input) => input.addEventListener('input', (ev) => ChangeInput(ev)))
const ChangeInput = (event) => {
const {name, value} = event.target
console.log(name)
console.log(value)
} */

carrito.forEach(prod => {

    const tr = document.createElement('tr')

    tr.innerHTML =
    `<th scope="row">${prod.codigo}</th>
    <td>${prod.nombre}</td>
    <td>${prod.precio}</td>
    <td>
    <input type='number' class='w-50' name='cantidad${prod.id}' id='${prod.id}' > 
    </td>
    <td id='total${prod.id}'>0</td>`

    tBody.appendChild(tr)
    
 const input = document.getElementById(prod.id)
 input.addEventListener('input', (ev) => changeInput(ev, prod.precio, prod.id))
});

let cantidadXPrecio = 0 
let totalFinal = 0

let totalFinalDoc = document.getElementById('totalFinal')

const changeInput = (event, precio, propID) => {
    const total = document.getElementById(`total${propID}`)
    const {value} = event.target
cantidadXPrecio = precio * value

totalFinal += cantidadXPrecio
total.innerText = cantidadXPrecio
totalFinalDoc.innerText = totalFinal
console.log(totalFinal);
}