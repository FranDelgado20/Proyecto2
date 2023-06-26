let usuariosLS = JSON.parse(localStorage.getItem("users")) || []

let usuarioExiste = usuariosLS.filter(usuario => usuario.login === true)

let usuarioID = location.search.split("=")[1];

let indexUsuario = usuariosLS.findIndex((usuario) => usuario.id === parseInt(usuarioID))

if(usuarioID){
    if(!usuariosLS[indexUsuario].login){
        location.href = `/HTML/login.html`
        if(usuarioExiste[0].role === "admin") location.href = `/HTML/Administrador.html?id=${usuarioExiste[0].id}`
        else if(usuarioExiste[0].role === "user") location.href = `/HTML/Productos.html?id=${usuarioExiste[0].id}`
        else location.href = "/HTML/login.html"
    } 

}
else if(usuarioID !== undefined) location.href = "/HTML/login.html"