//spread-yayma operetörü

const langs=["Python","C#","Node.js","C++"]

console.log(langs[0],langs[1],langs[2],langs[3]);
console.log(...langs); //spread operaörü. Yukarıdaki kodla aynı görevi görür.

//-----------------------

// const langs2=["Asp.net","Android",langs[0],langs[1],langs[2],langs[3]];
const langs2=["Asp.net","Android",...langs]; //spread operator. Bir önceki satırla aynı işi yapar.
console.log(langs2);

//----------------------

const numbers=[1,2,3,4,5,6,7];
const[a,b,...numbers2]=numbers;
console.log(a,b,numbers2); //a=1, b=2, numbers2=[3,4,5,6,7]

//---------------------------

const addNumbers=(a,b,c)=>{console.log(a+b+c);}

const num=[1,2,3,4];
addNumbers(num[0],num[1],num[2]);//6
addNumbers(...num); //6
