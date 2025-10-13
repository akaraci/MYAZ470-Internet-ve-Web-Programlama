//arrow vs. normal function
//Normal Function: Çağrıldığı bağlama göre belirlenir. Yani this fonksiyonun çağrıldığı nesneye bağlıdır. 
//Nesneye bağımlı çağrılmazsa this window'dur. Normal function: this dinamikdir → çağrıya göre değişir.

//Arrow Function:Kendi this’ini oluşturmaz. Dıştaki (lexical) this’i miras alır. Nesneye bağımlı çağrılsa bile bulundukları ortamın this'ini miras alır.




const person={
    name:"Abdulkadir",
    surname:"Karacı",
    yaz:() => console.log(this.name),
    yaz1:function(){console.log(this.name)}
}

// Neden undefined döner
// Çünkü: Arrow function’lar (=>) kendi this değerlerini oluşturmazlar.
// Yani this, fonksiyonun çağrıldığı nesneyi (person) değil, tanımlandığı ortamın this’ini kullanır.
//Tanımlandıkları ortamın this değerini lexical (yani sözcüksel) olarak miras alırlar.
// Bu kodda yaz fonksiyonu, person nesnesinin içinde tanımlı görünse de, aslında this global scope’a (tarayıcıda window, Node.js’de undefined) aittir.

person.yaz() //undefined yazar nesneye göre değil bulunduğu yere göre this belirlenir. ve şu an window'dur.
person.yaz1() //Normal fonksiyonlar (function() {}) çağrıldığı nesneye göre this’i belirler.

console.log("----------------------")
const person1={
    name:"Abdulkadir",
    surname:"Karacı",
    yaz:function(){
                    console.log(this.name)
                    setTimeout(()=>{console.log(this.name),1000}) //undefined dönmez tanımlandığı ortamı this olarak kabul eder.
            },
    yaz1:function(){
                console.log(this.name)
                setTimeout(function(){console.log(this.name),1000}) //undefined çünkü bağımsız çağrılmış. Bağımsız çağrıldığında this window'dur.
    }
    
}

person1.yaz()
person.yaz()