const filter=document.getElementById("filter");

//sayfa yüklemesi tamamlandığında
document.addEventListener("DOMContentLoaded",load);

function load(e){
    console.log("sayfa yüklendi");
}

filter.addEventListener("focus",run);

//Inputtan dışarı çıkıldığında nonfocus
filter.addEventListener("blur",run);

//copy and paste and cut
filter.addEventListener("copy",run);
filter.addEventListener("paste",run);
filter.addEventListener("cut",run);

//select
filter.addEventListener("select",run);

function run(e){
    console.log(e.type);
}