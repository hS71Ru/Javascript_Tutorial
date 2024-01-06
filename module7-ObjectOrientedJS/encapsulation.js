// function Person(_name, _age){
//     this.name = _name
//     this.age = _age
// }

// let friend = new Person('sattu biede', 22)

// friend.name = 'sattu marde'

// console.log(friend) //o/p-sattu marde


function Person(_name, _age){
        let name = _name
        let age = _age

        this.getName = function(){
            return name
        }

        this.getAge = ()=>{
            return age
        }

    }
    
    let friend = new Person('sattu biede', 22)
    
    friend.name = 'sattu marde'
    
    console.log(friend.getName())  //o/p-sattu biede
    console.log(friend.getAge())
    