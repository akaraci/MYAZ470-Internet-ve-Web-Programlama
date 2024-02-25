//child elementte yazılan bir event tetiklendiğinde bu event 
//yukarıya doğru parent eventlara kabarcık şeklinde geçer. Bu eventbubling'dir.
//örneğin container parent elementine, ve  cardrow ve cardbody child elementlerine click eventı yazddığınızda 
//cardrow'un click eventı çalıştığında conatiner'ın click eventı da çalışır.
// ya da cardbody'nin click eventı çalıştığında cardrow ve container'ında click eventı çalışır.

// const container=document.querySelector(".container").addEventListener("click",(e)=>{
//     console.log("div container");
// });

// const contcardrow=document.querySelector(".card.row").addEventListener("click",(e)=>{
//     console.log("Card Row");
// });

// const cardbody=document.querySelectorAll(".card-body")[1].addEventListener("click",(e)=>{
//     console.log("Card Body");
// });


//EventCapturing veya Delegation
//Bir parent elemente bir event atadığınızda altındaki child elementlerde de 
//bu olay tetiklendiğinde parent'ın eventıda tetiklenmekteydi. Bunu engellemek için
//ilgili eventın hangi element de tetiklendiğini elde edebiliriz. İşte bu eventcapturing'dir.

const cardbody=document.querySelectorAll(".card-body")[1].addEventListener("click",run);

function run(e){
    console.log(e.target);
    //class="fa fa-remove" olan tüm li elementlere silme otomatik ekelniyor
    if (e.target.className=="fa fa-remove"){
        console.log("List Item Sil");
        
        /*
         <li class="list-group-item d-flex justify-content-between">
            Todo 1
            <a href = "#" class ="delete-item">
              target bu eleman ancak silinecek eleman li bu nedenle iki
              parent üste çıkmak gerekiyor.  
              <i class = "fa fa-remove"></i>//target
            </a>
         </li>
        */
        e.target.parentElement.parentElement.remove();
        alert("delete success");
    }

    if (e.target.id=="filter"){
        console.log("Filtreleme yap")
    }

    if (e.target.id=="clear-todos"){
        console.log("All todos clear");
    }

}