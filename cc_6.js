//Create a base class 
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe(){
        return `${this.name} works in the ${this.department} department`
    }
}

//Create a subclass 
class Manager extends Employee{
    constructor(name, department, teamSize) {
        super(name, department)
    }
    describe(){
        return ` ${this.name} manages ${this.teamSize} employees in the ${this.department} department`
    }
}

//Create new employee and new manager
let employees = [
    new Employee("Sally", "Finance"),
    new Employee("Bob","Marketing"),
    new Employee("Patrick", "Human Resources")
]
for (const employee of employees) {
    console.log(employee.describe())
}

let managers = [
    new Manager ("Alex","IT", 10),
    new Manager ("James", "Accounting", 7),
    new Manager ("Laura", "Engineering", 13)
]
for (const manager of managers) {
    console.log(manager.describe())
}

//Create a class with employees property
class Company {
    constructor(employees) {
        this.employees = [];
    }
    addEmployee(employee){
        this.employees.push(employee);
    }
    listEmployees(){
        console.log(this.employees);
    }
}

//Instantiate a Company object
let myCompany = new Company();
for (const employee of employees) {
    myCompany.addEmployee(employee);
    
}

for (const manager of managers) {
    myCompany.addEmployee(manager);
    
}

myCompany.listEmployees();
