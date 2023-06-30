let usersLS = JSON.parse(localStorage.getItem("users")) || [];

let prodLS = JSON.parse(localStorage.getItem("productos"));

let tBody1 = document.getElementById("tBody1");
let tBody2 = document.getElementById("tBody2");

let formId = document.getElementById("formId");
let crearProdNombre = document.getElementById("crearProdNombre");
let crearProdPrecio = document.getElementById("crearProdPrecio");
let crearProdCat = document.getElementById("crearProdCat");
let crearProdImg = document.getElementById("crearProdImg")

tBody1.innerHTML = usersLS
  .map(
    (usuario) => `
    <tr>
    <th scope="row" class="text-center">${usuario.id}</th>
    <td class="text-center">${usuario.email}</td>
    <td class="text-center">${usuario.user}</td>
    <td class="text-center">${usuario.role}</td>
    <td class="text-center">
    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${usuario.id}">
    Editar
    </button>
    <button class="btn btn-outline-danger" onclick="deleteUser(${usuario.id})">Eliminar</button>
    </td>

<div class="modal fade" id="exampleModal${usuario.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered bg-transparent text-white">
    <div class="modal-content colorModals">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modifica los datos del usuario ${usuario.id}</h1>
        <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
      <div class="mb-3">
        <label for="inputEmailId" class="form-label">Email</label>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1"
            ><i class="bi bi-envelope-at-fill"></i
          ></span>
          <input
            type="email"
            class="form-control"
            name="inputEmail"
            id="inputEmailId"
            placeholder="${usuario.email}"
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="inputUserId" class="form-label">Usuario</label>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1"
            ><i class="bi bi-person-circle"></i
          ></span>
          <input
            type="text"
            class="form-control"
            name="inputUser"
            id="inputUserId"
            placeholder="${usuario.user}"
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="inputRoleId" class="form-label">Rol</label>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1"
            ><i class="bi bi-gear-fill"></i
          ></span>
          <input
            type="text"
            class="form-control"
            id="inputRoleId"
            name="inputRole"
            placeholder="${usuario.role}"
          />
        </div>
      </div>
      <div class="text-end">
        <button type="button" onclick="sendChangeUsers(${usuario.id})" class="btn botones">Guardar</button>
      </div>
    </form>
      </div>
    </div>
  </div>
</div>
`
  )
  .join("");

let newEmail = "";
let newRole = "";
let newUser = "";
let inputUserId = document.getElementById("inputUserId");
let inputUserName = document.querySelectorAll('input[name="inputUser"]');
let inputEmailId = document.getElementById("inputEmailId");
let inputEmailName = document.querySelectorAll('input[name="inputEmail"]');
let inputRoleName = document.querySelectorAll('input[name="inputRole"]');
let inputRoleId = document.getElementById("inputRoleId");

const sendChangeUsers = (id) => {
  let userIndexId = usersLS.findIndex((usuario) => usuario.id === id);
  usersLS[userIndexId].email = newEmail;
  usersLS[userIndexId].user = newUser;
  usersLS[userIndexId].role = newRole;
  localStorage.setItem("users", JSON.stringify(usersLS));
  location.reload()
};
const changeInputUsers = (event) => {
  const { name, value } = event.target;
  if (name === "inputEmail") newEmail = value;
  if (name === "inputRole") newRole = value;
  if (name === "inputUser") newUser = value;
};

inputEmailName.forEach((input) =>
  input.addEventListener("input", changeInputUsers)
);

inputUserName.forEach((input) =>
  input.addEventListener("input", changeInputUsers)
);

inputRoleName.forEach((input) =>
  input.addEventListener("input", changeInputUsers)
);

inputEmailId.addEventListener("input", changeInputUsers);

inputUserId.addEventListener("input", changeInputUsers);

inputRoleId.addEventListener("input", changeInputUsers);

const deleteUser = (id) => {
  const userFilter = usersLS.filter((usuario) => usuario.id !== id);
  Swal.fire({
    title: "¿Estás seguro de querer borrar este usuario?",
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
        title: "Usuario borrado",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      localStorage.setItem("users", JSON.stringify(userFilter));
      location.reload()
    }
  });
};

tBody2.innerHTML = prodLS
  .map(
    (prod) => `
<tr>
<th scope="row" class="text-center">${prod.codigo}</th>
<td class="text-center">${prod.nombre}</td>
<td class="text-center">$${prod.precio}</td>
<td class="text-center">${prod.categoria}</td>
<td class="text-center">
<button type="button" class="btn btn-outline-primary marginBotones" data-bs-toggle="modal" data-bs-target="#exampleModal${prod.codigo}">
Editar
</button>
<button class="btn btn-outline-danger marginBotones" onclick="deleteProd(${prod.codigo})">Eliminar</button>
</td>
<div class="modal fade" id="exampleModal${prod.codigo}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered bg-transparent text-white">
    <div class="modal-content colorModals">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modifica los datos del producto</h1>
        <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
      <form>
      <div class="mb-3">
        <label for="inputNameId" class="form-label">Nombre del producto</label>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1"
            ><i class="bi bi-controller"></i></span>
          <input
            type="text"
            class="form-control"
            name="inputName"
            id="inputNameId"
            placeholder="${prod.nombre}"
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="inputPriceId" class="form-label">Precio</label>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1"
            ><i class="bi bi-currency-dollar"></i></span>
          <input
            type="number"
            class="form-control"
            name="inputPrice"
            id="inputPriceId"
            placeholder="${prod.precio}"
          />
        </div>
      </div>
      <div class="text-end">
        <button type="button" onclick="sendChangeProd(${prod.codigo})" class="btn botones">Guardar</button>
      </div>
    </form>
      </div>
    </div>
  </div>
</div>
`
  )
  .join("");

let newName = "";
let newPrice = null;
let newImg = ""

let inputNameId = document.getElementById("inputNameId");
let inputName = document.querySelectorAll('input[name="inputName"]');

let inputPriceId = document.getElementById("inputPriceId");
let inputPrice = document.querySelectorAll('input[name="inputPrice"]');

const sendChangeProd = (cod) => {
  let prodIndexCod = prodLS.findIndex((prod) => prod.codigo === cod);
  prodLS[prodIndexCod].nombre = newName;
  prodLS[prodIndexCod].precio = newPrice;
  localStorage.setItem("productos", JSON.stringify(prodLS));
  location.reload()
};
const changeInputProd = (event) => {
  const { name, value } = event.target;
  if (name === "inputName") newName = value;
  if (name === "inputPrice") newPrice = value;
};

inputName.forEach((input) => input.addEventListener("input", changeInputProd));

inputPrice.forEach((input) => input.addEventListener("input", changeInputProd));

inputNameId.addEventListener("input", changeInputProd);

inputPriceId.addEventListener("input", changeInputProd);

const deleteProd = (cod) => {
  const prodFilter = prodLS.filter((prod) => prod.codigo !== cod);
  Swal.fire({
    title: "¿Estás seguro de querer borrar este producto?",
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
      localStorage.setItem("productos", JSON.stringify(prodFilter));
      location.reload()
    }
  });
};
const crearProducto = (event) => {
  event.preventDefault();

  let newCode = prodLS[prodLS.length - 1].codigo + 1;
  let newProd = {
    codigo: newCode,
    nombre: "",
    precio: null,
    categoria: "",
    img: ""
  };
  newProd.nombre = crearProdNombre.value;
  newProd.precio = parseInt(crearProdPrecio.value);
  newProd.categoria = crearProdCat.value;
  newProd.img = crearProdImg.value

  if (
    newProd.nombre === "" ||
    newProd.categoria === "" ||
    newProd.precio === null
  ) {
    Swal.fire({
      icon: "error",
      title: "Formulario incompleto",
      text: "Completa los campos vacíos",
    });
    newCode--;
  } else {
    prodLS.push(newProd);

    localStorage.setItem("productos", JSON.stringify(prodLS));
    location.reload()
  }
};

formId.addEventListener("submit", crearProducto);