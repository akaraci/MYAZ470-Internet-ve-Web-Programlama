class Employes{
   constructor(){
       this.xhr=new XMLHttpRequest(); //this-> Employee ifade eder
   } 

    get(){
        this.xhr.open("GET","bir link girin");
// onload fonksiyonu normal bir fonksiyon olarak tanımlandığı için this bağlamı değişecektir.
// JavaScript'te standart fonksiyonlar (function() {}) çağrıldığında this, çağrıyı yapan nesneyi temsil eder.
// XMLHttpRequest nesnesinde onload tetiklendiğinde, this artık xhr nesnesini temsil eder.
// this.xhr kullanmaya çalıştığımızda hata oluşur çünkü this artık Employes değil, xhr nesnesidir.
        this.xhr.onload=function (){ //normal function this'i bulunduğu kapsamdan alır. Yani xhr objesindir.
            if (this.xhr.status==200){ //this xhr nesnesini ifade eder. Bind bir üst nesneye bind etmezseniz çalışmaz.
                this.xhr.responseText;
            }
        }.bind(this) //get fonksiyonu Employes clasına bind edildi. burada this->Employes'ı gösterir. onload fonksiyonunu Employes nesnesine bağlar:

        this.xhr.send();
    }
}

emp=new Employes();
emp.get();


//bind etmek istemiyorsanız arrow function yazmalısınız. aşağıdaki örneği inceleyin.

class Employes1{
    constructor(){
        this.xhr=new XMLHttpRequest(); //this Employee
    } 
 
     get(){
         this.xhr.open("GET","bir link girin");
         this.xhr.onload=()=>{ //arrow function kullandık. Bind işleminden kurutulduk
                            //arrow function this'i Üst Kapsamdan Alır. Üst kaspamda da Employes1 vardır.
             if (this.xhr.status==200){ //this buarada Employes1 nesnesini ifade eder ve çalışır.
                 this.xhr.responseText;
             }
         } //bind işlemi silindi.
 
         this.xhr.send();
     }
 }
 
 emp=new Employes();
 emp.get();