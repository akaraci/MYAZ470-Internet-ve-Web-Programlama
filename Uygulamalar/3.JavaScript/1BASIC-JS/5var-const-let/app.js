// ES6, ES7, ES8 Javascript'in çekirdeğini oluşturan ECMAScript in yeni versiyonlarının isimleridir. 
// ECMAScript bir yazılım dili standardıdır.
//ES6 ile const ve let değişken tanımlama özellikleri de gelmiştir.

//----var
var a="Karacı";
console.log(a,typeof a);
a="havacı"
console.log(a,typeof a);
var a="yeniden tanımlanır mı? Evet";
console.log(a);

//--let
let b="Karacı";
console.log(b);
// let b="Yeniden tanımlanır mı? Hayır hata verir";
// console.log(b);


//--i local olmasına karşın for dışında da kullanılır.
//eğer bunu let ile tanımlasaydınız scope dışında kullanmazdınız.
for (var i=1;i<5;i++){
    console.log(i*i);
}
console.log("for çıkışında i=",i);


//--
const sabit=3.14;
console.log("sabit=",sabit)
// sabit=3.1456; //hata alırsınız. Yeni değer assign edemezsiniz.


const list=[1,2,3,4,5]
// list=[2,3,4] //hata yeniden atama yapamazsınız

//çalışır. çünkü list'e yeni bir değer ataması yapmıyorsunuz.
//listin gösterdiği adresteki ilk elemanı değiştiriyorsunuz.
//Yeni bir bellek bölgesi refere etmediğiniz sürece sorun yok.
list[0]=3
list.push(6)

console.log(list) 