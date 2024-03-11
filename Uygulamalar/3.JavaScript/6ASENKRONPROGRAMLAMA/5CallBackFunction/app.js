//callback fonskyionlar sayaseinde asenkron işlemleri yönetebiliriz.
//bir fonksiona başka bir fonksion parametre olarak gönderilebilir ve
//fonksiyonun çalışması bittiğinde gönderilen callback ile çalışmaya devam eder.
//Normalde js asenkron çalışır. Bunu senkron hale getirmek için callback function kullanılabilir.
// örneğin bir verinin gelme işlemi bittiğinde bir fonksiyonun çalışması isteniyorsa veriyi alma
//fonskyionuna bir callback function yazmak yeterli olacaktır.

document.getElementById("btnstart").addEventListener("click",()=>{
  //Burası callback function. Click olayı gerçekleştiğinde çalışacak
  //butona ne zaman tıklanacağı belli değildir. tıklandığında asenkron bir function tetiklenir.
    console.log("Start Butona tıklandı.");
});

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
//önce process1 çağrılmasına karşın  ekrana önce process2'nin çıktısı yazılır.
//bu da askenron çalışmayı kanıtlar.

// function process1(){
//     setInterval(()=>{
//         console.log("Process1");
//     },3000);
    
// }

// function process2(){
//     setInterval(()=>{
//         console.log("Process2");
//     },2000);
// }

// process1();
// process2();
// console.log("son mu çalıştı? Yoksa ilk mi?")
//-------------------------------------------

//Yukarıdaki örnekte process1 önce çarılmasına karşın sonra çalışmaktadır.
//process2'nin porcess1'den sonra çalışmasını sağlamak için process1'e bir callback fonksyion
//tanımlayıp parametre olarak process2'yi gönderebiliriz. Böylece proces2, process1'in callback fonksiyonu olmuş olur.

// function process1(callback){
//     setInterval(()=>{
//         console.log("Process1");
//         callback();
//     },3000);
    
// }

// function process2(){
//     setInterval(()=>{
//         console.log("Process2");
//     },2000);
// }

// process1(process2);

//---------------------------Callback farklı örnek. Neden callback kullanmalıyız. Önce aşağıdaki örneği sonra daha sonraki örneği çalıştırın--------
//ekleme işleminden sonra listeleme işlemi yapılmasına karşın
//ekleme işlemi 2 sn'ye sürdürdüğünden ve işlemler asenkron yapılığından
//ekleme işlemi bitmeden listeler ve bu nedenle eklenen değer listelenmez.

// const langs=["Node.js","JS","Python"]

// function addLang(lang){
//     setTimeout(()=>{
//         langs.push(lang);
//     },2000)
// }

// function langList(){
//     langs.forEach(lang => {
//         console.log(lang);
//     });
// }


// addLang("deneme");
// langList(); //asenkron durum


//addLang fonksiyonuna callback yazarak yeni lang eklendiğinde listeleme işini
//callback fonksiyonla yaparsak yukarıdaki problem çözülür.
const langs=["Node.js","JS","Python"]

function addLang(lang,callback){
    setTimeout(()=>{
        langs.push(lang);
        callback();
    },2000)
}

function langList(){
    langs.forEach(lang => {
        console.log(lang);
    });
}

addLang("deneme",langList);
