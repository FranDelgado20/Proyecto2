let divNavbar1 = document.getElementById("divNavbar1")
let divNavbar2 = document.getElementById("divNavbar2")


let usersLocalStorage = JSON.parse(localStorage.getItem("users")) || []
let idUsuario = location.search.split("=")[1];
const userIndex = usersLocalStorage.findIndex((usuario) => usuario.id === parseInt(idUsuario));

usersLocalStorage.forEach(usuario => {
    if(usuario.login === true){
        if(usuario.role === "user"){
            divNavbar1.innerHTML = `
            <button class="nav-link me-3 my-2" onclick='irInicio()'>Inicio</button>
            <button class="nav-link me-3 my-2" onclick='irProductos()'>Productos</button>
            <button class="nav-link me-3 my-2" onclick='irSobreNosotros()'>Sobre nosotros</button>`
            divNavbar2.innerHTML = `
            <button class="me-3 nav-link margen" onclick='irCarrito()'>Mi carrito</button>
            <button class="me-3 nav-link" onclick='logout()'>Cerrar sesión</button>`
        }
        else if(usuario.role === "admin"){
            divNavbar2.innerHTML = `
            <button class="me-3 nav-link margen" onclick="irAdmin()">Administrador</button>
            <button class="me-3 nav-link" onclick='logout()' >Cerrar sesión</button>`
        }
    }
});

const logout = () => {
    usersLocalStorage[userIndex].login = false
    localStorage.setItem("users", JSON.stringify(usersLocalStorage))
    location.href = "/index.html"
}
const irInicio = () => location.href = `/index.html?id=${idUsuario}`

const irProductos = () => location.href = `/HTML/Productos.html?id=${idUsuario} `
 
const irSobreNosotros = () => location.href = `/HTML/Sobrenosotros.html?id=${idUsuario}`

const irCarrito = () => location.href = `/HTML/Carrito.html?id=${idUsuario} `

const irAdmin = () => location.href = `/HTML/Administrador.html?id=${idUsuario} `
