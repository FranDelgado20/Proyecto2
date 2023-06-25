let divError = document.getElementById("divError")

let usersLS = JSON.parse(localStorage.getItem("users")) || []

usersLS.forEach(usuario => {
    if(usuario.login === true){
        if(usuario.role === "user") divError.innerHTML = `<button class="btn botones mt-3" onclick="irAInicio()">Volver a inicio</button>`
        else if(usuario.role === "admin") divError.innerHTML = `<button class="btn botones mt-3" onclick="irAadmin()">Volver a administrador</button>`
    }     
})

const irAInicio = () => location.href = `/index.html?id=${idUsuario}`

const irAadmin = () => location.href = `/HTML/Administrador.html?id=${idUsuario}`
