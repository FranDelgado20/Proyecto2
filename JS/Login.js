let divError1 = document.getElementById("divError1");
divError1.classList = "d-none";
let divError2 = document.getElementById("divError2");
divError2.classList = "d-none";
let botonId = document.getElementById("botonId");
let emailId = document.getElementById("emailId");
let passId = document.getElementById("passId");

let datosLogin = {
  email: "",
  pass: "",
};
const changeInput = (event) => {
  const { name, value } = event.target;
  datosLogin[name] = value;
 
  switch(name){
   case 'email':
    divError1.classList = 'd-none'
    emailId.classList.remove('is-invalid')
    break
   case 'pass':
    divError2.classList = 'd-none'
    passId.classList.remove('is-invalid')
    break
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

};

emailId.addEventListener("input", changeInput);
passId.addEventListener("input", changeInput);
botonId.addEventListener("click", changeInput);
