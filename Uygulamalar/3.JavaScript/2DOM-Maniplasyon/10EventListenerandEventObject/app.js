
//<input class="form-control" type="text" name="filter" id = "filter" placeholder="Bir Todo Arayın">
// <button type="submit" class="btn btn-danger" id="ekle">Todo Ekleyin</button>
//<input class="form-control" type="text" name="todo" id = "todo" placeholder="Bir Todo Girin">
// <ul class="list-group">

/* <a href = "#" class ="delete-item">
     <i class = "fa fa-remove"></i>
</a> */

const filterInput=document.getElementById("filter");

//-------Yöntem-1
// filterInput.onfocus=()=>{
//     console.log("Arama Başlayacak");
// }

//------------Yöntem-2
filterInput.addEventListener("focus",(e)=>{ //callback function
    console.log("Naber");
    console.log(e);
    console.log(e.type);
    //üzerinde events tetiklenen nesne ile ilgili bilgilere erişilebilir.
    console.log(e.target.placeholder);
    console.log(e.target.className);
})
console.log(filterInput);



//-----form submit event
const todoForm=document.getElementById("todo-form");
todoForm.addEventListener("submit",(e)=>{
    console.log("Submit edildi");

    //default ayarları engelle komutu verilmezse sayfa yenilenir ve console.log sonucu görünmez.
    e.preventDefault();
});
//-----------------------------

//------Listeye ToDo Ekleme-----------------------
const btnekle=document.getElementById("ekle");
const todoInput=document.getElementById("todo");
const target=document.querySelector("ul.list-group");
// console.log(todoInput);
// console.log(target)

btnekle.addEventListener("click",(e)=>{

    // console.log("ekle botonuna tıklandı");
    // console.log("Eklenecek değer:",todoInput.value);
    const list=document.createElement("li");
    const link=document.createElement("a");
    
    list.className="list-group-item d-flex justify-content-between";
    list.textContent=todoInput.value.trim(); //inputbox'a girilen değer

    link.href="#";
    link.className="delete-item";
    link.innerHTML="<i class = 'fa fa-remove'></i>";

    list.appendChild(link);

    
    target.appendChild(list);
    e.preventDefault();

});
// console.log(ekle);



