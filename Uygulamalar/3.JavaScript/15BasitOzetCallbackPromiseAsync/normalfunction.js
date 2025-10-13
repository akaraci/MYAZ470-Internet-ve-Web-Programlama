getData=function(url){
        setTimeout(()=>{
            if (typeof url === "string"){
                return("Olumlu sonuç");
            }
            else return("olumsuz sonuç");
        },3000);
}

result=getData("http://www...");
console.log("Result:",result);