const input = document.querySelector("#input");
const btn = document.querySelector("#addTask");
const lista = document.querySelector("tbody");
let total = document.querySelector('#total')

let tareas = [
  { id: 1206253940030, name: "Entender este desafío", check: false },
  { id: 1306253940031, name: "Entregar el desafío", check: false },
  { id: 1406253940032, name: "Tratar de hacer el próximo desafío", check: false },
];
btn.addEventListener("click", () => {
  const tarea = document.getElementById("input").value
  if(tarea !=''){
    tareas.push({ id: Date.now(), name: tarea, check: false }); 
    input.value = '' 
  }
  else {
    alert('Debes ingresar una tarea')
  }
  listar();
});

const listar = () => {
  total.textContent = `${tareas.length}`
  let contador = 0
  let template = '';
  for (const tarea of tareas) {
    template += `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.name}</td>
                    <td><input type="checkbox" onclick = 'cambiarEstado(${tarea.id})' ${ tarea.estado ? 'checked' : ''}></td>
                    <td><button type="button" onclick="borrar(${tarea.id})">X</button></td>
                </tr>`;
                if(tarea.estado){contador++} 
  }
  lista.innerHTML = template
  realizadas.innerHTML = contador
};
listar();
const borrar = (id) => {
    const index = tareas.findIndex((item) => item.id === id)
    tareas.splice(index, 1)
    listar() 
}
const cambiarEstado = (id) => {
    tareas.map((ele) => {
        if (ele.id ==id) ele.estado = !ele.estado
    })
    listar()
}