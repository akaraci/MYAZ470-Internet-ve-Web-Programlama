//promise kullanımı

//promise döndüren fonksiyon
function getData(url){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof url=="string"){
                resolve("olumlu sonuç");
            }
            else{
                  reject("url string olmalıdır");
            }
          
          
        }, 3000);
    });
}

//console.log(getData("url:aaaa.aaaa.com")); //promise nesnesini yazar. Console'dan bakabilirsiniz.

//promise'den return edilen olumlu ve olumsuz sonuç aşağıdaki gibi ele alınabilir.
//resolve ile dönen olumlu sonuç .then ile bir callback function kullanılarak alınabilir.
//reject ile dönen hata ise .catch ile bir callback function kullanılarak elde edilebilir.

getData("url:aaaa.aaaa.com").then((response)=>{ 
    console.log(response);
}).catch((err)=>{
    console.log(err);
})


//promise ile http requset örneği

class Employes{
    constructor(){
        this.xhr=new XMLHttpRequest();
    }

    get(url){
      return new Promise((resolve,reject)=>{//promise içinde callback
        this.xhr.open("GET",url);
        this.xhr.onload=()=>{
            if(this.xhr.status==200){
                resolve(this.xhr.responseText); //başarılı ise resolve
            }
            else{
                reject(new Error("Bilinmeyen bir hata oluştu")); //başarısız ise reject
            }
        }
        this.xhr.send();
      });       
    }
}

emp=new Employes();
emp.get("https://jsonplaceholder.typicode.com/albums/10")
.then(response=>{console.log(response);}) //başarılı //then den sonra arrow callback function yazdık. Normal function'da yazabiliriz.
.catch(err=>{console.error(err);});
