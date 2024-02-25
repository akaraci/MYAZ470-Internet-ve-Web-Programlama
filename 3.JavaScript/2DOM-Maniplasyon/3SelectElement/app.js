let element;

element=document.getElementById("todo-form")

//Aynı class name'e sahip birden fazla element varsa hepsini seçer ve liste döndürür.
element=document.getElementsByClassName("list-group-item");
element=document.getElementsByClassName("card-header")[0];


//element tag'a göre seçme
element=document.getElementsByTagName("div");


//query selector->Yukarıdaki yöntemlerin tümünü kapsar
//Ancak birden fazla elenet varsa ilk elementi seçer. Bir değer döndürür

element=document.querySelector("#todo-form"); //id
element=document.querySelector(".card-header"); //class
element=document.querySelector(".list-group-item"); //ilk li'yi seçer
element=document.querySelector("li"); //ilk li'yi seçer


//querySelectorAll

element=document.querySelectorAll(".list-group-item"); //tüm li'ler gelir. Class'a göre
element=document.querySelectorAll("div"); //tüm div'ler
element=document.querySelectorAll("div")[0].getAttribute("class");
element=document.querySelectorAll("li"); 
element.forEach(el => {
    console.log(el); 
});


console.log(element);