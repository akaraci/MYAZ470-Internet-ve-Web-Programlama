const langs=["Pyhthon","C#","Node.Js","Asp.net"];

for (let i=0;i<langs.length;i++){
     console.log(langs[i]);
}
       
console.log("----Tekrar yazdırılıyor");
for (let item of langs){
    console.log(item);
}

console.log("indexler yazdırılıyor");
for (let i in langs){
   
    console.log(parseInt(i)+1,".eleman=",langs[i]);
}
console.log("----display for..in for object");
const person={name:"aaaa",surname:"deneme", age:20}
for (let prop in person){
    console.log(prop,person[prop]);
}

console.log("----for each ile yazdırılıyor");
langs.forEach((item) => console.log(item));


//forEach yazıp enter tuşuna basın. otomatik oluşturur.
//.forEach() → Dizinin her elemanı için bir callback fonksiyon çalıştıran bir JavaScript metodudur.
langs.forEach((lang,i) => { //array için callback function 
    console.log(i,". eleman=",lang);
});

// //İkinci parametre (index), o elemanın dizideki sıra numarasını temsil eder.

console.log("----Tekrar yazdırılıyor");
langs.forEach((lang,index) => {
    console.log(lang,index);
});



// //--------------------------
const users=[
    {name:"aaaa", age:20},
    {name:"bbbb", age:40},
    {name:"cccc", age:15},
    {name:"dddd", age:55},
];
console.log("----for of array for in object")
for (let obj of users){ //item verir
    for (let prop in obj){ //objelerde property, arraylerde index verir. for..of nesnelerde çalışmaz. iterable nesnelerle çalışır.
        
        console.log(prop,":",obj[prop]);
    }
    console.log(obj.name) //bu şekilde de yazılır. Böylece for in ile property'leri gezmeye gerek kalmaz.
}


users.forEach((user,index) => {console.log()
    console.log(index,"Kullanıcı ismi=",user.name)
}
)

// //----------------------------------------
// //-----yukarıdaki listeden sadece isimleri alıp bir listeye atmak için
// //------map kullanılabilir.
console.log("------------Map")
const names=users.map(function(user){
            return user.name; //users içindeki her bir nesne için name bilgisini return eder.
});
console.log("names write");
console.log(names);


const names1=users.map((user)=>{
    return user.name;
})

console.log("names1:",names);


const gencyasli=users.map(function(user){
    if (user.age>=50) return "Yaşlı"; 
    if (user.age>=30) return "Orta Yaşlı"
    if (user.age>=18) return "Genç"
    if (user.age>=0) return "Çocuk"
});

console.log(gencyasli);

// //-------------------------------------
// //Nesne içindeki key'lere ve key üzerinden değerlere erişme for in

const user={
    name:"Mustafa",
    age:20
}
for (const key in user) {
    console.log(key,user[key]);     
    }
//----------------------------------------
//--users nesne dizisi içindeki tüm nesnelere ve key değerlerine erişme
//dizi elemanlarına erişim forof, nesne keylere erişim forin
let index=0;
for (const user of users) {
    index+=1;
    console.log("------User-",index);
    for (const key in user) {
        console.log(key,user[key]);
    } 
}
