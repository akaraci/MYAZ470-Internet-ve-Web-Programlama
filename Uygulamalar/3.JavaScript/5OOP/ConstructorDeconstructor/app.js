const person1={
    name:"aaaa",
    salary:5000
}

const person2={
    name:"aaaa",
    salary:5000,
    showInfos:function(){
        console.log("Object Person2=",this.name);
    }
}

person2.showInfos();

//yukarıdaki şekilde nesne oluşturulabilir.
// ancak bunun yerine bir constructor method yazılarak aşağıdaki nesne oluşturmak daha efektif olacaltır.
function Person(name,salary){
    this.name=name;
    this.salary=salary;
    console.log(this);

    this.showInfos=()=>{
        console.log(this.name,this.salary);
    }
}

p1=new Person("aaa",300);
p2=new Person("bbb",6000);
p3=new Person(); 
p4=new Person("ddd");

p1.showInfos(); //nesne new ile oluşturulduğundan this p1'dir. Bu nedenle arrow function this için undefined dönmez. this->p1'dir.

// console.log(p1,p2);