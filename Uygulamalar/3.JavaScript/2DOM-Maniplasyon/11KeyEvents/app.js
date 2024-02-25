//klavye event'ları

//keypress-sadece harf ve rakam ve özel karakterlere basılınca tetiklenir

document.addEventListener("keypress",(e)=>{
    console.log(e.key);
});


// //keydown-Tuşa basınca
document.addEventListener("keydown",(e)=>{
   console.log(e.key);
});


//keyup--Tuşu bırakınca
document.addEventListener("keyup",(e)=>{
    console.log(e.key);
 });


 //--html sayfasında inputbox'a todo girildiğinde card hearder'a yazdırma
//<input class="form-control" type="text" name="todo" id = "todo" placeholder="Bir Todo Girin">
//<div class="card-header">Todo List</div>
const header=document.querySelector(".card-header");
const todoInput=document.getElementById("todo");

todoInput.addEventListener("keyup",(e)=>{
    console.log("Tuş:",e.key);
    // console.log("Inputbox İçeriği:",todoInput.value);
    console.log("Inputbox İçeriği:",e.target.value);//e.target event hangi nesnede oluşmuşsa onu verir.
    header.textContent=e.target.value;
});
