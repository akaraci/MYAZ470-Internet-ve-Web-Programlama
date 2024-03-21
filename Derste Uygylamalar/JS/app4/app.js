//var let and const

//ES6 ->ecma script6

// var name1="Ahmet";
// console.log(name1);

// var name1=55;
// console.log(name1);

// for (var i=1;i<=3;i++){
//     console.log(i);
// }
// console.log(i);

//
// let x=10;
// console.log(x);
// x="deneme";
// console.log(x);

//hata scope ile ilgili
// for (let i=1;i<=3;i++){
//     console.log(i);
// }
// console.log(i);

//const->sabittir hata 
// const isim="deneme";
// console.log(isim);
// isim="denedene";

const list=["aa","bb",55];
console.log(list);
//list=[1,2,3,4]; //hata
list.push(52);
console.log(list);

const person={
    name:"aaa",
    surname:"bbb",
    yaz:function(){
        console.log(this.name,this.surname);
    }
}

person.yaz();