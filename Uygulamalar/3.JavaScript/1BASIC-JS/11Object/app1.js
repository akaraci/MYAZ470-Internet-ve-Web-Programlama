
//nesne oluşturuluyor ve export ediliyor
// JavaScript’te export, bir modül içindeki değişkenleri, 
// fonksiyonları veya nesneleri başka dosyalarda kullanılabilir hale getirmek için kullanılır.
// Başka dosyada import { programmer } from "./app.mjs"; şeklinde import edilerek kullanılabilir.
//Bu şekilde yapılan export işlemi es6 ile gelen yeni özelliktir.
//İstenirse module.exports=programmer; şeklinde de export edilebilir.
//ya da module.exports = { programmer, backend_developer }; 
//bunun çalışması için dosya uzantısı .js olmalıdır.
// Ancak diğer dosyada const data = require("./app.js"); şeklinde import edilmelidir.

//.mjs uzantısı, "Module JavaScript" anlamına gelir ve Node.js'in ES6 modüllerini (import/export) tanıyabilmesi 
// için kullanılır. Yani node app2.js ile bu komutları çalıştıramayız.
//Kullanabilmek için iki yol vardır:
    // package.json içine "type": "module" eklemek
    // Dosya uzantısını .mjs yapmak 
exports.programmer={
    name:"Mustafa Karacı",
    age:30,
    email:"mk@aa.com",
    langs:["python","c#","java script"],
    adress:{ //nesne içinde nesne
            city:"Kastamonu",
            street:"Yeni mahallle"
            },
    work:()=>{ //function
        console.log("Programcı çalışıyor");
    }
}


//object array oluşturma
exports.backend_developer=[ //list or array
    {name:"aaaaa", age:25}, //object
    {name:"bbbbb", age:30} //object
];

