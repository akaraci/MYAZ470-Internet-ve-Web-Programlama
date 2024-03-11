//txt dosyası içindeki bilgiyi asenkron olarak sayfayı yenilemeden almaya çalışacağız.
//HTTp Status
// 200:OK
// 400:Forbidden
// 404:Not found
// 505:Internal Server Error

// onreadystatechange	Defines a function to be called when the readyState property changes
// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready


document.getElementById("btn").addEventListener("click",(e)=>{
    //XMLHTTpRequest
    xhr=new XMLHttpRequest();
    
    //response hazır olduğunda tetiklenir ve fonksiyon çalışır.readyState=4
    xhr.onload=()=>
    {
       if (xhr.status==200){
        document.getElementById("ajax").textContent=xhr.responseText;
        console.log(xhr.responseText);
       }
    }
    //xhr nesnesi için durum değiştiğinde otomatik olarak atanan fonksiyon çalışır. Bu yöntem eski. Yukarıdaki daha iyi.
    // xhr.onreadystatechange=()=>{
    //     console.log(xhr.readyState); //this->xhr nesnesidir.
    //     console.log(xhr.status);
    //     if (xhr.status==200 && xhr.readyState==4){
    //         //response hazır
    //         console.log(xhr.responseText);

    //     }
    // }
    //Get reuquest yapılıyor
    xhr.open("GET","example.txt",true); //true asenkron, false senkron
    xhr.send();
    console.log("xhr:",xhr);
})