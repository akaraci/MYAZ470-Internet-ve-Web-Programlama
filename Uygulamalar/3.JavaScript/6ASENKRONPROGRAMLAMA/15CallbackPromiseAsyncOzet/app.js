//Bu sayfada callback olmadan, calback kullanarak, Promise kullanarak ve async wait kullanarak bir fonksiyonu
//yazarak aralarındaki farkları ve kullanım şekillerini özetlemiş olacağız.

// //Normal function-hatalı çalışma önreği
// let adi = null;
//   // Uzun bir AJAX veya Fetch API isteği
//   function islem() {
//     setTimeout(() => {
//       adi = 'Karacı';
//     }, 2000);
//   }

//   // Yazdırma işlemi
//   function yazdir() {
//     setTimeout(() => {
//       console.log(adi); //null döner
//     }, 1000);
//   }

//   islem(); //bu çalışır ancak 2 saniye beklerken bir sonraki fonksiyon çaalışır ve ekrana null yazılır. 
//   yazdir();

//---------------------------------------------------------
//Yukarıdaki örnekteki hatayı callback kullnarak giderebiliriz

// let adi = null;
//   // Uzun bir AJAX veya Fetch API isteği
//   function islem(callback) {
//     setTimeout(() => {
//       adi = 'Karacı';
//       callback();
//     }, 2000);

    
//   }

//   // Yazdırma işlemi
//   function yazdir() {
//     setTimeout(() => {
//       console.log(adi); //null döner
//     }, 1000);
//   }

//   islem(yazdir); //bu çalışır ancak 2 saniye beklerken bir sonraki fonksiyon çaalışır ve ekrana null yazılır. 
//--------------------------------------------------------------------------------------------------------------------

//---Aynı sorunu promise ile çözebiliriz. ES6. Aşağıdaki kod farklı promise kullanımları ile
//yazılabilir. 

// let adi = null;
//   // Uzun bir AJAX veya Fetch API isteği
//   function islem() {
//     const promise=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             adi = 'Karacı';
//             resolve(adi);//istersek değer gönderebiliriz
//           }, 2000)
//     }); 
    
//     return promise;
//   }

//   // Yazdırma işlemi
//   function yazdir() {
//     setTimeout(() => {
//       console.log(adi); //null döner
//     }, 1000);
//   }

//   //islem().then(yazdir); //bu çalışır ancak 2 saniye beklerken bir sonraki fonksiyon çaalışır ve ekrana null yazılır. 
//   islem().then(response=>console.log(response));//bu şekilde de olur
  //-----------------------------------

  //-----async ve await kullanımı ile de yazılabilir.

  let adi = null;
  // Uzun bir AJAX veya Fetch API isteği
  function islem() {
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            adi = 'Karacı';
            resolve();
          }, 2000);   
    }); 
         
  }

  // Yazdırma işlemi
  function yazdir() {
    setTimeout(() => {
      console.log(adi); //null döner
    }, 1000);
  }

  async function calistir(){
    await islem(); //await promise bir işlemden cevap gelinceye kadar bekletir
    yazdir();
  }

calistir();