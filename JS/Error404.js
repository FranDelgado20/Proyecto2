let divError = document.getElementById("divError")

let usersLS = JSON.parse(localStorage.getItem("users")) || []

usersLS.forEach(usuario => {
    if(usuario.login === true){
        divError.innerHTML = `<button class="btn botones mt-3" onclick="irAInicio()">Volver a inicio</button>`
    }     
})

const irAInicio = () => location.href = `/index.html?id=${idUsuario}`
