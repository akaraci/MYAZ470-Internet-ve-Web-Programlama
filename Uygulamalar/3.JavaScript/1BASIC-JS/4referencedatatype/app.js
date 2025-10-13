//Kendi objemizi ve listemizi oluşturalım
var bilgi=[
    {
        adi:"Abdulkadir",
        meslek:"Öğretim Üyesi",
        kurum:[
                {
                    kurumkodu:1,
                    kurumadi:"Samsun Üniversitesi"
                },
                {
                    kurumkodu:2,
                    kurumadi:"Gazi Üniversitesi"
                }     
            ]
    },
    {
        adi:"Mehmet",
        meslek:"Öğretmen",
        kurum:[
                {
                    kurumkodu:12,
                    kurumadi:"19 Mayıs Lisesi"
                },
                {
                    kurumkodu:22,
                    kurumadi:"Gazi Lisesi"
                }     
            ]
    }
]
console.log(bilgi, "tip=",typeof bilgi);
console.log("Kurum Kodu:",bilgi[0].kurum[0].kurumkodu);
console.log(bilgi[1], typeof bilgi[0].kurum[0]);
console.log("Dizimi?", Array.isArray(bilgi[0].kurum));

//-------Date
var date=new Date();
console.log(date,typeof date);
console.log("Gün:",date.getDate());//Ayın günü
console.log("Ay:",date.getMonth()+1);//Ay (0'dan başlar)
console.log(date.getFullYear());

//----------function
const yaz=function(){
    console.log("Hello Function");
}

yaz();
console.log(typeof yaz);

//--function lambda kullanımı
const yazma=()=>{
    console.log("mello lambda function");
}

yazma();
console.log(typeof yazma);

//-----Referans Geçirme
var l1=[1,2,3,4];
var l2=l1; //referansı geçer
var l3=l1.slice();//verileri kopyalar
l1.push(5); //l2'de değişir aslında refere ettiği yer değişir. l3 değişmez
console.log(l2);
console.log(l3);
