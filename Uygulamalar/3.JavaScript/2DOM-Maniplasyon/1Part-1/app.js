// DOM Nedir?
// DOM (Document Object Module) HTML dökümanları içerisinde 
// bulunan nesnelere kolaylıkla erişim sağlamak ve üzerinde 
// işlemler yapabilmek için tasarlanan bir modeldir. 
// DOM ile HTML dosyamızda bulunan her şeye erişim sağlayabiliriz.


//window nesnesi

console.log("this ile yazdır:",this); //window nesnesini yazdırır

// document, HTML belgesine erişmeyi sağlayan Document Object Model (DOM) nesnesidir.
console.log("docement:",document);

//-----------------------------
console.log("-------------------------")
let value;
value=document.querySelectorAll("*");
value=document.querySelectorAll("*").length;
value=document.querySelectorAll("*")[1];
value=document.querySelectorAll("*")[document.querySelectorAll("*").length-1];

//----------------
// console.log("Tüm elements yazdırılıyor");
// const elements=document.querySelectorAll("*");
// for (element of elements){
//     console.log(element);
// }

// console.log("------diziye dönüştürülüp foreach ile yazdırılıyor")
// const collections=Array.from(elements);
// collections.forEach(element => {
//     console.log(element)
    
// });


value=document.body;
value=document.head;
// value=document.location; //url bilgilerini yazar
// value=document.location.href;
// value=document.location.host;
// value=document.location.hostname;
//value=document.characterSet;
console.log(value);