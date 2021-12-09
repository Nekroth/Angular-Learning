class Person {

    name: string;
    age: number;

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;
    }

    sayHello(): void {
        console.log(`Hello ${this.name} ${this.age}`);
    }
}

let person1: Person = new Person('Petr',42);
person1.sayHello();
person1.name = 'Pavel';
person1.sayHello();

class Person2 {

    readonly lastName?: string; //jen v konstruktoru pujde nastavit

    constructor(private name: string, public age:number, lastName?:string){
        this.lastName = lastName;
    }
    sayHello(): void {
        console.log(`Hello ${this.name} ${this.age}`);
        console.log('User Language ', this.getLanguague());
    }

    private getLanguague(): string {
        return 'English';
    }

    get fullName(): string {
        return this.name + ' ' + this.lastName;
    }

    set firstName(name: string){
        this.name = name;
    }
}

let person2: Person2 = new Person2('Honza',50);
person2.sayHello();

let person3 = new Person2('Ales',23,'Maly');
// person3.lastName = "test"; - readonly
console.log(person3.lastName);
person3.sayHello();
console.log(person3.fullName);
//person3.name = "test"
person3.firstName = "Robert";
console.log(person3.fullName);

//dedicnost
// Shape -> Shape3D -> Cube
abstract class Shape {

    constructor(readonly name:string){

    }
}
abstract class Shape3D extends Shape {
    abstract getVolume(): number;
}

class Cube extends Shape3D {

    constructor(readonly a: number) {
        super('Cube');
    }

    getVolume(): number {
        return Math.pow(this.a, 3);
    }
}

let cube = new Cube(2);
console.log(cube.name);
console.log(cube.getVolume());

//interfacy
interface PersonInterface {
    firstName: string;
    lastName: string;
}

let person4: PersonInterface = {
    firstName: 'Test',
    lastName: 'lastName'
}

person4.firstName = 'firstName';
console.log(person4.firstName, person4.lastName);

function sayHello(p: PersonInterface) {
    console.log(`Hello ${p.firstName} ${p.lastName}`)
}
sayHello(person4);

let p1: {
    firstName: string,
    lastName:string, 
    age:number
} = {
    firstName: 'Alena',
    lastName: 'Smutna',
    age: 42
}
sayHello(p1);

interface PersonWithAge {
    firstName: string,
    lastName:string, 
    age:number
}

interface Pingable{
    ping(): Boolean;
}

class Server implements Pingable {
    ping() {
        return true;
    }
}

let server = new Server();
console.log(server.ping());

interface PersonWithAge2 extends PersonInterface {
    age?: number;
}

interface CallbackFunction {
    (p1: number, p2: number): number;
}

function testCallback(c: CallbackFunction) :void {
    let result = c(2,6);
    console.log(result);
}

testCallback((a,b) => a + b);
testCallback((a,b) => a + b);
