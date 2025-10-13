const adsoyad="Abdulkadir Karacı";
const depertmant="Yazılım Mühendisliği";
const ucret=5000;

const kisi="İsim:"+adsoyad+"\nDepertman:"+depertmant+"\nÜcret:"+ucret;

//backtick ile daha kolay ALTGR+, tuşuna basın
// Backtick (template literal), değişkenleri ve ifadeleri string içine kolayca yerleştirmeyi sağlar.
const kisi1=`İsim:${adsoyad} \nDepertman:${depertmant} \nÜcret:${ucret}`;


//arrow function
const a=(x,y)=>{
   return x+y;
}

const b=function(x,y){
   return x+y;
}

function c(x,y){
   return x+y;
}

console.log(a(5,4));
console.log(b(5,3));
console.log(c(5,5));

//back tick ile string literal tanımlanıyor
const html=`
            <ul>
               <li>${adsoyad}</li>
               <li>${depertmant}</li>
               <li>${ucret}</li>
               <li>${a(5,20)}</li>
            </ul>`
//liste ID'li div tag'ını bul
const element=document.getElementById("liste")
//bulunan div içine veriyi html olarak ekle
element.innerHTML=html;

console.log(element)
console.log(kisi1);
