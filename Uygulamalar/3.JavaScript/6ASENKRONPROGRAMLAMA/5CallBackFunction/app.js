//callback fonskyionlar sayaseinde asenkron işlemleri yönetebiliriz.
//bir fonksiona başka bir fonksion parametre olarak gönderilebilir ve
//fonksiyonun çalışması bittiğinde gönderilen callback ile çalışmaya devam eder.
//Normalde js asenkron çalışır. Bunu senkron hale getirmek için callback function kullanılabilir.
// örneğin bir verinin gelme işlemi bittiğinde bir fonksiyonun çalışması isteniyorsa veriyi alma
//fonskyionuna bir callback function yazmak yeterli olacaktır.

// document.getElementById("btnstart").addEventListener("click",()=>{
//   //Burası callback function. Click olayı gerçekleştiğinde çalışacak
//   //butona ne zaman tıklanacağı belli değildir. tıklandığında asenkron bir function tetiklenir.
//     console.log("Start Butona tıklandı.");
// });

//aşağıdaki kodlar senkron gibi çalışıyor görünmektedir.
// function process1(){
//     console.log("Process1");
// }

// function process2(){
//     console.log("Process2");
// }

// process1();
// process2();

//------------------------------------------------
//--aslında java script asenkron çalışır. Bunu aşağıdaki örnekteki gibi kanıtlayabiliriz
//önce getData çağrılmasına karşın  ekrana önce saveData'nın çıktısı yazılır.
//bu da askenron çalışmayı kanıtlar.

// function getData(){
//     setInterval(()=>{
//         console.log("Veri çekildi");

//     },3000);
    
// }

// function saveData(){
//     setInterval(()=>{
//         console.log("Veri kaydedildi");
//     },2000);
// }
// getData();
// saveData();
// console.log("son mu çalıştı? Yoksa ilk mi?")
// -------------------------------------------

//Yukarıdaki örnekte process1 önce çağrılmasına karşın sonra çalışmaktadır.
//saveData'nın getData'dan sonra çalışmasını sağlamak için getData'ya bir callback fonksyion
//tanımlayıp parametre olarak saveData'yı gönderebiliriz. Böylece saveData, getData'nın callback fonksiyonu olmuş olur.

// function getData(callback){
//     setTimeout(()=>{ //veri geldiğinde
//         console.log("Veri çekildi.");
//         callback();
//     },3000);   
// }
// function saveData(){
//   //console.log("Process2");
//     setTimeout(()=>{
//         console.log("Veri kaydedildi");
//     },2000);
// }
// getData(saveData);

//---------------------------Callback farklı örnek. Neden callback kullanmalıyız. Önce aşağıdaki örneği sonra daha sonraki örneği çalıştırın--------
//ekleme işleminden sonra listeleme işlemi yapılmasına karşın
//ekleme işlemi 2 sn'ye sürdürdüğünden ve işlemler asenkron yapılığından
//ekleme işlemi bitmeden listeler ve bu nedenle eklenen değer listelenmez.

// const langs=["Node.js","JS","Python"]
// function addLang(lang){
//     setTimeout(()=>{
//         langs.push(lang);
//     },2000);
    
// }
// function langList(){
//     langs.forEach(lang => {
//         console.log(lang);
//     });
// }
// addLang("deneme",langList);
// langList(); //asenkron durum


//addLang fonksiyonuna callback yazarak yeni lang eklendiğinde listeleme işini
//callback fonksiyonla yaparsak yukarıdaki problem çözülür.

const langs=["Node.js","JS","Python"]

function addLang(lang,callback){
    setTimeout(()=>{
        langs.push(lang);
        callback(); 
    },2000);
}

function langList(){
    console.log("add completed and listing")
    langs.forEach(lang => {
        console.log(lang);
    });
}

console.log("add continue")
addLang("deneme",langList);
