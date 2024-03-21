// function process1(){
//     console.log("process1");
// }

// function process2(){
//     console.log("process2");
// }

// process1();
// process2();

// function process1(){
//     setTimeout(()=>{
//         console.log("process1");
//     },3000)
// }

// function process2(){
//     console.log("process2");
// }

// process1();
// process2();



//-------callback function
// function process1(callback){
//     setTimeout(()=>{
//         console.log("process1");
//         callback();
//     },3000)
// }

// function process2(){
//     console.log("process2");
// }


// process1(process2);

//------------------callback manual
// function process1(callback){
//     setTimeout(()=>{
//         console.log("connecting to database");
//         callback("connect to database");
//     },3000)
// }

//different app for callback

// function process1(){
//     let a=0;
//     setTimeout(()=>{
//         a=a+2
//     },300);
//     return(a);
// }

// console.log(process1());


//with callback
// function process1(callback){
//     let a=0;
//     setTimeout(()=>{
//         a=a+2
//         callback(a);
//     },300);
//     // return(a);
// }

// process1((response)=>{
//     console.log(response);
// });

//-----Promise resolve
// function process1(){
//     let a=0;
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//             a=a+2;
//             resolve(a);
//        },3000)
//     });
// }

// process1()
// .then((response)=>{
//     console.log("promise'den değer döndü");
//     console.log("dönen değer",response);
// })

// console.log("Çalışmaya deva ediyor mu?");


//promise resolve and reject

// function get(url){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (typeof url=="string"){
//                 resolve("olumlu sonuç")
//             }
//             else{
//                 reject("url string olmalıdır");
//             }
//         },3000);
//     });
// }

// get("123")
// .then(response=>{
//     console.log(response);
// })
// .catch(err=>{
//     console.log(err);
// })

//promise chain
// function addTwo(number){
//     return new Promise((resolve,reject)=>{
//         if (typeof number=="number"){
//             resolve(number+2);
//         }
//         else{
//             reject("Lütfen number parametre gönderin.");
//         }
//     })
// }

// addTwo(10)
// .then(response=>{
//   console.log(response);
//   return response+2;  
// })
// .then(response=>{
//     console.log(response)
// })
// .catch(err=>{
//     console.log(err);
// })


//async->promise return eder
// async function get(){
//     let a=0;
//     a+=2;
//     return a;
// }

// const b=get();
// console.log(b);
// console.log(typeof b);
// get()
// .then(response=>{
//     console.log(response);
// })

//using async and await
// function get(url){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (typeof url=="string"){
//                 resolve("olumlu sonuç")
//             }
//             else{
//                 reject("url string olmalıdır");
//             }
//         },3000);
//     });
// }

// async function getData(){
//     try{
//         const response=await get(123);
//         console.log(response);
//     }
//     catch(err){
//         console.log(err);
//     }
    
// }

// getData();
// console.log("Çalışmaya devam ediyor mu?");


function getHttpReq(url){
   const xhr=new XMLHttpRequest();
   return new Promise((resolve,reject)=>{
    xhr.open("GET",url);
    xhr.onload=()=>{
        if (xhr.status==200){
            resolve(xhr.responseText);
        }
        else {
            reject(new Error("Bilinmeyen bir hata oluştu"));
        }
    };

    xhr.send();
   });
}

// getHttpReq("https://jsonplaceholder.typicode.com/albums1/10")
// .then((response)=>{
//     console.log(response);
// })
// .catch(err=>{
//     console.log(err);
// })

async function app(){
   try{
        const response= await getHttpReq("https://jsonplaceholder.typicode.com/albums1/10");
        console.log(response);
   }
   catch(err){
        console.log(err);
   }
}

app();