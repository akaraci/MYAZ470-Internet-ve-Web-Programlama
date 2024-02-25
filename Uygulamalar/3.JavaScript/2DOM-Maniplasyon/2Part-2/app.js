let value;

value=document.scripts; //sayfa içinde import edilen java scriptleri verir
value=document.scripts.length;
value=document.scripts[0]

//linkler
value=document.links;
value=document.links[0];
value=document.links[4].getAttribute("class");
value=document.links[4].className;
value=document.links[4].classList; //birden fazla class varsa liste olarak verir.

//---formlar
value=document.forms;
value=document.forms[0];
value=document.forms["form"] //form name'e göre 
value=document.forms[0].getAttribute("id");
value=document.forms[0].id;
value=document.forms[0].method;
value=document.forms[0].action;



console.log(value);