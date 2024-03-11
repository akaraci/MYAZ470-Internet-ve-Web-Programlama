//maps  key---value---python dictionary veri tipine karşılık gelir
let cities=new Map();

cities.set("Samsun",55);
cities.set("Ankara",6);
cities.set("Ordu",52);
console.log(cities.get("Samsun"));

cities.forEach((value,key) => {
    console.log(key,value);
    
});

for (const value of cities) {
    console.log(value);
}


for (const [key,value] of cities) {
    console.log(key,value);
}

//Array to map
const array=[["key1","value1"],["key2","value2"],["key3","value3"]];
const arraytomap=new Map(array);
console.log(arraytomap);

//map to array
newarray=Array.from(arraytomap);
console.log(newarray);

