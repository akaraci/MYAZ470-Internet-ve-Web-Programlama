//Scope Kavramı

//Global scope


// function a(){
//     //function scope
// }


// if (){
//     //block scope
// }

//----------------------------
//global scope
var value1=10;
var value2=20;
var value3=20;
console.log(value1,value2,value3);

function func(){ //function scope
    let value1=40;
    var value2=50;
    var value3=60;
    console.log(value1,value2,value3);
}

func();
//--------------------------------

//---var let farkı

if (true){
    //global value1'de değişir.
    //Güvenlik ve değişken scope takibini zorlaştırır.
    //var tanımında scope sınırı yoktur. Değişkenler birbirine girer ve takip zorlaşır.
    //scope kurallarının uygulanması için sabtilerde const değişkenlerde let kullanılmalıdır.
    var value1=10; 
    let b=20;
    const c=30;
    console.log(value1,b,c);
}

//--app.js:41 Uncaught ReferenceError: b is not defined
//hatası alınır. b değişkeni let ile tanımlandığından scope dışından erişilemez
console.log(b,c); //b ve c burada tanımsız.
console.log(value1); 

