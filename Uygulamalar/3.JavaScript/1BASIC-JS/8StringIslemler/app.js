let value;
const firstname="Abdulkadir";
const lastname="Karacı";

value=firstname.concat(" ",lastname);
value=firstname.toLowerCase();
value=lastname.toUpperCase();
value=firstname[0];
value=firstname[firstname.length-1];
value=firstname.indexOf("b");//bulamazzsa -1 döner
value=firstname.charAt(2); //indis 2'deki karakter

//split
const langs="Node.js, Java, C#, Python";
value=langs.split(",");

//replace
value=langs.replace("Python","CSS")

//include
value=langs.toLowerCase().includes("JAva".toLowerCase()) //true or false return

console.log(value);