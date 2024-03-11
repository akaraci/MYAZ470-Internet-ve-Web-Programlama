
//  function get(url){
//     return new Promise((resolve,reject)=>{
//         fetch(url)
//         .then(response=>response.json()) //gelen cevabın promise kısmını döndürür.
//         .then(response=>resolve(response))
//         .catch(err=>reject(err))

//     })
 
// }

//daha önce kullandığımız get isteğini daha kısa yazmış olduk.
async function get(url){
    const response=await fetch(url);  //bekle
    const data=await response.json();//json'a çevirirken tekrar bekle
    return data;
 
}

get("https://jsonplaceholder.typicode.com/albums1/51").then(response=>console.log(response)).catch(err=>console.log(err));