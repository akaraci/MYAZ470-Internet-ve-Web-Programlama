class Person{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    //class içinde es6 ile bu şekilde function yazılabilir.
    showInfos(){
        console.log(this.name,this.age,this.salary)
    }
}

p1=new Person("Ahmet",50,5000);
p1.showInfos();
console.log(p1);


//----------------------static metodlar
class Matematik{

    cube(x){
        console.log(x*x*x);
    }

    static square(x){
        console.log(x*x);
    }
}

m1=new Matematik();
m1.cube(5);

//static method doğrudan class ismiyle çağrılabilir
Matematik.square(5);