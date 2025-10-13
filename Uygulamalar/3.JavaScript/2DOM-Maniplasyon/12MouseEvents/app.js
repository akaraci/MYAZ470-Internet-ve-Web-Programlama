//mouse Events

const cardbody=document.querySelectorAll(".card-body")[1];
const title=document.querySelector(".card-title");
console.log(cardbody);
console.log(title);

// title.addEventListener("click",run);

// title.addEventListener("dblclick",run);

title.addEventListener("mousedown",run);

title.addEventListener("mouseup",run);

//elementin üzerine gelindiğinde
title.addEventListener("mouseover",run);

//elementin üzerinden çıktığımızda
title.addEventListener("mouseout",run);

//mouseover ve mouseout, element içinde child elementler varsa onların üzerine gelip
//çıktıkça da tetiklenir. Aslında siz cardbody divinin içindeki bir element üzerine
//geldiğinizde mouseout ve tekrar o elemntten cardbody'e geldiğinizde mouseover tetiklenir.
//child elementlerden etkilenmemesini istiyorsanız mouseenter ve mouseleave kullanılmalıdır.
cardbody.addEventListener("mouseover",run);
cardbody.addEventListener("mouseout",run);

//mouseenter and mouseleave- child elementlerden etkilenmez. gerçekten cardbody dışına çıkıldığında ve girildiğinde çalışır.
cardbody.addEventListener("mouseenter",run);
cardbody.addEventListener("mouseleave",run);


function run(e){
      console.log(e.type);
}