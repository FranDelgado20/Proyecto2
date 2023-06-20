let emailId = document.getElementById("emailId");

let errorDivEmail = document.getElementById("errorDivEmail");

errorDivEmail.classList = "d-none";

let userId = document.getElementById("userId");

let errorDivUser = document.getElementById("errorDivUser");

errorDivUser.classList = "d-none";

let passId = document.getElementById("passId");

let errorDivP = document.getElementById("errorDivP");

errorDivP.classList = "d-none";

let errorDivLength = document.getElementById('errorDivLength')

errorDivLength.classList = 'd-none'

let repeatPassId = document.getElementById("repeatPassId");

let errorDivRP = document.getElementById("errorDivRP");

errorDivRP.classList = "d-none";

let botonId = document.getElementById("botonId");

let usersLS = JSON.parse(localStorage.getItem("users")) || []

const usuarios = []

let idUser =
  usersLS.length > 0
    ? usersLS[usersLS.length - 1].id + 1
    : 1;

let datosRegister = {
  id: idUser,
  email: "",
  user: "",
  pass: "",
  repeatPass: "",
  role: "user",
  login: false
};

const changeInput = (event) => {
  const { name, value } = event.target;
  datosRegister[name] = value;
  
  switch (name) {
    case "email":
      errorDivEmail.classList = "d-none";
      emailId.classList.remove("is-invalid");
      break;
    case "user":
      errorDivUser.classList = "d-none";
     
      userId.classList.remove("is-invalid");
      break;
    case "pass":
      errorDivP.classList = "d-none";
      errorDivLength.classList = 'd-none'
      passId.classList.remove("is-invalid");
      break;
    case "repeatPass":
      errorDivRP.classList = "d-none";
      repeatPassId.classList.remove("is-invalid");
      break;
  }

};

const register = () => {
    let userExistente = usuarios.find((user)=> user.email === emailId.value)
    if (userExistente){
      Swal.fire({
        icon: "error",
        title: "El usuario ya existe",
      });
      return
    }

    let { email, user, pass, repeatPass } = datosRegister
    switch(true){
        case !email:
            errorDivEmail.classList = 'd-block text-danger'
            emailId.classList.add('is-invalid')
        case !user:
            errorDivUser.classList = 'd-block text-danger'
            userId.classList.add('is-invalid')
        case !pass:
            errorDivP.classList = 'd-block text-danger'
            passId.classList.add('is-invalid')
        case !repeatPass:
            errorDivRP.classList = 'd-block text-danger'
            repeatPassId.classList.add('is-invalid')
            return
    }
    if (pass.length < 5){
      errorDivLength.classList = 'd-block text-danger'
      passId.classList.add('is-invalid')
      return
    }
    if(pass != repeatPass){
        Swal.fire({
            icon: "error",
            title: "Las contraseñas no coinciden",
          });
          return;
    }
    
      if(user === "admin" && email === "admin@hotmail.com"){
        datosRegister.role = "admin"
        datosRegister.id = idUser
        usuarios.push({...datosRegister})
        idUser++
        localStorage.setItem("users", JSON.stringify(usuarios))
      }
      else{
        datosRegister.id = idUser
        usuarios.push({...datosRegister})
        idUser++
        localStorage.setItem("users", JSON.stringify(usuarios))
      }
    
    datosRegister = {
      id: idUser,
      email: "",
      user: "",
      pass: "",
      repeatPass: "",
      role: "user",
      login: false
    };
    
    emailId.value = ""
    userId.value = ""
    passId.value = ""
    repeatPassId.value = ""

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Usuario registrado',
      text: 'El usuario fue registrado con éxito',
      showConfirmButton: false,
      timer: 2000
    })
}

emailId.addEventListener("input", changeInput);
userId.addEventListener("input", changeInput);
passId.addEventListener("input", changeInput);
repeatPassId.addEventListener("input", changeInput);
botonId.addEventListener("click", changeInput);

// let emailId = document.getElementById("emailId");

// let errorEmail = document.getElementById("errorEmail");

// errorEmail.classList = "d-none";

// let errorEmail1 = document.getElementById("errorEmail1");

// errorEmail1.classList = "d-none";

// let passId = document.getElementById("passId");

// let errorPass = document.getElementById("errorPass");

// errorPass.classList = "d-none";

// let repeatPassId = document.getElementById("repeatPassId");

// let errorRepeatPass = document.getElementById("errorRepeatPass");

// errorRepeatPass.classList = "d-none";

// let nameId = document.getElementById("nameId");

// let errorName = document.getElementById("errorName");

// errorName.classList = "d-none";

// let lastNameId = document.getElementById("lastNameId");

// let errorLastName = document.getElementById("errorLastName");

// errorLastName.classList = "d-none";

// let errorCheck = document.getElementById("errorCheck");

// errorCheck.classList = "d-none";

// let checkId = document.getElementById("checkId");

// let usersLocalStorage = JSON.parse(localStorage.getItem("user")) || [];

// let idUser =
//   usersLocalStorage.length > 0
//     ? usersLocalStorage[usersLocalStorage.length - 1].id + 1
//     : 1;

// if (usersLocalStorage.length > 0) {
//   idUser = usersLocalStorage[usersLocalStorage.length - 1].id + 1;
// }

// let arrayUser = [];

// let datosUser = {
//   id: idUser,
//   email: "",
//   pass: "",
//   repeatPass: "",
//   nombre: "",
//   apellido: "",
//   check: false,
//   login: false,
//   role: "user",
// };

// const changeInput = (event) => {
//   const { name, value } = event.target;

//   if (name === "check") {
//     datosUser[name] = checkId.checked;

//     errorCheck.classList = "d-none";
//   } else {
//     datosUser[name] = value;

//     switch (name) {
//       case "email":
//         errorEmail.classList = "d-none";
//         errorEmail1.classList = "d-none";
//         emailId.classList.remove("is-invalid");
//         break;

//       case "pass":
//         errorPass.classList = "d-none";
//         passId.classList.remove("is-invalid");
//         break;

//       case "repeatPass":
//         errorRepeatPass.classList = "d-none";
//         repeatPassId.classList.remove("is-invalid");
//         break;

//       case "nombre":
//         errorName.classList = "d-none";
//         nameId.classList.remove("is-invalid");
//         break;

//       case "apellido":
//         errorLastName.classList = "d-none";
//         lastNameId.classList.remove("is-invalid");
//         break;
//     }
//   }
// };
// const register = () => {
//   let usuarioExistente = arrayUser.find(
//     (persona) => persona.email === emailId.value
//   );
//   if (usuarioExistente) {
//     Swal.fire({
//       icon: "error",
//       title: "El usuario ya existe",
//     });
//     return;
//   }

//   let { email, pass, repeatPass, nombre, apellido, check } = datosUser;

//   switch (true) {
//     case !email:
//       errorEmail.classList = "d-block text-danger";
//       emailId.classList.add("is-invalid");

//     case !pass:
//       errorPass.classList = "d-block text-danger";
//       passId.classList.add("is-invlaid");

//     case !repeatPass:
//       errorRepeatPass.classList = "d-block text-danger";
//       repeatPassId.classList.add("is-invalid");

//     case !nombre:
//       errorName.classList = "d-block text-danger";
//       nameId.classList.add("is-invalid");

//     case !apellido:
//       errorLastName.classList = "d-block text-danger";
//       lastNameId.classList.add("is-invalid");

//     case !check:
//       errorCheck.classList = "d-block text-danger";
//       return;
//   }
//   if (pass != repeatPass) {
//     Swal.fire({
//       icon: "error",
//       title: "Las contraseÃ±as no coinciden",
//     });
//     return;
//   }

//   if (email === "Admin") {
//     datosUser.role = "Admin";
//     datosUser.id = idUser;
//     arrayUser.push({ ...datosUser });
//     idUser++;
//     localStorage.setItem("user", JSON.stringify(arrayUser));
//   } else {
//     datosUser.id = idUser;
//     arrayUser.push({ ...datosUser });
//     idUser++;
//     localStorage.setItem("user", JSON.stringify(arrayUser));
//   }

//   datosUser = {
//     id: idUser,
//     email: "",
//     pass: "",
//     repeatPass: "",
//     nombre: "",
//     apellido: "",
//     check: false,
//     login: false,
//     role: "user",
//   };
//   Swal.fire({
//     icon: "success",
//     title: "Usuario creado",
//   });
//   emailId.value = "";
//   passId.value = "";
//   repeatPassId.value = "";
//   nameId.value = "";
//   lastNameId.value = "";
//   checkId.checked = false;
// };



// emailId.addEventListener("input", changeInput);
// passId.addEventListener("input", changeInput);
// repeatPassId.addEventListener("input", changeInput);
// nameId.addEventListener("input", changeInput);
// lastNameId.addEventListener("input", changeInput);
// checkId.addEventListener("click", changeInput);