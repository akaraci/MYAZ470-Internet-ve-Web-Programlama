//Browser üzerinde Session Storage veya Local Storage olarak bilgi saklanabilir.
//Browser web geliştirme araçlarında daha önce console tabını kullanmıştık.
//storege'ları takip etmek için application tabını kullanabilirsiniz.
//Application tabına girdiğinizde Storage kısmında Session storage ve Local storage
//seçeneklerini görebilirsiniz. Local storage siz silinceye kadar browser üzerinde depolanır.
//session storage ise bir oturumla ilgili olduğundan oturum sonlandığında silinir.
//Storage'lar key-value çiftleri şeklinde veri tutar.

//window nesnesi üzerinden storage'lara erişilebilir
console.log(window.sessionStorage);


const add=document.querySelector("#add");
const del=document.querySelector("#delete");
const clear=document.querySelector("#clear");

const inputkey=document.querySelector("#inputkey");
const inputvalue=document.querySelector("#inputvalue");
const inputdeletekey=document.querySelector("#inputdeletekey");




add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e){
    //oturum açık olduğu sürece hayatta kalır. Browser developer tools'dan Application kısmından görebilirsiniz.
    //varolan bir key'e değer eklerseniz içeriği güncellenir.
    sessionStorage.setItem(inputkey.value, inputvalue.value);
    alert(sessionStorage.getItem(inputkey.value)+" değeri okundu");
}

function deleteItem(e){
    sessionStorage.removeItem(inputdeletekey.value);
}

function clearItems(e){
    //tüm sessionstorage'leri sil
    sessionStorage.clear();
}

