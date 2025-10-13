let value;
let numbers=[5,10,15,20,25]
let reference_copynumbers=numbers; //referansı geçer
//tüm verileri kopyala
let copynumbers=numbers.slice(); //referans geçmez. sadece item'lar kopyalanır.

//--sonuna ekler
numbers.push("deneme");
console.log(numbers);
console.log(reference_copynumbers);
console.log(copynumbers)
//-başına ekler
numbers.unshift(3.14);
//15 değerinin indeksi yoksa -1 return
console.log("index:",numbers.indexOf(15));
//--sondan bir değer çıkarır
value=numbers.pop();
console.log("pop value=",value);
console.log("",numbers)
//baştan bir değer çıkarır
numbers.shift();
console.log("",numbers)
//Multi Pop işlemi yapar.ilk parametre start index, ikinci pametre adet.
//1 indisinden itibaren 2 tane pop işlemi.
//parametre verilmezse tümünü kopyalar
const aa=numbers.splice(1,2);
console.log("pops:",aa);

//reverse
numbers.reverse();

//sort
numbers.sort((x,y)=>{
    return x-y; //küçükten büyüğe
});
console.log(numbers);

numbers.sort((x,y)=>{
    return y-x; //büyükten küçüğe
});


console.log("numbers:",numbers);
console.log("reference_copynumbers:",reference_copynumbers);
console.log("copynumbers:",copynumbers);