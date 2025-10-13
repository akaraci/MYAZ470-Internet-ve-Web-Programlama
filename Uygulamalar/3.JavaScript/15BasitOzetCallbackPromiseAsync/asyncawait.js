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

async function calistir(url){
    try{
    const result=await getData(url);
    console.log(result);
    }
    catch(err){console.log(err);}
}

// calistir("http://www.");
calistir(2);