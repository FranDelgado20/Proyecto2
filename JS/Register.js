let emailId = document.getElementById("emailId");

let errorDivEmail = document.getElementById("errorDivEmail");

errorDivEmail.classList = "d-none";

let userId = document.getElementById("userId");

let errorDivUser = document.getElementById("errorDivUser");

errorDivUser.classList = "d-none";

let passId = document.getElementById("passId");

let errorDivP = document.getElementById("errorDivP");

errorDivP.classList = "d-none";

let repeatPassId = document.getElementById("repeatPassId");

let errorDivRP = document.getElementById("errorDivRP");

errorDivRP.classList = "d-none";

let botonId = document.getElementById("botonId");

let datosRegister = {
  email: "",
  user: "",
  pass: "",
  repeatPass: "",
  // hay que agregar despues el rol y el login
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
      passId.classList.remove("is-invalid");
      break;
    case "repeatPass":
      errorDivRP.classList = "d-none";
      repeatPassId.classList.remove("is-invalid");
      break;
  }
};

const register = () =>{
    let {email,user,pass,repeatPass} = datosRegister
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
    }
    if(pass != repeatPass){
        Swal.fire({
            icon: "error",
            title: "Las contraseñas no coinciden",
          });
          return;
    }
}

emailId.addEventListener("input", changeInput);
userId.addEventListener("input", changeInput);
passId.addEventListener("input", changeInput);
repeatPassId.addEventListener("input", changeInput);
botonId.addEventListener("click", changeInput);
