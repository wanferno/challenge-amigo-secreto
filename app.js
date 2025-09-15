var listaAmigos = [];

function agregarAmigo() {
  var input = document.getElementById('amigo');
  var nuevoAmigo = input.value.trim();
  if (nuevoAmigo == '') {
    mostrarMensaje('El nombre esta vacio', 'resultado');
    return;
  }
  listaAmigos.push(nuevoAmigo);
  input.value = '';
  mostrarLista();
  mostrarMensaje('Amigo agregado: ' + nuevoAmigo, 'resultado');
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    mostrarMensaje('No hay amigos en la lista', 'resultado');
    return;
  }
  var indice = Math.floor(Math.random() * listaAmigos.length);
  var amigoSecreto = listaAmigos[indice];
  mostrarMensaje('Tu amigo secreto es: ' + amigoSecreto, 'resultado');
  listaAmigos.splice(indice, 1);
  mostrarLista();
}

function mostrarLista() {
  var ul = document.getElementById('listaAmigos');
  ul.innerHTML = '';
  listaAmigos.forEach(function (amigo) {
    var li = document.createElement('li');
    li.textContent = amigo;
    ul.appendChild(li);
  });
}

function mostrarMensaje(mensaje, idElemento) {
  var ul = document.getElementById(idElemento);
  ul.innerHTML = '';
  var li = document.createElement('li');
  li.textContent = mensaje;
  ul.appendChild(li);
}
