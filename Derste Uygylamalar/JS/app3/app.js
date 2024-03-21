const data=[
    {   adi:"Mehmet",
        meslek:"Öğretmen",
        kurum:[
            {
               kurumkodu:1,
               kurumadi:"Samsun Üniv." 
            },
            {
               kurumkodu:2,
               kurumadi:"Gazi Üniv." 
            }
        ]
    },
    {   adi:"Ayşe",
        meslek:"Öğretmen",
        kurum:[
            {
               kurumkodu:3,
               kurumadi:"Ondokuz Mayıs Üniv." 
            },
            {
               kurumkodu:4,
               kurumadi:"Ankara Üniv." 
            }
        ]
    }
]

// console.log(data[0],"Type:",typeof data[0]);
// console.log(data);
// console.log(data[0].adi);
// console.log(data[0].kurum[0]);
// console.log(data[0].kurum[0].kurumadi);

//for..in - for..of- for..each
//for..in hem array hem de object ile kullanılır.
//array ise key ->index
//object ise key->property
// for (const key in data) {
//     console.log(key,"->",data[key]);
// }

// let object=data[0]; //return object

// for (const key in object) {
//     console.log(key,"->",object[key]);

// }


//for..of
// for (const item of data) {
//     console.log(item);
    
// }

//hata-> for..of sadece itetrable verilerle kullanılır.
// let object1=data[0];
// for (const item of object1){
//     console.log(item);
// }


// for (const items of data) {
//     for (const key in items) {
//         console.log(key,":",items[key]);
//     }
    
// }

//----for..each

// data.forEach(item => {
//     // console.log(item);
//     console.log("Adı:",item.adi);
//     console.log("Meslek:",item.meslek);
//     console.log("Kurum:",item.kurum);
    
// });


//hata. Objelerle for..each kullanılmaz.
// let object2=data[0];
// object2.forEach(item => {
//     console.log(item);
// });

// const finded=data.find(x=>x.adi="Mehmet");
// const findedIndex=data.findIndex(x=>x.adi=="Ayşe");
// console.log(finded);
// console.log(findedIndex);

// let date=new Date();
// console.log(date, typeof date);
// console.log(date.getDay());
// console.log(date.getFullYear());

// const yaz=function(){
//     console.log("Function çalıştı");
// }
// yaz();

// //arrow function
// const yaz1=()=>{
//     console.log("arrow function çalıştı");
// }
// yaz1();


// const hesapla=(taban,us)=>{
//     result=1;
//     for (i=1;i<=us;i++){
//         result*=taban;
//     }

//     return result;
// }
// console.log(hesapla(2,3));

// const ekrana_yaz=message=>{
//     console.log(message);
// }
// ekrana_yaz("Merhaba");

const langs=["Python","C++","JS"];
l1=langs;
l1.push("C#");
console.log(l1,langs);
l2=langs.slice();
l2.push("deneme");
console.log(l2,langs, typeof l2);

