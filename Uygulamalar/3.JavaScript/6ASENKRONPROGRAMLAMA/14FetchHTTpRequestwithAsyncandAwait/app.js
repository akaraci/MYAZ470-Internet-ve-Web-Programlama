

class Request{
    async get(url){
        // return new Promise((resolve,reject)=>{
        //     fetch(url)
        //     .then(response=>response.json()) //gelen cevabın promise kısmını döndürür.
        //     .then(response=>resolve(response))
        //     .catch(err=>reject(err))

        // })

        const response=await fetch(url);
        const data=await response.json();
        return data;
     
    }


    async post(url,data){ //aşağıdaki kodu https://jsonplaceholder.typicode.com/guide/ adresinden aldık.
        const response=await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
            });

            const responsedata=await response.json();
            return responsedata;


    }
}


const request=new Request();
let albums;
request.get("https://jsonplaceholder.typicode.com/albums/51")
.then(albums=>console.log(albums))
.catch(err=>console.log(err));

request.post('https://jsonplaceholder.typicode.com/albums',{userId:555,title:"Baba"}).then(response=>console.log(response));




