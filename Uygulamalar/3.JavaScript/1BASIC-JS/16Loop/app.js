const langs=["Pyhthon","C#","Node.Js","Asp.net"];

for (let i=0;i<langs.length;i++){
     console.log(langs[i]);
}
       
console.log("----Tekrar yazdırılıyor");
for (let lang of langs){
    console.log(lang);
}

console.log("----Tekrar yazdırılıyor");
//forEach yazıp enter tuşuna basın. otomatik oluşturur.
langs.forEach(lang => { //callback function array için
    console.log(lang);
});

console.log("----Tekrar yazdırılıyor");
langs.forEach((lang,index) => {
    console.log(lang,index);
});

//--------------------------
const users=[
    {name:"aaaa", age:20},
    {name:"bbbb", age:40},
    {name:"cccc", age:15},
    {name:"dddd", age:55},
];

//----------------------------------------
//-----yukarıdaki listeden sadece isimleri alıp bir listeye atmak için
//------map kullanılabilir.

const names=users.map(function(user){
            return user.name; //users içindeki her bir nesne için name bilgisini return eder.
});

console.log(names);


const gencyasli=users.map(function(user){
    if (user.age>=50) return "Yaşlı"; 
    if (user.age>=30) return "Orta Yaşlı"
    if (user.age>=18) return "Genç"
    if (user.age>=0) return "Çocuk"
});

console.log(gencyasli);

//-------------------------------------
//Nesne içindeki key'lere ve key üzerinden değerlere erişme for in

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
