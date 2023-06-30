let divNavbar1 = document.getElementById("divNavbar1")
let divNavbar2 = document.getElementById("divNavbar2")
let divRedes = document.getElementById("divRedes")

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
            divRedes.innerHTML = `
            <button onclick="irError404()" class="bg-transparent border-0"><i class="bi bi-facebook fs-1 mx-2 fb"></i></button>
            <button onclick="irError404()" class="bg-transparent border-0"><i class="bi bi-twitter fs-1 mx-2 tw"></i></button>
            <button onclick="irError404()" class="bg-transparent border-0"><i class="bi bi-instagram fs-1 mx-2 ig"></i></button>`
        }
        else if(usuario.role === "admin"){
            divNavbar1.innerHTML = `
            <button class="nav-link me-3 my-2" onclick='irInicio()'>Inicio</button>
            <button class="nav-link me-3 my-2" onclick='irProductos()'>Productos</button>`
            divNavbar2.innerHTML = `
            <button class="me-3 nav-link margen" onclick="irAdmin()">Administrador</button>
            <button class="me-3 nav-link" onclick='logout()'>Cerrar sesión</button>`
            divRedes.innerHTML = `
            <button onclick="irError404()" class="bg-transparent border-0"><i class="bi bi-facebook fs-1 mx-2 fb"></i></button>
            <button onclick="irError404()" class="bg-transparent border-0"><i class="bi bi-twitter fs-1 mx-2 tw"></i></button>
            <button onclick="irError404()" class="bg-transparent border-0"><i class="bi bi-instagram fs-1 mx-2 ig"></i></button>`
        }
    }
});

const logout = () => {
    usersLocalStorage[userIndex].login = false
    localStorage.setItem("users", JSON.stringify(usersLocalStorage))
    location.href = "/index.html"
}
const irInicio = () => location.href = `/index.html?id=${idUsuario}`

const irProductos = () => location.href = `/html/productos.html?id=${idUsuario} `
 
const irSobreNosotros = () => location.href = `/html/sobrenosotros.html?id=${idUsuario}`

const irCarrito = () => location.href = `/html/carrito.html?id=${idUsuario} `

const irAdmin = () => location.href = `/html/administrador.html?id=${idUsuario} `

const irError404 = () => location.href = `/html/error404.html?id=${idUsuario}`


