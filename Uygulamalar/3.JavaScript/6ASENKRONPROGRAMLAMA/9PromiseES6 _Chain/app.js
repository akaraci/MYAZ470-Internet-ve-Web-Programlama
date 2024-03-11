//promise'den dönen değeri .then blokları ile ard, arda değerlendirebiliriz.
//ilk then geriye response'ı tekrar return ederse aslında promise return etmiş olur. Böylece üst üste çağrılır.

function addTwo(number){
    return new Promise((resolve,reject)=>{
        if (typeof number=="number"){
            resolve(number+2);
        }
        else{
            reject(new Error("Bir hata oluştu"));
        }
    });
}

addTwo(10)
.then(response=>{
    console.log(response);
    return response+2; //promise return eder. Bunu yakalamak için bir then daha yazmak gerekir.
 })
 .then(response=>console.log(response))
 .catch(err=>console.error(err)); //sadece bir cach kullanılır. Birden fazla kullanılmaz.
