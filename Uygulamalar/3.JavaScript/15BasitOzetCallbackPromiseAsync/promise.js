getData=function(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (typeof url === "string"){
                resolve("Olumlu sonuç");
            }
            else reject("olumsuz sonuç");
        },3000);
    });
}

getData(5).then((response)=>{
    console.log(response);
}).catch((err)=>{
    console.log(err);
})