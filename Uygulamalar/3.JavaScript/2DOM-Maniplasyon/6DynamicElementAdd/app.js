//create  new element

const newLink=document.createElement("a");
console.log(newLink);


//--Tüm Taskları Temizleyin (id:clear-todos) linki ile aynı düzeyde link ekleme
//---eklenecek parent bulunuyor
const sourceelement=document.querySelector("#clear-todos");
console.log(sourceelement);
const parent=sourceelement.parentElement;
console.log(parent);

//---link oluşturuluyor
const link=document.createElement("a");
link.id="clear-todos1";
link.className="btn btn-danger";
link.href="http://www.google.com";
link.target="_blank";
link.textContent="Dinamik Link";
//---Belirlenen element'e ekleniyor
parent.appendChild(link);


//----text ekleme
const text=document.createTextNode("Dinamik text ekledik");
parent.appendChild(text);

console.log(link);