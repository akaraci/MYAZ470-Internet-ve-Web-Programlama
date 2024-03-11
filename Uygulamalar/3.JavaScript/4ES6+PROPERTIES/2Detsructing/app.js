// Detsrucing dizi ve nesnelerdeki veriler edaha kolay ve hızlı erişmek için kısa yollar sunar
//Python'dan bu yöntemlere alışkın olabilirsiniz.

arr=[100,200,300,400];
// number1=arr[0]
// number2=arr[1]

[number1,number2]=arr; //ilk iki elelman aktarılır. [number1,number2]=[100,200,300,400]

console.log(number1, number2);


//Nesne özelliklere hızlı erişim
const blogs={
    name1:"aaaa",
    surname:"bbbbb",
    age:30
}
//const {isim,yas}=blogs; //bu çalışmaz. nesnelerde index'e göre değil key değerine göre aktarım yapar. Bu nedenle nesne içindeki keyler kullanılmalıdır.
const {name1,age}=blogs;

console.log(blogs);
console.log(name1,age)


//Kullanılan Nesne Dizisi de olabilir
const blogs1=[{
    named:"aaaa",
    surnamed:"bbbbb",
    aged:30
},

{
    name1:"cccc",
    surname:"ddddd",
    age:30
}
];
console.log(blogs1);
const {named,aged}=blogs1[1];
console.log(name1,age);


//-------------------------Function Destructive----------------
const getLangs=()=>["Python","C#","Node.js"];
const [l1,l2,l3]=getLangs();
console.log(l1,l2,l3);


//Obje'lerde key değerlerini farklı isimlerle kullanma

const person={
    name:"aaa",
    year:1999,
    salary:5000,
    showInfos:()=>{console.log("bilgiler gösteriliyor")}
}

const {name:isim,year:yas,salary:ucret,showInfos:bilgileri_Goster}=person;
console.log(isim,yas,ucret);
bilgileri_Goster();