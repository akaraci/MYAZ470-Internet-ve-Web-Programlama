// console.log(window); //winow object içeriğini yazdır. Birçok metod ve özellik barındırır
// window.alert("deneme");
// alert("deneme2");


//---confirm
// const cevap=confirm("Emin misiniz?");
// console.log(cevap);
// if (cevap) console.log("Silin");
// else console.log("silmeyin.")


//--Kullanıcıdan input alma:prompt

// const cevap=prompt("2+2=?");
// console.log(cevap);
// if(cevap==4) alert("doğru");
// else alert("yanlış");



//----window.location. Bulunduğumuz web adresi ve konumuyla ilgili bilgiler döndürür
let value;
value=window;
value=window.location;
// value=window.location.host;
// value=window.location.hostname;
// value=window.location.port;
// value=window.location.href;
console.log(value);

//sayfayı yeniler. Ancak bu haliyle sürekli yeniler
// window.location.reload();

// if (confirm("Sayfa yenilensin mi?")) window.location.reload();
// else console.log("Sayfa yenilenmedi");

//---sayfa dıştan dışa yükseklik ve genişliği
console.log("sayfa Yüksekliği:",window.outerHeight);
console.log("sayfa Genişliği:",window.outerWidth);

//---sayfanın iç kullanım yükseklik ve genişliği
console.log("sayfa iç Yüksekliği:",window.innerHeight);
console.log("sayfa iç Genişliği:",window.innerWidth);

console.log(value);