//dinamik element silme
const  todoList=document.querySelector("ul.list-group");
const todos=todoList.children;
//const  todos=document.querySelectorAll("li.list-group-item");
console.log(todoList);
console.log(todos);


todos[0].remove();
todoList.removeChild(todos[0]);
todoList.removeChild(todoList.lastElementChild);