getData=function(url,callback){
    setTimeout(()=>{
        if (typeof url === "string"){
            callback("Olumlu sonuç");
        }
        else callback("olumsuz sonuç");
    },3000);
}

result=getData("http://www...",result=>console.log(result));
