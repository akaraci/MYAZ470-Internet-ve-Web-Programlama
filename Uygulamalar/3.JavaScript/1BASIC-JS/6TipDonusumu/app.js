let value;

//stringe çevirme
value=String(123);
value=String(3.14)
value=String(true);
value=String(function yaz(){console.log("deneme")});
value=String([1,2,3,4,5]);

value=(10).toString();
value=(3.14).toString();
console.log(value);


//Sayılara çevirme
value=Number("123");
value=Number(null); //0 döner
value=Number(undefined); //NaN
value=parseInt("3.14"); //3
value=parseFloat("3.567");//3.14

console.log(value);