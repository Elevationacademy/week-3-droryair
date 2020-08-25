// SPOT CHECK 1

class Animal {
    constructor(name){
        this.name = name
    }
}

const dog = new Animal("goodBoy")
console.log(dog)


//SPOT CHECK 2
 class Human{
     constructor(name,age,isFriendly){
        this.name = name
        this.age = age
        this.isFriendly = isFriendly
     }

    introduce(person){
        if(this.isFriendly){
        console.log(`Hi! my name is ${this.name}, I am ${this.age} years old, and I love people!`)
        }else{
            console.log(`Hi! my name is ${this.name}, I am ${this.age} years old, And I don't like people.`)

        }
    }
 }

 const person = new Human("Bob", 38, true)
 person.introduce()


 // SPOT CHECK 3

 class Vehicle{
    constructor(x,y,speed, fuel){
        this.x = x
        this.y = y
        this._speed = speed
        this._fuel = fuel
        this.array = []
        Vehicle.carsSold ++
    }
    static getInfo(){
        console.log("Cars are great")
        console.log(this.carsSold)
    }

    static calculateMoney(){
        let money = this.carsSold * 30000
        console.log(money)
    }

    set speed(speed){
        if(speed<0){
           alert("speed must be positive")
        }else{
        this._speed = speed
        }
    }
    get speed(){
        return this._speed
    }

    set fuel(fuel){
        if (fuel<0 || fuel > 150){
            alert("Fuel must be positive, and less than 150")
        } else{
            this._fuel = fuel
        }
    }
    get fuel(){
        return this._fuel
    }

}


Vehicle.carsSold = 0
 const v1 = new Vehicle(1,2,200)
 const v2 = new Vehicle()
 v2.x = 2
 v2.y = 3
 v2.speed = 2
 v2.fuel = 149
 console.log("fuel",v2.fuel)
 console.log("speed",v2.speed)
 Vehicle.getInfo()
 Vehicle.calculateMoney()
 console.log("v2",v2)