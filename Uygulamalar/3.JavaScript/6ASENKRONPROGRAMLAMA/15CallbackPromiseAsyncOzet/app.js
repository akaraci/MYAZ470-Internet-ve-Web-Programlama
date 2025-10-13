//Bu sayfada callback olmadan, calback kullanarak, Promise kullanarak ve async wait kullanarak bir fonksiyonu
//yazarak aralarındaki farkları ve kullanım şekillerini özetlemiş olacağız.

// //Normal function-hatalı çalışma önreği

  // Uzun bir AJAX veya Fetch API isteği
  // function islem() {
  //   let adi = null;
  //   setTimeout(() => {
  //     adi = 'Karacı';
  //   }, 2000);

  //   return adi;
  // }

  // // Yazdırma işlemi
  // function yazdir(adi) {
  //   setTimeout(() => {
  //     console.log(adi); //null döner
  //   }, 1000);
  // }

  // const data=islem(); //bu çalışır ancak 2 saniye beklerken bir sonraki fonksiyon çaalışır ve ekrana null yazılır. 
  // yazdir(data);

//---------------------------------------------------------
//Yukarıdaki örnekteki hatayı callback kullnarak giderebiliriz


  // Uzun bir AJAX veya Fetch API isteği
  // function islem(callback) {
  //   let adi = null;
  //   setTimeout(() => {
  //     adi = 'Karacı';
  //     callback(adi);
  //   }, 2000);

    
  // }

  // // Yazdırma işlemi
  // function yazdir(data) {
  //   setTimeout(() => {
  //     console.log(data); 
  //   }, 1000);
  // }

  // islem(yazdir); 
  // islem(response=>{ //callback bu şekilde de yazılabilir. Bu fonksiyon islem fonskiyonu içindeki callback'e set edilir.
  //   console.log(response);
  // });
//--------------------------------------------------------------------------------------------------------------------

//---Aynı sorunu promise ile çözebiliriz. ES6. Aşağıdaki kod farklı promise kullanımları ile
//yazılabilir. 


  // Uzun bir AJAX veya Fetch API isteği
  // function islem() {
  //   let adi = null;
  //   const promise=new Promise((resolve,reject)=>{
  //       setTimeout(() => {
  //           adi = 'Karacı';
  //           resolve(adi);//istersek değer gönderebiliriz
  //         }, 2000)
  //   }); 
    
  //   return promise;
  // }

  // // Yazdırma işlemi
  // function yazdir(data) {
  //   setTimeout(() => {
  //     console.log(data); 
  //   }, 1000);
  // }

  // // islem().then(response=>yazdir(response)); 
  // islem().then(response=>console.log(response));//bu şekilde de olur
  //-----------------------------------

  //-----async ve await kullanımı ile de yazılabilir.

 
  // Uzun bir AJAX veya Fetch API isteği
  function islem() {
    let adi = null;
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            adi = 'Karacı';
            resolve(adi);
          }, 2000);   
    }); 
         
  }

  // Yazdırma işlemi
  function yazdir(data) {
    setTimeout(() => {
      console.log(data); //null döner
    }, 1000);
  }

  async function calistir(){ //await varsa async olmak zorunda
    const response=await islem(); //await promise bir işlemden cevap gelinceye kadar bekletir
    yazdir(response);
  }

calistir();