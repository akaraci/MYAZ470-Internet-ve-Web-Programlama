var a=10,b=30,c=40;
console.log(a,b,c);

var x=20;//number type
console.log(x,typeof x);

var y=3.14;
console.log(y,typeof y);


var name1="Karacı";
console.log(name1,typeof name1);

//boolean
var a=true;
console.log(a, typeof a)

//null
var a=null;
console.log(a, typeof a)

//undefined
var z; //JavaScript’te bir değişkene değer atanmamışsa default değeri undefined olur.
console.log(z,typeof z);

//bazen olan bazen de olmayan parametreyi kontrol edebilirsiniz.
if(z==undefined) console.log("Tanımsız z");


//reference data type
list=[1,2,3,4]
console.log(list,typeof list);

//-------------null vs undefined
var a1;          // değer atanmamış → undefined
var b1 = null;   // bilinçli olarak boş atanmış → null

if (a1 === undefined) {
    console.log("a değeri atanmadı (undefined).");
}

if (b1 === null) {
    console.log("b değeri bilinçli olarak boş (null).");
}

// Farkı daha net göstermek için:
if (a1 == b1) {
    console.log("a ve b eşit görünüyor (== ile karşılaştırınca).");
}

if (a1 === b1) {
    console.log("a ve b tamamen aynı.");
} else {
    console.log("a ve b tamamen aynı değil (=== farkı gösterir)."); //hem içerik hem de tip olarak karşılaştırır
}