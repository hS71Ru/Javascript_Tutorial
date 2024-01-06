//same name functions & properties called for different objects gives different results
class Pets{
    sound(){
        console.log('pets make diffrent noise')
    }
}

class Dog{
    sound(){
        console.log('dogs barks')
    }
}

class Cat{
    sound(){
        console.log('cats mews')
    }
}

let pet = new Pets()
let bruno = new Dog()
let kitti = new Cat()

bruno.sound()
kitti.sound()
pet.sound()