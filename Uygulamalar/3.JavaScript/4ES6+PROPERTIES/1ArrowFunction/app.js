// ES6, ES7, ES8 Javascript'in çekirdeğini oluşturan ECMAScript in yeni versiyonlarının isimleridir. 
//ECMAScript 2015 was the second major revision to JavaScript.
const merhaba=function(){
    console.log("Merhaba");
}

function merhaba1(){
    console.log("Merhaba");
}

//--arrow function
const merhaba1=()=>{
    console.log("Merhaba1");
}


// const merhaba2=(firstname)=>{
//     console.log("Merhaba "+firstname);
// }

//tek parametre varsa aşağıdaki gibi parantezler kaldırılabilir.
const merhaba2=firstname=>{
    console.log("Merhaba"+firstname);
}

merhaba();
merhaba1();
merhaba2("Ahmet");

// const cube=x=>{
//     return x*x*x;
// }

const cube=x=>x*x*x; //bu şekilde kılsatılabilir

console.log(cube(5));