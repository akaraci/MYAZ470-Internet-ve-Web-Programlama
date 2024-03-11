// Bu uygulamada external bir API Yardımıyla veri çekeceğiz.
//Kullanacağımız API->exchange rate api. Aşağıdaki linkte mevcuttur
//https://www.exchangerate-api.com/

const amount=document.getElementById("amount"); //kaç dolar
const tl=document.getElementById("tl");//tl karşılığı

document.getElementById("change").addEventListener("click",()=>{
    const xhr=new XMLHttpRequest();
    xhr.onload=()=>{ //cevap geldiyse
        if (xhr.status==200){
            const data=JSON.parse(xhr.responseText);
            console.log(data)
            const kur=parseFloat(data.conversion_rates.TRY);
            console.log("kur=",kur);
            tl.value=parseFloat(amount.value)*kur;
        }
    }

    xhr.open("GET","https://v6.exchangerate-api.com/v6/385e91c809afc90978ad070a/latest/USD");
    xhr.send();
});

