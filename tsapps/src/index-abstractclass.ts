abstract class Animal {
    abstract eat(): string
    saveAnimals() {
        return "Animals need to be saved from hunters"
    }
}
class Tiger extends Animal {
    eat(): string {
        return "Tiger eats"
    }
}
let animal = new Tiger();
console.log(animal.eat())
console.log(animal.saveAnimals())