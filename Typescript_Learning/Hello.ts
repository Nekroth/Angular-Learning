console.log("Hello");

if(true) {
    var test = 1; //vsude viditelny
    let test2 = 2; //jen lokalne viditelny
    const test3 = 3; //jen lokalne viditelny, read only

    //test3 = 12;
}


test = 2;
console.log(test);

// test2 = 123456;
// test3


// Datove Typy
// - boolean
// - number
// - string

// - enum
// - array
// - tuple

// - object
// - any, void
// - null, undefined

//Zakladni datove typy
let str1: string = 'test';
console.log(str1);
let str2 = 'test2';
let str3 = str2;
//str3 = 1235456

// - ` zpetna uvozovka pokud chceme template string 
console.log(`Hello ${str1}`);

let num1: number = 1234;
let num2: number = 10.34;
let num3: number = -4e4;
console.log(num3);

let bool1: boolean = false;
let bool2: boolean = true;

//Pole
let array1: number[] = [1,2,3];
console.log(array1);

let array2: Array<number> = [4,5,6];

//array2 = ['string'];
let arary3 = array2.concat(1,2,3);

//Tuple
let tuple1: [number, string, boolean] = [1, "Ahoj", true];
//tuple1 = ["Ahoj", 123456]
console.log(tuple1[0]);
tuple1[2] = false;
console.log(tuple1);

// Enum
enum Gender {
    MALE, //0
    FEMALE //1
}

let g1: Gender = Gender.FEMALE;
console.log(g1);

enum Gender2 {
    MALE = 2,
    FEMALE = 4
}
let g2: Gender2 = Gender2.FEMALE;
console.log(g2);

enum Gender3 {
    MALE = 'muz',
    FEMALE = 'zena'
}

let g3: Gender3 = Gender3.FEMALE;
console.log(g3);

//type
type Gender4 = 'M' | 'F'; //union
let g4: Gender4 = 'F'; // custom datovy typ
let g5 = "F"; //string
//g4 = 'AB';
console.log(g4);

type MyTuple = [number, string, boolean];
let tupleArray: Array<MyTuple> = [];

// any
let any1: any = [];
any1 = 12;
any1 = 'text';

//pretypovani
console.log((<string>any1).length);
console.log((any1 as string).length);
console.log(any1.length);

//funkce
function AddNumbers(a: number, b: number): number {
    return a+b;
}
let result: number = AddNumbers(2,4);
console.log(`Result is ${result}`)