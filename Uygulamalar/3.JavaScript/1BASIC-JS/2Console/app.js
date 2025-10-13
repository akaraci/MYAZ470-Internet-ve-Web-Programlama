//Browser'da F12 tuşuna basıp web developerdan
//Console segmesinden görebilirsiniz.
//Ayrıca console'da js kodu da yazabilirsiniz.
//console.clear()->consolu temizler

// msg id'li nesneyi bulur ve yezı rengini mavi yapar
// document.getElementById("msg").setAttribute("style","color:black; font-size:80px;");

var a=1234;
console.log("Merhaba JS");
console.log(a);

var isimler=["Ahmet","Mehmet","Ayşe"];
console.log(isimler);
console.log(isimler[0]);
console.log(typeof isimler);//diziler için object döner
console.log("Dizi mi?",Array.isArray(isimler)) //dizi kontrol



console.warn("Bu bir uyarıdır");
console.error("Sayfa bulunamadı");
// console.clear();