// let usuariosLS = JSON.parse(localStorage.getItem("users")) || []

// let usuarioExiste = usuariosLS.filter(usuario => usuario.login === true)

// let usuarioID = location.search.split("=")[1];

// let indexUsuario = usuariosLS.findIndex((usuario) => usuario.id === parseInt(usuarioID))

// if (usuarioID) {
//     if(usuarioExiste.length > 0){
//         if (!usuariosLS[indexUsuario].login) {
//             if(usuarioExiste[0].role === "admin"){
//                 if (!window.location.href.includes(`/HTML/Administrador.html?id=${usuarioExiste[0].id}`)) {
//                   location.href = `/HTML/Administrador.html?id=${usuarioExiste[0].id}`;
//                 }
//             }else{
//                 if (!window.location.href.includes(`/HTML/Productos.html?id=${usuarioExiste[0].id}`)) {
//                     location.href = `/HTML/Productos.html?id=${usuarioExiste[0].id}`;
//                   }
//             }
//         } 
//         else {
//           switch (true) {
//             case usuarioExiste[0].role === "admin":
//               if (!window.location.href.includes(`/HTML/Administrador.html?id=${usuarioExiste[0].id}`)) {
//                 location.href = `/HTML/Administrador.html?id=${usuarioExiste[0].id}`;
//               }
//               break;
//             case usuarioExiste[0].role === "user":
//               if (!window.location.href.includes(`/HTML/Productos.html?id=${usuarioExiste[0].id}`)) {
//                 location.href = `/HTML/Productos.html?id=${usuarioExiste[0].id}`;
//               }
//               break;
//           }
//         }
//     }else{
//         location.href = "/HTML/login.html"
//     }
//   } else {
//     if(usuarioExiste > 0){

//         if(usuarioExiste[0].role === "admin"){
//             if (!window.location.href.includes(`/HTML/Administrador.html?id=${usuarioExiste[0].id}`)) {
//               location.href = `/HTML/Administrador.html?id=${usuarioExiste[0].id}`;
//             }
//         }
//         else if(usuarioExiste[0].role === "user"){
//             if (!window.location.href.includes(`/HTML/Productos.html?id=${usuarioExiste[0].id}`)) {
//                 location.href = `/HTML/Productos.html?id=${usuarioExiste[0].id}`;
//               }
//         }
//     }
//     else location.href = "/HTML/login.html"
//   }
  
// // if(usuarioID){
// //     if(!usuariosLS[indexUsuario].login){
// //         location.href = `/HTML/login.html`
// //         if(usuarioExiste[0].role === "admin") location.href = `/HTML/Administrador.html?id=${usuarioExiste[0].id}`
// //         else if(usuarioExiste[0].role === "user") location.href = `/HTML/Productos.html?id=${usuarioExiste[0].id}`
// //     }
// // }
// // else location.href = "/HTML/login.html"

// // if(!usuarioID){
// //     if(usuarioExiste[0].role === "admin") location.href = `/HTML/Administrador.html?id=${usuarioExiste[0].id}`
// //     else if(usuarioExiste[0].role === "user") location.href = `/HTML/Productos.html?id=${usuarioExiste[0].id}`
// //     else location.href = "/HTML/login.html"
// // }
// // else{
// //     const userLogin = usersLocalStorage[indexUsuario].login
// //     console.log(userLogin)
// //     if(!userLogin){
// //         if(usuarioExiste[0].role === "admin") location.href = `/HTML/Administrador.html?id=${usuarioExiste[0].id}`
// //         else if(usuarioExiste[0].role === "user") location.href = `/HTML/Productos.html?id=${usuarioExiste[0].id}`
// //     }
// // }