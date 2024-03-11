//FETCH API Ajax gibi asenkron veri alma ve gönderme için kullanılır
//Ajax yerine tercih edilebilir. Geriye promise döndürür ve then ile dönüş değerini
//catch ile hata değerini yakalayabiliriz
//fetch'de belirtmediğiniz sürece get request atar.

function getTextFile(){
    fetch("example.txt")
    .then(response=>{return response.text();}) //Promise nesnesini .text() döndürür.
    .then(response=>console.log(response)) //dönen promise nesnesinin PromiseResult değerini yazdırır.
    .catch(err=>console.log(err))
}

getTextFile();

//---------------------------
function getJSON(){
    fetch("example.json")
    //mutlaka return yazmanıza gerek yok. Aşağıdaki gibi kısaltırsanız yine return eder.
    .then(response=>response.json()) //console.log(response) ile yazdırdığınızda promise dönmediğini response.text() ile promise döndüğünü görebilirsiniz.
    .then(response=>console.log(response))
    .catch(err=>console.log(err));
}

getJSON();

//https://www.exchangerate-api.com/
//-------------------------------
function getExternal(){
    fetch("https://v6.exchangerate-api.com/v6/385e91c809afc90978ad070a/latest/USD")
    .then(response=>response.json())
    .then(response=>console.log("USD-TL:",response.conversion_rates.TRY))
    .catch(err=>console.log(err))
}

getExternal();
