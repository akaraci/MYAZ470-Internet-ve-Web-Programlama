const person1={
    name:"aaaa",
    salary:5000
}

const person2={
    name:"aaaa",
    salary:5000
}

//yukarıdaki şekilde nesne oluşturulabilir ancak bunun yerine bir construcyor method yazılarak aşağıdaki nesne oluşturmak daha efektif olacaltır.


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

p1.showInfos();

// console.log(p1,p2);