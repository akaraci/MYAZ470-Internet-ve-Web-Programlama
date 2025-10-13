console.log(this);
const counter=document.getElementById("counter")
//setTimeout belli bir süre bekler ve verilen callback fonksiyonu çalışır.
setTimeout(()=>{
    console.log("Naber")
},5000);


//iki saniye aralıkla fonksiyonu çalıştırır.
let i=0;
let value;
function start(){
    value=setInterval(()=>{
    console.log("Sayı-",i);
    counter.innerHTML=i;
    i+=1;
},2000);
}

function stop(){
    clearInterval(value);
}



document.getElementById("btnstart").addEventListener("click",()=>{
    start(); 
});

document.getElementById("btnstop").addEventListener("click",()=>{
 stop(); 
});
