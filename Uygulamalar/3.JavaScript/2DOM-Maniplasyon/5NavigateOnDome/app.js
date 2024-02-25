//DOM üzerinde gezinme

const todoList=document.querySelector(".list-group"); //ul seçildi
const todo=document.querySelector(".list-group-item:nth-child(2)"); //2.li
const cardrow=document.querySelector(".card.row"); //iki classlı elementi seçme

let value=todoList;
value=todo;
value=cardrow;

//child nodes
//ul'ye bağlı 4 li varken 9 element döndürür. text bilgisi olarak \n değerlerini de alır.
value=todoList.childNodes;

//children sadece çocuk elementleri alır. 4 element gelir.
value=todoList.children;
value=todoList.children[todoList.children.length-1];
todoList.children[0].textContent="Değişti";


//----
value=cardrow.children[2].children[1];//card içinde 3.sıradaki div seçildi. Bu div içindeki 2. sıradaki element h5 seçildi.
value.textContent="Burası da değişti";

//---------------
value=todoList;
value=todoList.firstElementChild;
value=todoList.lastElementChild;
value=todoList.children.length;
value=todoList.childElementCount;

//---------------------ebeveyn
value=cardrow;
value=cardrow.parentElement;
value=cardrow.parentElement.parentElement;

//element kardeşleri
value=todo;
value=todo.previousElementSibling;
value=todo.previousElementSibling.previousElementSibling;//null çünkü yok.




console.log(value)


