//Local Storage
//set Item
localStorage.setItem("local1","baba");
//numeric veri de verseniz string olarak kaydedilir.
localStorage.setItem("tekrar",50);


// //Get Item

let value=localStorage.getItem("local1");
value=localStorage.getItem("tekrar");
console.log(value);
console.log(typeof value);


// //clear localstorage
localStorage.clear();

//---------------
console.log(localStorage.getItem("sport")); //null yazar
if (localStorage.getItem("sport")==null){
    console.log("Sorguladığınız veri bulunmuyor");
}
else console.log("Sorguladığınız veri var");
//-----------------

// //--Array LocalStorage

const todos=["todo1","todo2","todo3"];
//aralarında virgül olan string bilgi olarak kaydeder.
localStorage.setItem("todos",todos);
console.log(localStorage.getItem("todos"));

// //---------array olarak kaydetme ve okuma

// //JSON.stringify, value değerini obje'ye dönüştürür. Bir nesne dizisine çevirmiş olur. JSON biçiminde bir stringe çevirir.
localStorage.setItem("todosarray",JSON.stringify(todos));

const gettodos1=localStorage.getItem("todosarray"); //yine string döner
console.log("Json parse olmadan okunan değer:",gettodos1," type=",typeof gettodos1);
const gettodos=JSON.parse(localStorage.getItem("todosarray")); //bu nedenle JSON.parse. JSON formatındaki string'i JavaScript nesnesine (array veya object) dönüştürür.
console.log("json parse ile:",gettodos, "type=",typeof gettodos);



gettodos.forEach(td => {
    console.log(td);
    
});


//----------------------------------------------------

