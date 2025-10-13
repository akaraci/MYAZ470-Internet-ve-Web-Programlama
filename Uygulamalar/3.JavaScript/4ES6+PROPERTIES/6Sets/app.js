//set veri tipinde 1 değerden sadece 1 tane olabilir.
//Key-value (anahtar-değer) yapısı yoktur, sadece değerleri saklar.

mySet=new Set();
mySet.add(100);
mySet.add(100); //bunu eklemez
mySet.add(3.14);
mySet.add("Ahmet");
mySet.add([1,2,3]);
mySet.add({name:"isim",salary:100});

console.log(mySet);
console.log(mySet.size);

//delete
mySet.delete(100);
console.log(mySet);


//has
console.log(mySet.has(100));
console.log(mySet.has("Ahmet"));
console.log(mySet.has([1,2,3])); //false döner çünkü referans tiptir. adres üzerinden karşılaştırma yapar. Aşağıdaki gibi eklenirse has fonksiyonu true döndürür.
list=[5,6,7];
mySet.add(list);
console.log(mySet.has(list));

console.log("-------")
//foreach
mySet.forEach(value => {
    console.log(value) 
});

//for of
console.log("-------------");
for (const value of mySet) {
    console.log(value) 
}


//--set to array

const array=Array.from(mySet);
console.log("array",array);