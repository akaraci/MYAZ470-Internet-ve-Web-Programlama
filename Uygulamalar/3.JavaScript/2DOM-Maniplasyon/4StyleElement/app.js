const element=document.querySelector("#clear-todos");
const element2=document.querySelector(".list-group");

console.log(element.id);
console.log(element.className); //classları string olarak döndürür
console.log(element.classList); //classları dizi olarak verir
console.log(element.classList[0]);
console.log(element.href);

console.log(element.textContent);//element içindeki text'leri verir. 
console.log(element.innerHTML); //element içindeki child html kodlarını verir
// console.log(element2.innerHTML);
// console.log(element2.textContent);


//------Element özelliklerini ve style özelliklerini değiştirme
console.log(element.style);
element.setAttribute("class","btn btn-primary");
element.className="btn btn-primary";
element.href="http://www.google.com"
element.target="_blank"

element.style.color="bisque";
element.style.backgroundColor="chocolate";
element.setAttribute("style","background-color:blue;");

element.textContent="Değişti mi?";
// element.textContent="<span style='color:yellow'><strong>Silin</strong></span>";
// element.innerHTML="<span style='color:yellow'><strong>Silin</strong></span>";
//------------------

const elements=document.querySelectorAll(".list-group-item");
elements.forEach(el => {
    el.style.color="white";
    el.style.backgroundColor="red";
});


console.log("-----------------------");
let element3=document.querySelector("li:last-child"); //son li
element3=document.querySelector("li:nth-child(2)"); //n. li
element3=document.querySelectorAll("li:nth-child(even)"); //çift indisli li'ler
element3=document.querySelectorAll("li:nth-child(odd)"); //tek indisli li'ler

element3.forEach(el => {
    el.style.backgroundColor="black";
});

console.log(element3);


//https://www.w3schools.com/cssref/css_selectors.php


