var tarefas = [];

// function feradorId é uma funçao q criamos para fazer um numero aleatorio
//para usarmos como ID da task q criarmos, isso ira nos ajudar na hora de apagar a task
function geradorId() {
  var numId = new Date();

  var id =
    numId.getHours().toString() +
    numId.getMinutes().toString() +
    numId.getSeconds().toString() +
    numId.getMilliseconds().toString();
  return id;
}

function criarTarefa() {
  var taskDescription = document.getElementById("novaTarefa").value;

  var tarefa = {
    id: geradorId(),
    data: {
      description: taskDescription,
    },
  };

  // o metodo PUSH é usado para inserir um elemento dentro de um array
  tarefas.push(tarefa);

  updateScreen();
}
// arow function( => ) é simplismente pra subistituir a palavra"function",
// porem o argumento vem antes ex: var teste = () => {} // function teste (){}
function updateScreen() {
  var lista = "<ul>";

  tarefas.forEach((tarefa) => {
    lista +=
      "<li id-data=" + tarefa.id + ">" + tarefa.data.description + "</li>";
    lista +=
      "<button class='btnTask' onclick='deleteTask(this)' id-data=" +
      tarefa.id +
      ">Apagar</button><hr></br>";
  });
  lista += "</ul>";

  document.getElementById("lista").innerHTML = lista;
  document.getElementById("novaTarefa").value = "";
}

function deleteTask(element) {
  // o metodo filter
  tarefas = tarefas.filter(
    (tarefa) => tarefa.id != element.getAttribute("id-data")
  );
  updateScreen();
}
