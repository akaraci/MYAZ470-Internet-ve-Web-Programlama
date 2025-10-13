//request'ler için aşağıdaki linki kullanacağız (Free fake API for testing and prototyping)
//https://jsonplaceholder.typicode.com/

// class Request{
//     constructor(){
//         this.xhr=new XMLHttpRequest() //this->request object
//     }

//     get(url){
//         this.xhr.open("GET",url); //this->request
//         this.xhr.onload=()=>{
//             console.log(this);
//             if (this.xhr.status==200){
//                 console.log(this.xhr.responseText); //this->xhr'yi gösteririrdi ancak arrow fucntio yazdığımız için Request'i gösterir. Bind yapmaya gerek yok.
//             }
//         };

//         this.xhr.send();

//     }
// }

// const request=new Request();
// const albums=request.get("https://jsonplaceholder.typicode.com/albums");
// console.log("Albumler:",albums); //undefined olur. Çünkü asenkron çalışır ve veri gelmeden burası çalışmış olur.


//----Yukarıdaki kodu callback'li hale getirirsek veri geldiğinde yapılması gereken işleri oraya yazabiliriz.
//request'ler için daha önce gödrüğümüz ajax yöntemi kullanılıyor
class Request{
    constructor(){
        this.xhr=new XMLHttpRequest() //this->request object
    }

    //get request function
    get(url,callback){
        console.log("çalıştı")
        this.xhr.open("GET",url); //this->request
        this.xhr.onload=()=>{
            console.log(this);
            if (this.xhr.status==200){ 
                callback(null,this.xhr.responseText); //responsse end
            }
            else callback("GET:Bir hata oluştu...",null);
        };

        this.xhr.send();
    }

    //post request function parametre olarak url ve data gelmelidir
    post(url,data,callback){
        this.xhr.open("POST",url); // Bağlantı açılıyor
        //gönderilecek verinin formatı belirlenmelidir. Form ya da json olarak belirlenebilir.
        this.xhr.setRequestHeader("Content-type","application/json") //JSON

        this.xhr.onload=()=>{ //istekten cevap döndüyse
            if (this.xhr.status==201){ //status 201 ->Create
                callback(null,this.xhr.responseText); //this.xhr.responseText:eklenen veriyi döndürür
            }
            else{
                callback("POST:Bir hata oluştu",null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }

    //put request post ile hemen hemen aynıdır. Güncelleme için kullanılır
    put(url,data,callback){
        this.xhr.open("PUT",url); // Bağlantı açılıyor
        //gönderilecek verinin formatı belirlenmelidir. Form ya da json olarak belirlenebilir.
        this.xhr.setRequestHeader("Content-type","application/json") //JSON

        this.xhr.onload=()=>{ //istekten cevap döndüyse
            if (this.xhr.status==200){ //status 200->OK kullanılır
                callback(null,this.xhr.responseText); //this.xhr.responseText:eklenen veriyi döndürür
            }
            else{
                callback("PUT:Bir hata oluştu",null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }

    //delete request function
    delete(url,callback){
        this.xhr.open("DELETE",url); //this->request
        this.xhr.onload=()=>{
            console.log(this);
            if (this.xhr.status==200){ 
                callback(null,"Silme Başarılı"); //responsse end
            }
            else callback("DELETE:Bir hata oluştu...",null);
        };

        this.xhr.send();
    }
}

const request=new Request();

//----get isteği gönderiliyor---------
request.get("https://jsonplaceholder.typicode.com/albums/1",(err,response)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log(response);
    }
});
//----------------------

//----post isteği gönderiliyor---------
// const data={userId:1,title:"deneme"} //id göndermiyoruz. ilgili restApi sağlayıcıda otomatik oluşturuluyor.

// request.post("https://jsonplaceholder.typicode.com/albums",data,(err,response)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("Post Okey");
//         console.log(response);
        
//     }
// });



// //----put isteği gönderiliyor---------
// const newdata={userId:1,title:"BABA"} //id göndermiyoruz. ilgili restApi sağlayıcıda otomatik oluşturuluyor.

// request.put("https://jsonplaceholder.typicode.com/albums/10",newdata,(err,response)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(response);
//     }
// });


//----DELETE isteği gönderiliyor---------
// request.delete("https://jsonplaceholder.typicode.com/albums/10",(err,response)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(response);
//     }
// });
//----------------------