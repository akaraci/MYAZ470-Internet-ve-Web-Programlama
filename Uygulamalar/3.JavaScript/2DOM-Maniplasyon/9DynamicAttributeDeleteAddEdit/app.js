//----------Dinamik attribute ekleme, silme, düzeltme

const todoInput=document.querySelector("#todo");
console.log(todoInput);

let element;
todoInput.classList.add("newclass1");
todoInput.classList.add("newclass2");
// todoInput.setAttribute("class","ekle");
element=todoInput


todoInput.classList.remove("newclass1")

//---setAttribute
todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Attribute değişti");
todoInput.setAttribute("title","Input");
element=todoInput;

//---hasAttribute
element=todoInput.hasAttribute("require");
element=todoInput.hasAttribute("placeholder");

//----removeAttribute
todoInput.removeAttribute("name");
element=todoInput.hasAttribute("name");

//---add attribute with setAttribute
element=todoInput.setAttribute("name","deneme");
console.log(element);