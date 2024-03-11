//request'ler için aşağıdaki linki kullanacağız (Free fake API for testing and prototyping)
//https://jsonplaceholder.typicode.com/

// class Request{
//     get(url){
//         fetch(url)
//         .then(response=>response.json()) //gelen cevabın promise kısmını döndürür.
//         .then(response=>console.log(response))
//         .catch(err=>console.log(err))
//     }
// }

// const request=new Request();
// request.get("https://jsonplaceholder.typicode.com/albums/51");


//Yukarıdaki get fonksiyonunu gelen veriyi dışarı açacak şekilde bir promise döndürerek gerçekleştirebiliriz

class Request{
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response=>response.json()) //gelen cevabın promise kısmını döndürür.
            .then(response=>resolve(response))
            .catch(err=>reject(err))

        })
     
    }

//ödev: aşağıdaki örneği yukarıdaki gibi promise döndürerek tekrar düzenleyin. Ayrıca Put ve Delete Request'leri Fetch ile gerçekleştrin.
    post(url,data){ //aşağıdaki kodu https://jsonplaceholder.typicode.com/guide/ adresinden aldık.
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
}


const request=new Request();
let albums;
request.get("https://jsonplaceholder.typicode.com/albums/51")
.then(albums=>console.log(albums))
.catch(err=>console.log(err));

request.post('https://jsonplaceholder.typicode.com/albums',{userId:555,title:"Baba"});




