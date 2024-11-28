const typeTodo = document.getElementById("todoTextHeader");
const todoContent = document.getElementById("todoText");
const addTodo = document.getElementById("addButton");
const listTodoContent = document.querySelector(".listTodoContent");

const waktu = new Date().toLocaleString();

addTodo.addEventListener("click", () => {
  if (todoContent.value == "" || typeTodo.value == "") {
    alert("Unnable to add, fill the option/your todo!");
  } else {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const buttonDone = document.createElement("button");
    const buttonDelete = document.createElement("button");
    const p = document.createElement("p");
    const pTime = document.createElement("p");
    const divHeaderTime = document.createElement("div");
    const divHeader = document.createElement("div");
    const divButton = document.createElement("div");

    divHeaderTime.classList.add("headerTime");
    divHeader.classList.add("headerTodoContent");
    divButton.classList.add("buttonListContent");
    div.classList.add("boxListTodoContent");
    buttonDone.classList.add("buttonDone");
    buttonDelete.classList.add("buttonDelete");
    h1.classList.add("headerListTodo");
    pTime.classList.add("waktu");

    pTime.textContent = `Added time ${waktu}`;
    buttonDone.type = "button";
    buttonDelete.type = "button";
    buttonDone.textContent = "DONE";
    buttonDelete.textContent = "DELETE";
    h1.textContent = typeTodo.value;
    p.textContent = todoContent.value;

    divHeaderTime.appendChild(h1);
    divHeaderTime.appendChild(pTime);
    divHeader.appendChild(divHeaderTime);
    divButton.appendChild(buttonDone);
    divButton.appendChild(buttonDelete);
    divHeader.appendChild(divButton);

    div.appendChild(divHeader);
    div.appendChild(p);

    listTodoContent.appendChild(div);
    hapus(div, buttonDelete);
    selesai(div, buttonDone);
  }
});

function hapus(div, buttonDelete) {
  buttonDelete.addEventListener("click", () => {
    listTodoContent.removeChild(div);
  });
}

function selesai(div, buttonDone) {
  buttonDone.addEventListener("click", () => {
    div.classList.toggle("contentDone");
    if (buttonDone.textContent == "DONE") {
      buttonDone.textContent = "UNDONE  ";
    } else {
      buttonDone.textContent = "DONE";
    }
  });
}
