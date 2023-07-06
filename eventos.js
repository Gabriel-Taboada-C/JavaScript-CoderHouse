// Funcion del Login

let usuarioLogueado;

function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let user = users.find((usuario) => {
    return usuario.email == email && usuario.password == password;
  });
  if (user) {
    /* Logica de Login */
    console.log(`Bienvenido ${user.name} ${user.lastName}`);
    usuarioLogueado = user;
    lista_operaciones = user.operaciones;
    console.log(lista_operaciones);
    document.getElementById(
      "saludo"
    ).textContent = `Bienvenida/o ${user.name} ${user.lastName}`;
    tablaHistorial();
    openHistorial();
    closeLogin();
  } else {
    /* Logica de Error */
    console.log("Datos incorrectos");
  }
}

let openLoginFlag = false;

function openLogin() {
  let flexLogin = document.querySelector(".login_popup");
  console.log(flexLogin);

  flexLogin.style.display = "flex";
}

function closeLogin() {
  let flexLogin = document.querySelector(".login_popup");
  let btn_login = document.querySelector(".btn_login");
  let btn_registrarse = document.querySelector(".btn_registrarse");
  console.log(flexLogin);

  flexLogin.style.display = "none";
  btn_login.innerHTML = "Cerrar Sesion";
  btn_login.style.backgroundColor = "#f42c2c";
  openLoginFlag = !openLoginFlag;
  btn_registrarse.style.display = "none";
}

function closeLoginFlex() {
  let flexLogin = document.querySelector(".login_popup");
  console.log(flexLogin);
  flexLogin.style.display = "none";
}

function logout() {
  let btn_login = document.querySelector(".btn_login");
  let btn_registrarse = document.querySelector(".btn_registrarse");
  if (openLoginFlag) {
    closeLogin();
    btn_login.innerHTML = "Login";
    btn_login.style.backgroundColor = "transparent";
    btn_registrarse.style.display = "inline";
    document.getElementById(
      "saludo"
    ).textContent = `Bienvenida/o usuario anónimo`;
    limpiarFilas();
    openHistorial();
  }
}

function limpiarFilas() {
  let tbody = document.querySelector("#operaciones tbody");
  tbody.innerHTML = "";
  lista_operaciones = [];
}

// Eventos de Registrarse

function openRegister() {
  let flexRegister = document.querySelector(".register_popup");
  console.log(flexRegister);

  flexRegister.style.display = "flex";
}

function closeRegister() {
  let flexLogin = document.querySelector(".register_popup");
  console.log(flexLogin);

  flexLogin.style.display = "none";
}

let nombre = document.getElementById("txtName");
let email = document.getElementById("txtEmail");
let pass = document.getElementById("txtPassword");
let form = document.getElementById("formRegister");
let parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  parrafo.innerHTML = "";
  if (nombre.value.length < 4) {
    warnings += `El Nombre no es válido <br>`;
    entrar = true;
  }
  if (pass.value.length < 8) {
    warnings += `La contraseña no es válida <br>`;
    entrar = true;
  }
  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
});

// Eventos de los Botones Historial

let openHistorialFlag = false;

function openHistorial() {
  openHistorialFlag = !openHistorialFlag;
  if (openHistorialFlag) {
    let flexHistorial = document.querySelector(".operaciones");
    console.log(flexHistorial);

    flexHistorial.style.display = "flex";

    let btn = document.getElementById("btn_historial");
    btn.innerHTML = "Cerrar Historial";
  } else {
    closeHistorial();
  }
}

function closeHistorial() {
  let flexHistorial = document.querySelector(".operaciones");
  console.log(flexHistorial);

  flexHistorial.style.display = "none";
  let btn = document.getElementById("btn_historial");
  btn.innerHTML = "Abrir Historial";
}

// Eventos de los botones del Abrir y Cerrar Calc. Cientifica

let openScienceFlag = false;

function openScience() {
  openScienceFlag = !openScienceFlag;
  if (openScienceFlag) {
    let flexScience = document.querySelectorAll(".btn_hidden");
    console.log(flexScience);
    for (let i = 0; i < flexScience.length; i++) {
      flexScience[i].style.display = "inline-block";
    }
    let h1 = document.getElementById("title");
    h1.textContent = "Bienvenidos a Advance Calculator";
    let txt = document.getElementById("descripcion");
    txt.textContent = `En esta calculadora online podrás hacer operaciones avanzadas y ver la
    tabla de un número a elección. Las operaciones realizadas por el
    usuario quedaran almacenadas en el historial y podrán verse en el
    mismo; por ello recomendamos Loguearse a nuestro sistema para poder
    guardar lo realizado y verlo posteriormente.`;
  } else {
    closeScience();
  }
}

function closeScience() {
  let flexScience = document.querySelectorAll(".btn_hidden");
  console.log(flexScience);
  for (let i = 0; i < flexScience.length; i++) {
    flexScience[i].style.display = "none";
  }
  let btn = document.getElementById("btn_cientifica");
  btn.textContent = "Calculadora Científica";
  let h1 = document.getElementById("title");
  h1.textContent = "Bienvenidos a Simple Calculator";
  let txt = document.getElementById("descripcion");
  txt.textContent = `En esta calculadora online podrás hacer operaciones básicas y ver la
    tabla de un número a elección. Las operaciones realizadas por el
    usuario quedaran almacenadas en el historial y podrán verse en el
    mismo; por ello recomendamos Loguearse a nuestro sistema para poder
    guardar lo realizado y verlo posteriormente.`;
}

// Eventos de los botones de la Calculadora Simple

let pantalla = "";
let num = "0";

function ingresarValor(v) {
  pantalla += v;
  document.getElementById("pantalla").value = pantalla;
}

function borrar() {
  pantalla = pantalla.slice(0, -1);
  document.getElementById("pantalla").value = pantalla.slice(0);
}

function limpiar() {
  pantalla = "";
  document.getElementById("pantalla").value = "";
}

function porcentaje(v) {
  pantalla = pantalla / v;
  document.getElementById("pantalla").value = pantalla;
}

function tabla() {
  let lista_resultados = [];
  let num = 0;
  for (i = 0; i < 11; i = i + 1) {
    num = parseFloat(document.getElementById("pantalla").value);
    let result_tbl = num * i;
    lista_resultados.push(result_tbl);
  }
  pantalla = lista_resultados;
  document.getElementById("pantalla").value = `Tabla del ${num}`;
  console.log(pantalla);
}

/* VER Y CORREGIR no me muestra bien los resultados de la tabla en el historial */

function resolver() {
  let operacion = document.getElementById("pantalla").value;
  console.log(operacion);
  let resultado = eval(operacion);
  document.getElementById("pantalla").value = resultado;
  pantalla = resultado;
  console.log(resultado);
  if (operacion != "" && resultado != "") {
    addOperaciones(operacion, resultado);
  }
  console.log(usuarioLogueado);
  console.log(lista_operaciones);
  tablaHistorial();
  localStorage.setItem("operacion", JSON.stringify(lista_operaciones));
  limpiar();
}

// Eventos de los botones de la Calculadora Cientifica

let openBtnFlag = false;

function openBtn() {
  openBtnFlag = !openBtnFlag;
  if (openBtnFlag) {
    let flexSen = document.querySelector(".btn_sen");
    console.log(flexSen);
    flexSen.innerHTML = "sen-1";
    flexSen.style.fontSize = "15px";
    let flexCos = document.querySelector(".btn_cos");
    console.log(flexCos);
    flexCos.innerHTML = "cos-1";
    flexCos.style.fontSize = "15px";
    let flexTan = document.querySelector(".btn_tan");
    console.log(flexTan);
    flexTan.innerHTML = "tan-1";
    flexTan.style.fontSize = "15px";
  } else {
    closeBtn();
  }
}

function closeBtn() {
  let flexSen = document.querySelector(".btn_sen");
  console.log(flexSen);
  flexSen.innerHTML = "sen";
  let flexCos = document.querySelector(".btn_cos");
  console.log(flexCos);
  flexCos.innerHTML = "cos";
  let flexTan = document.querySelector(".btn_tan");
  console.log(flexTan);
  flexTan.innerHTML = "tan";
}

function radianes() {
  degrees = document.getElementById("pantalla").value;
  resultado = degrees * (Math.PI / 180);
  document.getElementById("pantalla").value = resultado;
}

function seno() {
  let btn = document.querySelector(".btn_sen").textContent.trim();
  if (btn == "sen") {
    let valor = document.getElementById("pantalla").value;
    let resultado = Math.sin(valor);
    document.getElementById("pantalla").value = resultado;
  } else {
    let valor = document.getElementById("pantalla").value;
    let resultado = Math.asin(valor);
    document.getElementById("pantalla").value = resultado;
  }
}

function coseno() {
  let btn = document.querySelector(".btn_cos").textContent.trim();
  if (btn == "cos") {
    let valor = document.getElementById("pantalla").value;
    let resultado = Math.cos(valor);
    document.getElementById("pantalla").value = resultado;
  } else {
    let valor = document.getElementById("pantalla").value;
    let resultado = Math.acos(valor);
    document.getElementById("pantalla").value = resultado;
  }
}

function tangente() {
  let btn = document.querySelector(".btn_tan").textContent.trim();
  if (btn == "tan") {
    let valor = document.getElementById("pantalla").value;
    let resultado = Math.tan(valor);
    document.getElementById("pantalla").value = resultado;
  } else {
    let valor = document.getElementById("pantalla").value;
    let resultado = Math.atan(valor);
    document.getElementById("pantalla").value = resultado;
  }
}

function potencia() {
  let valor = parseFloat(document.getElementById("pantalla").value);
  resultado = Math.pow(valor, 2);
  document.getElementById("pantalla").value = resultado;
}

function logaritmo() {
  let valor = document.getElementById("pantalla").value;
  let resultado = Math.log(valor);
  document.getElementById("pantalla").value = resultado;
}

function logaritmoNatural() {
  let valor = document.getElementById("pantalla").value;
  let resultado = Math.log10(valor);
  document.getElementById("pantalla").value = resultado;
}

function insertarParentesisIzq() {
  let valor = document.getElementById("pantalla");
  valor.value += "(";
}

function insertarParentesisDer() {
  let valor = document.getElementById("pantalla");
  valor.value += ")";
}

function factorial() {
  let numero = parseInt(document.getElementById("pantalla").value);
  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }
  document.getElementById("pantalla").value = resultado;
}

function raiz() {
  let valor = document.getElementById("pantalla").value;
  let resultado = Math.sqrt(valor);
  document.getElementById("pantalla").value = resultado;
}

function fraccion() {
  let numero = parseFloat(document.getElementById("pantalla").value);
  let resultado = 1 / numero;
  document.getElementById("pantalla").value = resultado;
}

// Registro de Usuarios

lista_usuarios = [];

function addUsuarios(nombre, apellido, email, pass) {
  let lista_usuarios = JSON.parse(localStorage.getItem("arr_usuario"));
  let newUsuario = {
    name: nombre,
    lastName: apellido,
    mail: email,
    password: pass,
  };
  console.log(newUsuario);
  lista_usuarios.push(newUsuario);
  localStorage.setItem("arr_usuario", JSON.stringify(lista_usuarios));
}

function suscribirse() {
  let sName = document.querySelector("#txtName").value;
  let sLastName = document.querySelector("#txtLastName").value;
  let sEmail = document.querySelector("#txtEmail").value;
  let sPass = document.querySelector("#txtPassword").value;

  addUsuarios(sName, sLastName, sEmail, sPass);
  closeRegister();
}

// Registro Historial Operaciones

lista_operaciones = [];

function addOperaciones(operacion, resultado) {
  let newOperacion = {
    operacion: operacion,
    resultado: resultado,
  };
  lista_operaciones.push(newOperacion);

  console.log("operacion", operacion);
  console.log("resultado", resultado);
  console.log(lista_operaciones);
}

function getHistorial() {
  return lista_operaciones;
}

function tablaHistorial() {
  let list = getHistorial(),
    tbody = document.querySelector("#operaciones tbody");

  tbody.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    let row = tbody.insertRow(i),
      operacionCell = row.insertCell(0),
      resultadoCell = row.insertCell(1);

    operacionCell.innerHTML = list[i].operacion;
    resultadoCell.innerHTML = list[i].resultado;

    tbody.appendChild(row);
  }
}

// Usuarios

function eliminarEmailsRepetidos(listaObjetos) {
  let emails = {};
  let nuevaLista = [];

  for (let i = 0; i < listaObjetos.length; i++) {
    let objeto = listaObjetos[i];
    let email = objeto.email;

    if (!emails[email]) {
      emails[email] = true;
      nuevaLista.push(objeto);
    }
  }

  return nuevaLista;
}

async function logJSONData() {
  const response = await fetch("./usuarios.json");
  return response;
}

let users = [];

logJSONData().then((res) =>
  res.json().then((usuarios) => {
    console.log((users = usuarios));
    let cliente = JSON.parse(localStorage.getItem("arr_usuario"));
    console.log(cliente);
    console.log("cliente");
    let usuariosFinal;
    if (cliente) {
      usuariosFinal = [...cliente, ...users];
    }
    usuariosFinal = eliminarEmailsRepetidos(usuariosFinal);
    users = usuariosFinal;
    localStorage.setItem("arr_usuario", JSON.stringify(usuariosFinal));
  })
);
