//Local Storage
//set Item
localStorage.setItem("local1","baba");
//numeric veri de verseniz string olarak kaydedilir.
localStorage.setItem("tekrar",50);


//Get Item

let value=localStorage.getItem("local1");
value=localStorage.getItem("tekrar");
console.log(value);
console.log(typeof value);


//clear localstorage
// localStorage.clear();

//---------------
console.log(localStorage.getItem("sport")); //null yazar
if (localStorage.getItem("sport")==null){
    console.log("Soruladığınız veri bulunmuyor");
}
else console.log("sorguladığınız veri var");
//-----------------

//--Array LocalStorage

const todos=["todo1","todo2","todo3"];
//aralarında virgül olan string bilgi olarak kaydeder.
localStorage.setItem("todos",todos);
console.log(localStorage.getItem("todos"));

//---------array olarak kaydetme ve okuma

//JSON.stringify, value değerini obje'ye dönüştürür. Bir nesne dizisine çevirmiş olur.
localStorage.setItem("todosarray",JSON.stringify(todos));

//const gettodos=localStorage.getItem("todosarray"); //yine string döner

const gettodos=JSON.parse(localStorage.getItem("todosarray")); //bu nedenle JSON.parse
console.log(gettodos);
console.log(gettodos[0]);

gettodos.forEach(td => {
    console.log(td);
    
});
//----------------------------------------------------

