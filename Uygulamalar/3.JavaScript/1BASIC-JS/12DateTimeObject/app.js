
let value;


const now=new Date();
console.log(now);

//manual date
const date1=new Date("03/25/1990");
console.log(date1);

value=now.getMonth();//ylın kaçıncı ayı 0'dan başlar.
value=now.getDate();//ayın günü

const daynames=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
value=date1.getDay();//Haftanın kaçıncı günü. pazar->0 ile başlar.
console.log(daynames[value]);

//Saat
value=now.getHours();
value=now.getMinutes();
value=now.getSeconds();
value=now.getMilliseconds();

//set of date
date1.setMonth(4); //mayıs
date1.setDate(10); 
date1.setFullYear(2025);
value=date1;


console.log(value);
