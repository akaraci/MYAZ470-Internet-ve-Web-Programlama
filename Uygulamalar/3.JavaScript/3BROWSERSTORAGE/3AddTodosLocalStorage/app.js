//önceki örnekten kalan localstorage'leri browserda silin.

const form=document.getElementById("todo-form");//form
const inputtodo=document.getElementById("todo");//ınputbox todo
const todoList=document.querySelector(".list-group") //ul elementi
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filterInput=document.querySelector("#filter");
const clearToDos=document.querySelector("#clear-todos");
// console.log(filter);


form.addEventListener("submit",addTodo);//form üzerinde submit işlemi gerçekleştiğinde tetiklenir
document.addEventListener("DOMContentLoaded",loadAllTodosUi); //sayfa yüklendiğinde tetiklenir
secondCardBody.addEventListener("click",delteToDo); //event capturing kullanılacak
filterInput.addEventListener("keyup",filterToDo);
clearToDos.addEventListener("click",ClearAllTodos);

function addTodo(e){
    const newtodo=inputtodo.value;
    if(newtodo==""){
        showAlert("warning","Lütfen boş geçmeyin");
    }
    else{
            //----localStorage' ekle
            addTodoStorage(newtodo);
            //---Sayfaya Ekle
            addToUi(newtodo);
            showAlert("success","Todo başarıyla eklendi")
        }
    console.log("submit edildi");
    e.preventDefault(); //sayfanın yinelenmesini engeller.
    
}


function showAlert(type,message){
    //     <div class="alert alert-warning" role="alert">
    //   This is a warning alert—check it out!
    // </div>
   const alert=document.createElement("div");
   alert.className=`alert alert-${type}`;
   alert.setAttribute("role","alert");
   alert.textContent=message;
   console.log(alert);
   firstCardBody.appendChild(alert);

   // kod belli bir süre bekler ve çalışır. 2 saniye sonra çalış
   setTimeout(()=>{
    alert.remove();
   },2000);

}

//storage'de kayıtlı todo'ları al ve return et
function getTodosFromStorage(){
    if (localStorage.getItem("todos")==null) {
        todos=[]; //yoksa boş dizi oluştur
    }
    else { //varsa oku ve diziye aktar
        todos=JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}

function addTodoStorage(newtodo){
    //storage yoksa todo dizisi oluştur varsa todo dizisine ve daha sonra localstorage'e ekle
    let todos=getTodosFromStorage();
    todos.push(newtodo); //yeni elemanı diziye ekle
    localStorage.setItem("todos",JSON.stringify(todos)); //diziyi tekrar stotrage'e yaz
}



function addToUi(newtodo){
  const link=document.createElement("a");
  const li=document.createElement("li");
// todo list içindeki li elementinin içine x butonunu link olarak oluştur
  link.href="#";
  link.className="delete-item";
  link.innerHTML="<i class = 'fa fa-remove'></i>";

  //li'yi oluştur. 
  li.className="list-group-item d-flex justify-content-between";
  li.appendChild(document.createTextNode(newtodo));
  li.appendChild(link);
  todoList.appendChild(li); //ul'ye oluşturulan li'yi ekle
  inputtodo.value="";
}


//storage'den todo'ları oku ve ekrana yaz
function loadAllTodosUi(){
    let todos=getTodosFromStorage();
    todos.forEach(todo => {

        addToUi(todo);
        
    });
}

function delteToDo(e){
    console.log(e.target.className);
   //---UI'den Sil 
    if (e.target.className=="fa fa-remove"){
        e.target.parentElement.parentElement.remove();
    }
//--------------------------------------------------
    //-----storage'den Sil
    //listeden sil sonra storage'e set et.
    let todos=getTodosFromStorage();
    todos.forEach((todo,index) => {
        if(todo==e.target.parentElement.parentElement.textContent){
            todos.splice(index,1); //index numaralı kayıttan bir tane sil
        }  
    });
    localStorage.setItem("todos",JSON.stringify(todos));
    //--------------------------------------------
}

function clearToDosUi(){
    let todos=getTodosFromStorage();
     //ul içindeki tüm li elementleri sil
     while (todoList.hasChildNodes()) {
        todoList.removeChild(todoList.firstChild);
      }
}

function filterToDo(e){

    let todos=getTodosFromStorage();
   
   clearToDosUi();
   
    //storage'den elde edilen todos listesi içinde filter inpurbox'ını ara
    todos.forEach(todo => {
        //--indexof todo içinde girilen değeri arar. bulursa indexini döndürür. Bulmazsa -1 döndürür.
        if (todo.indexOf(filterInput.value.toLowerCase())!=-1){
            addToUi(todo);
            // console.log("buldu");
        } 
    });

    if (filterInput.value=="") {
        clearToDosUi();
        loadAllTodosUi();
    }
}

function ClearAllTodos(){
    clearToDosUi();
    localStorage.removeItem("todos");
}

