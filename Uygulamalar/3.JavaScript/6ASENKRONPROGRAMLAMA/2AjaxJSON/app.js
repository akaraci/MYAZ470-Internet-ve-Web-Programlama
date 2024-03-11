
document.getElementById("ajax").addEventListener("click",getAllEmployes);

function getAllEmployes(){
    const xhr=new XMLHttpRequest();
    xhr.onload=()=>{ //cevap  gelmişse ve hazırsa
        let list=document.getElementById("employees"); //table body
        if (xhr.status==200){ //Başarılı bir cevap gelmişse
          const employees=JSON.parse(xhr.responseText);
          console.log(employees);
          // list.innerHTML=""; //bunu yazmazsanız butona bastıkça lissteye eklemey devam eder.
          employees.forEach(employe => {//her kaydı eklemesi için += kullandık.
            list.innerHTML+=`  
                <tr>
                 <td>${employe.name}</td>
                 <td>${employe.department}</td>
                 <td>${employe.salary}</td>
                </tr>
             `});
        }
    }

    xhr.open("GET","example.json",true);
    xhr.send();
}
