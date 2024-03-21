var a=10;
console.log(a);
console.log(typeof a);

var pi=3.14;
console.log(typeof pi, pi);

var message="Merhaba";
console.log(typeof message,message);

var cevap=true;
console.log(typeof cevap,cevap);

var langs=["Python","C++","Node.js",55]
console.log(typeof langs,langs);
console.log(langs[0]);
console.log(langs[langs.length-1]);

var z;
console.log(z,"Type:",typeof z);
if (z==undefined) console.log("z tanımsız");
if (typeof z=="undefined") console.log("z yine tanımsız");

var y=null;
console.log(y,"type:",typeof y);

console.warn("Bu bir uyarıdır");
console.error("Sayfa bulunamadı");