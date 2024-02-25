
//nesne oluşturuluyor ve export ediliyor
export  const programmer={
    name:"Mustafa Karacı",
    age:30,
    email:"mk@aa.com",
    langs:["python","c#","java script"],
    adress:{ //nesene içinde nesne
            city:"Kastamonu",
            street:"Yeni mahallle"
            },
    work:()=>{ //function
        console.log("Programcı çalışıyor");
    }
}

let value;

value=programmer.email;//genel kullanım
value=programmer["email"]; //bu da aynı
value=programmer.langs[0];
value=programmer.adress.city;
programmer.work();


//object array oluşturma
const backend_developer=[ //list or array
    {name:"aaaaa", age:25}, //object
    {name:"bbbbb", age:30} //object
];

value=backend_developer[0].name;


console.log(value);

// module.exports=programmer;