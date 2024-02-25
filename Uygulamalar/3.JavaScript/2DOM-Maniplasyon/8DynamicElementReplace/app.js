//Replace element
//<h5 class="card-title" id = "tasks-title">Todolar</h5>

const cardbody=document.querySelectorAll(".card-body")[1]; //ikinci cardbody
const newelement=document.createElement("h3");

newelement.className="card-title";
newelement.id="tasks-title";
newelement.textContent="Yeni TODOS";

const oldelement=document.querySelector("#tasks-title");

cardbody.replaceChild(newelement,oldelement);

