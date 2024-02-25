//Function define
//--------------------------------
function merhaba(name,age){
    if (typeof name=="undefined") name="Bilgi yok";
    if (typeof age=="undefined") age="Bilgi yok"
    console.log(`İsim:${name}  Yaş:${age}`);
}


merhaba();
merhaba("aaaa",20);

//-------------------arrow function and function expression
//function expression'da fonksiyon ismi verilmiyor ve bir const'a ataınıyor.
const kare=(value)=>{ //function(value) {} //şeklinde de yazabilirsiniz. 
    return value*value;
}

console.log("kare=",kare(12));

//---------------------------------------
//Immediately Invoked Function Expression (IIFE)-Tanımlandığı yerde çalışan fonksiyon
//bu fonksiyon içindeki değerlere dışardan erişilmez ve kod bloğu işi bittiğinde
//bellekten atılır. Ayrıca global olarak eişilemedeği için isim çakışması da önlenmiş olur.
(function(name){
    var a=5;
    console.log("merhaba ",name);
})("Kadir");

//console.log(a);  //hata verir

((sayi)=>{
    console.log(sayi*sayi);
})(20);


//------------nesne içinde function tanımlama
const database={
    host:"localhost",
    add:(deger)=>{
        console.log(deger," eklendi");
    },
    get:function(){
        console.log("Veriler alındı");
    },
    update:(id)=>{
        console.log(`id:${id} güncellendi`);
    }
}

database.add(10);
database.get();
database.update(2)


