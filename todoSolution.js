const refs = {
  button: document.querySelector("#todo-button-add"),
  listTodo: document.querySelector(".todo"),
  inputTodo: document.querySelector(".content"),
};

let id = 0;

const getTask = (text) => `
          <li id="task-${++id}"">
          <span>${text}</span>
          <button type="button" class="done" aria-label="Done">
              ✔
          </button>
          <button type="button" class="delete" aria-label="Delete">
              ❌
          </button>
          </li>
      `;
const array = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
localStorage.setItem("items", JSON.stringify(array));
const date = JSON.parse(localStorage.getItem("items"));

window.deleteTask = function (id) {
  // date.find(function (x, e) {
  //   if (x == "westcliff, uk") {
  //     return x.splice(e, 1);
  //   }
  // });
};
const createTask = (text) => {
  refs.listTodo.insertAdjacentHTML("beforeend", getTask(text));

  const task = refs.listTodo.querySelector(`#task-${id}`);
  task.querySelector(".delete").addEventListener("click", (e) => {
    task.remove();
  });

  const done = task.querySelector(".done");
  const doneTask = () => {
    task.style.background = "tomato";
    done.removeEventListener("click", doneTask);
  };
  done.addEventListener("click", doneTask);
};

refs.button.addEventListener("click", () => {
  let text = refs.inputTodo.value;
  if (text === "") {
    alert("Enter the name of the task");
    return;
  }
  refs.inputTodo.value = "";
  createTask(text);
  array.push(text);
  localStorage.setItem("items", JSON.stringify(array));

  text = "";
});
date.forEach((item) => {
  createTask(item);
});

let foo = [1, "go", { x: 2 }, { y: 5 }];
for (let i = 0; i < foo.length; i++) {
  if (foo[i] === "go") foo.splice(i, 1);
  else console.log(foo[i]);
}
