
document.getElementById("ajax").addEventListener("click",getAllEmployes);
let list=document.getElementById("employees"); //table body
function getAllEmployes(){
    const xhr=new XMLHttpRequest();
    xhr.onload=()=>{ //cevap  gelmişse ve hazırsa
        
        setTimeout(()=>{      //asenkron çalıştığını kanıtlamak için bilerek bekletiliyor.   
            if (xhr.status==200){ //Başarılı bir cevap gelmişse
            const employees=JSON.parse(xhr.responseText); //stringi json formayına dönüştür
            console.log("employes:",employees);
            list.innerHTML=""; //bunu yazmazsanız butona bastıkça lissteye eklemey devam eder.
            employees.forEach(employe => {//her kaydı eklemesi için += kullandık.
                list.innerHTML+=`  
                    <tr>
                    <td>${employe.name}</td>
                    <td>${employe.department}</td>
                    <td>${employe.salary}</td>
                    </tr>
                `});
            }
        },5000);
    }
    xhr.open("GET","example.json",true);
    xhr.send();
    list.innerHTML+="<tr><td>getiriliyor</td></tr>";

}