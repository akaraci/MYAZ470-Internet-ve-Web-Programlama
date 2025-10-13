//promise ile http requset örneği
const XMLHttpRequest = require('xhr2');
class Employes{
    constructor(){
        this.xhr=new XMLHttpRequest();
    }

    async  get(url){
        this.xhr.open("GET",url);
        this.xhr.onload=()=>{
            if(this.xhr.status==200){
                //console.log("içerde:",this.xhr.responseText);
                return Promise.resolve(this.xhr.responseText); //başarılı ise resolve
            }
            else{
                throw new Error("Bilinmeyen bir hata oluştu"); //başarısız ise reject
            }
        }
        this.xhr.send();
      }      
    
}

async function calistir(url) {
    emp=new Employes();
    const res= await emp.get(url);
    console.log("Sonuç=",res);
}
// emp=new Employes();
// emp.get("https://jsonplaceholder.typicode.com/albums/10")
// .then(response=>{console.log(response);}) //başarılı //then den sonra arrow callback function yazdık. Normal function'da yazabiliriz.
// .catch(err=>{console.error(err);});
calistir("https://jsonplaceholder.typicode.com/albums/10")