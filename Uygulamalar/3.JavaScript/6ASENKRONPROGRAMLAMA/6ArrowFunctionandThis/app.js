class Employes{
   constructor(){
       this.xhr=new XMLHttpRequest(); //this Employee
   } 

    get(){
        this.xhr.open("GET","bir link girin");
        this.xhr.onload=function (){
            if (this.xhr.status==200){ //this xhr nesnesini ifade eder. Bind bir üst nesneye bind etmezseniz çalışmaz.
                this.xhr.responseText;
            }
        }.bind(this) //get fonksiyonu Employes clasına bind edildi. burada this->Employes'ı gösterir.

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
             if (this.xhr.status==200){ //this xhr nesnesini ifade eder. Bind bir üst nesneye bind etmezseniz çalışmaz.
                 this.xhr.responseText;
             }
         } //bind işlemi silindi.
 
         this.xhr.send();
     }
 }
 
 emp=new Employes();
 emp.get();