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
// async fonksiyonlar her zaman bir Promise döndürür.
// Ancak setTimeout gibi callback tabanlı fonksiyonlar Promise üretmez.
// setTimeout içindeki dönüş değeri (return data;) fonksiyon dışına iletilmez.
// Bu yüzden setTimeout içinde resolve(data); kullanarak Promise üretmeliyiz.

async function awaitOrnek(data){ //promise döndürdüğümüz için async yazmasak da olur.
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{if(data!=null){
        console.log("İşlem Tamam");
        resolve(data)
    }
    else reject("405 Hata");
}, 1000)
 });
}

// awaitOrnek(null).then(response=>console.log(response)).catch(err=>console.log(err));

async function getData(data){ //async yazmak zorundayız. Çünkü await sadece async fonksiyonlarda kullanılabilir.
    try{
    const result=await awaitOrnek(data);
    console.log("Result=",result);
    }
    catch(err){console.log(err);}
}

   getData(null); 

console.log("Kod çalışmaya devam eder mi?");
