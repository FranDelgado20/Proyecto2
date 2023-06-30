let usuariosLS = JSON.parse(localStorage.getItem("users")) || []

let usuarioExiste = usuariosLS.filter(usuario => usuario.login === true)

let usuarioID = location.search.split("=")[1];

let indexUsuario = usuariosLS.findIndex((usuario) => usuario.id === parseInt(usuarioID))

if (usuarioID) {
    if(usuarioExiste.length > 0){
        if (!usuariosLS[indexUsuario].login) {
            if(usuarioExiste[0].role === "admin"){
                if (!window.location.href.includes(`/html/administrador.html?id=${usuarioExiste[0].id}`)) {
                  location.href = `/html/administrador.html?id=${usuarioExiste[0].id}`;
                }
            }else{
                if (!window.location.href.includes(`/html/productos.html?id=${usuarioExiste[0].id}`)) {
                    location.href = `/html/productos.html?id=${usuarioExiste[0].id}`;
                  }
            }
        } 
        else {
          switch (true) {
            case usuarioExiste[0].role === "admin":
              if (!window.location.href.includes(`/html/administrador.html?id=${usuarioExiste[0].id}`) && !window.location.href.includes(`/index.html?id=${usuarioExiste[0].id}`) && !window.location.href.includes(`/html/productos.html?id=${usuarioExiste[0].id}`)) {
                location.href = `/html/administrador.html?id=${usuarioExiste[0].id}`;
              }
              break;
            case usuarioExiste[0].role === "user":
              if (!window.location.href.includes(`/html/productos.html?id=${usuarioExiste[0].id}`) && !window.location.href.includes(`/html/cadaproducto.html?id=${usuarioExiste[0].id}`) && !window.location.href.includes(`/html/sobrenosotros.html?id=${usuarioExiste[0].id}`) && !window.location.href.includes(`/index.html?id=${usuarioExiste[0].id}`)&& !window.location.href.includes(`/html/carrito.html?id=${usuarioExiste[0].id}`))  {
                location.href = `/html/productos.html?id=${usuarioExiste[0].id}`;
              }
              break;
          }
        }
    }else{
        location.href = "/html/login.html"
    }
  } else {
    if(usuarioExiste.length > 0){

        if(usuarioExiste[0].role === "admin"){
            if (!window.location.href.includes(`/html/administrador.html?id=${usuarioExiste[0].id}`)) {
              location.href = `/html/administrador.html?id=${usuarioExiste[0].id}`;
            }
        }
        else if(usuarioExiste[0].role === "user"){
            if (!window.location.href.includes(`/html/productos.html?id=${usuarioExiste[0].id}`)) {
                location.href = `/html/productos.html?id=${usuarioExiste[0].id}`;
              }
        }
    }
    else location.href = "/html/login.html"
  }
  