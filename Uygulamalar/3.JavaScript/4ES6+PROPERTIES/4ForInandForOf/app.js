//forin and forof

const person={
    name:"ccccc",
    age:20,
    salary:3000
}

const langs=["Python","C#","Node.js"];

//------for..in------------------------
//forin objelerde key değerlerine ulaşmak ve onun üzerinde value'lara ulaşmak için kullanılır
for (const key in person) {
    console.log(key,":",person[key]);
}

//forin listelerde index değerlerine ve index değerleri üzerinde item'lara ulaşmak için kullanılır.
for (const index in langs) {
    console.log(index,":",langs[index]);
}

//string'de char dizi olduğından for..in dizi gibi davranır.
const ad="Ahmet";
for (const index in ad) {
    console.log(index,":",ad[index]);
}

//----------------------------------

//------------for..of index'e gerek kalmadan direkt elemanlar üzerinde gezinmek için kullanılır.
//--Ancak for..of objeler üzerinde kullanılmaz. sadece dizi ve list üzerinde kullanılır.

for (const value of langs) {
    console.log(value);
}

for (const caharacter of ad) {
    console.log(caharacter);
}
//------------------