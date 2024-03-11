//Promise'leri daha iyi yönetebilmek ve efektif kullanabilmek için ES7 ile birlikte gelmiştir.
//https://javascript.info/ adresinde js tutorial'e ulaşabilirsiniz. Buradan js ile ilgili yardım alabilirsiniz.

//---normal function
function test(data){
    return data;
}

console.log(test("Merhaba"));

//--------------------------------------------------
//------------promise function
function test1(data){
    return new Promise((resolve,reject)=>{
        resolve(data)
    })
}

console.log(test1("Merhaba promise"));
test1("Merhaba promise")
.then(response=>console.log(response));
//----------------------------------------------------

//async function-Geriye promise döndürür. Bunu belirtmek için async yazılır.
//aşağıdaki function data'yı bir promise nesnesi içine yerleştirir ve return eder.
//Böylece resolve 'ye gerek kalmaz. asyn sayesinde bu otomatik gerçekleştirilir.
//Ayrıca async function promise döndüren bir function olduğu için .then ve .catch kullanılabilir.
async function test2(data){
    //return new Promise. Biz promise döndürmediğimiz için js kendi promis içine datayı yerleştirdi ve döndürdü.
    return data;
}

console.log(test2("Merhaba Promise Async"));
test2("Merhaba Promise Async")
.then(response=>console.log(response));
//------------------------------------

//---------------await örnek

async function test3(data){

    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
           if(typeof data=="string"){
            resolve(data);
           } 
           else{
            reject("Bir hata oluştu...");
           }         
        },5000);
    });

    let response=await promise; //cevap gelene kadar yani 5sn bekle. Sonraki satırları çalıştırma
                                //Bu veri tabanı işlemlerinde çok kullanılmaktadır. Bir table'dan bir veriyi alıp
                                //buna göre başka table'a yazmak istediğinizde ilk table'dan veri gelene kadar 
                                //ikinci table'a veriyi yazamazsınız. bu nedenle ilk table'dan veri alma işlemine
                                //await keyword'ünü eklersiniz. Await sadece async function'larda çalışır.
    console.log(response);
    console.log("İşlem Tamam");
    return response;
}

test3("Merhaba await").then(response=>console.log(response)).catch(err=>console.log(err));

console.log("promise dışındaki kod çalışmaya devam eder mi?");