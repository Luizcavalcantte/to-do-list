let adcTarefa = document.getElementById("inpt");
let btn = document.getElementById("btn");
let tarefas = document.getElementById("tarefas");

function adicionar() {
  id = Math.floor(new Date() / 10);

  let abreDiv = `<div class="tarefas" id="${id}">`;
  let fechaDiv = `</div>`;

  let paragrafo = `<p class="tarefa" id="${id * 4}" > ${adcTarefa.value}</p>`;
  let checkbox = `<input type="checkbox" id="${id * 2}" onclick="feito('${
    id * 4
  }')" class="checkBox"   />`;
  let btnApagar = `<button class="apagar" onclick="apagar('${id}')" >Apagar</button></br>
  </div>`;

  let novaTarefa = abreDiv + checkbox + paragrafo + btnApagar + fechaDiv;

  tarefas.innerHTML += novaTarefa;
  adcTarefa.value = "";
}

function feito(numeroID) {
  idCaixa = numeroID / 2;
  let caixa = document.getElementById(idCaixa);

  if (caixa.checked == true) {
    let temporario = document.getElementById(numeroID);
    temporario.style.textDecoration = "line-through";
    temporario.style.color = "gray";
  }
  if (caixa.checked == false) {
    let temporario = document.getElementById(numeroID);
    temporario.style.textDecoration = "none";
    temporario.style.color = "white";
  }
}

function apagar(numeroID) {
  let temporario = document.getElementById(numeroID);

  temporario.parentNode.removeChild(temporario);
}

adcTarefa.addEventListener("", adicionar);

document.addEventListener(
  "keypress",
  function (e) {
    if (e.which == 13) {
      adicionar();
    }
  },
  false
);
