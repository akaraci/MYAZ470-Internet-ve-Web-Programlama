class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    //class içinde es6 ile bu şekilde function yazılabilir.
    showInfos(){
        console.log("\nİsim:",this.name,"\nYaş:",this.age)
    }
}

class Employee extends Person{
    constructor(name,age,salary){

        super(name,age); //base class'ın contructor methodu çarğılmak zorundadır. 
        this.salary=salary;
    }
    //method override
    showInfos(){
        console.log("\nİsim:",this.name,"\nYaş:",this.age,"\nSalary:",this.salary)
    }

    raiseSalary(amount){
        this.salary+=amount;
    }
}

emp1=new Employee("Ahmet",25,60000);
emp1.showInfos();
emp1.raiseSalary(500);
emp1.showInfos();



