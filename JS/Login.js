let divError1 = document.getElementById("divError1");
divError1.classList = "d-none";
let divError2 = document.getElementById("divError2");
divError2.classList = "d-none";
let botonId = document.getElementById("botonId");
let emailId = document.getElementById("emailId");
let passId = document.getElementById("passId");

let usersLS = JSON.parse(localStorage.getItem("users")) || [];

let datosLogin = {
  email: "",
  pass: "",
};
const changeInput = (event) => {
  const { name, value } = event.target;
  datosLogin[name] = value;

  switch (name) {
    case "email":
      divError1.classList = "d-none";
      emailId.classList.remove("is-invalid");
      break;
    case "pass":
      divError2.classList = "d-none";
      passId.classList.remove("is-invalid");
      break;
  }
};
const login = () => {
  let { email, pass } = datosLogin;
  switch (true) {
    case !email:
      divError1.classList = "d-block text-danger";
      emailId.classList.add("is-invalid");
    case !pass:
      divError2.classList = "d-block text-danger";
      passId.classList.add("is-invalid");
  }

  email = emailId.value;
  pass = passId.value;

  const userExist = usersLS.filter((usuario) => usuario.email === email);
  const userIndex = usersLS.findIndex((usuario) => usuario.email === email);

  if (userExist.length > 0) {
    if (userExist[0].pass === pass) {
      usersLS[userIndex].login = true;
      localStorage.setItem("users", JSON.stringify(usersLS));
      location.href = `/index.html?id=${userExist[0].id}`;

      if (userExist[0].role === "user") {
        usersLS[userIndex].login = true;
        localStorage.setItem("users", JSON.stringify(usersLS));
        location.href = `/index.html?id=${userExist[0].id}`;
      } else if (userExist[0].role === "admin") {
        usersLS[userIndex].login = true;
        localStorage.setItem("users", JSON.stringify(usersLS));
        location.href = `/HTML/Administrador.html?id=${userExist[0].id}`;
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "El usuario y/o contraseña con incorrectos",
        text: "Compruebe sus datos",
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "La cuenta ingresada no existe",
      text: "Ingrese otros datos o registre una nueva cuenta",
    });
  }
};

emailId.addEventListener("input", changeInput);
passId.addEventListener("input", changeInput);
botonId.addEventListener("click", changeInput);
