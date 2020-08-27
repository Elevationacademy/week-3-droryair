// // SPOT CHECK
// class ZooManager{
//     // responsible for managing all of the zoo-related tasks:
//     // add animal (newborn or purchased)
//     // remove animal (she dead)
//     // 
// }

// class Animal1{
//     //some sort of animal. expecting to have many classes of this type.
// }



//

class LuxuryFeeder {
    getFood(animalType) {
        if (animalType == "lion") {
            return "chia seeds"
        }
        if (animalType == "elephant") {
            return "peanuts"
        }

        return "fancy scraps"
    }
}

class CheapFeeder {
    getFood(animalType) {
        return "scraps"
    }
}


class Animal {
    constructor(name, type, feeder) {
        this.name = name
        this.type = type
        this.feeder = feeder
    }

    _consume(food) {
        console.log("Just consumed " + food + ". Feels good.")
    }

    eat() {
        const food = this.feeder.getFood(this.type)
        this._consume(food)
    }
}


const luxuryFeeder = new LuxuryFeeder()
const cheapFeeder = new CheapFeeder()
weArePoor = false
let relevantFeeder


if(weArePoor){
    relevantFeeder = cheapFeeder
} else{
    relevantFeeder = luxuryFeeder
}

console.log(relevantFeeder)
const ani = new Animal("bob","babboon", relevantFeeder)
ani.eat()