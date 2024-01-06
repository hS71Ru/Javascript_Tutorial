//methods and properties from base class can be passed into derived class.

class Person{
    constructor(_name, _age){
        this.name = _name
        this.age = _age
    }

    welcome(){
        console.log(`Homecoming ${this.name}`)
    }
}

class Teacher extends Person{
    constructor(_name, _age, _className){
        super(_name, _age)                         //method to inherit the property of extended class i.e person class.
        this.className = _className

    }

    athithi(){
        super.welcome()
    }
}

class Student extends Person{
    constructor(_name, _age, _cgpa){
        super(_name, _age)
        this.cgpa = _cgpa
    }
}

let friend = new Person('sattu biede', 22)

let teacher= new Teacher('satyawan shiv bhola', 1000000000000.0000000 , 'livelife')

let student = new Student('myself', 22, 8.9)



console.log(friend)


console.log(teacher)


console.log(student)

teacher.athithi()
