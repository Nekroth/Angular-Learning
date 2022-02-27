import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

export interface Person {
  firstName: string,
  lastName: string,
  age?: number
}

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
//export a.k.a muzu to muzu pouzit na vic mist
export class Test1Component implements OnInit {

  people: Array<Person> = [
    {
      firstName: "Aneta",
      lastName: "Vesela",
      age: 30
    },
    {
      firstName: "Bara",
      lastName: "Smutna",
    },
    {
      firstName: "Cecil",
      lastName: "Modry",
      age: 42
    },
    {
      firstName: "Ivana",
      lastName: "Zelena",
    },
    {
      firstName: "Martin",
      lastName: "Test",
      age: 50
    }
  ];
  //pokud pouzivam ze sablony , musi byt public
  myParagraph: string = 'Test paragraph';
  condition: boolean = false;
  counter:number = 0;
  imageURL: string = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstories.wimp.com%2Fwp-content%2Fuploads%2F2020%2F09%2FUntitled-collage-copy-4-1024x536.png&f=1&nofb=1';
  website: string = 'https://www.root.cz';
  parentMessage: string = 'First message';

  constructor() { }

  ngOnInit(): void {
  }

  changeCondition(): void {
    this.condition = !this.condition;
  }

  changeParagraph(): void {
    this.myParagraph = "Changed " + new Date();
  }

  addPerson(): void {
    this.people.push(
      {
        firstName: "A",
        lastName: "B " + (new Date()).toISOString()
      }
    );
  }

  incrementCounter(): void {
    this.counter++;
  }
  processButtonClick(message: string) {
    console.log("event received:", message);
  }

  get color(): string {
    return "red";
  }

  get paragraphClass(): string {
    if(this.condition){
      return "my-class";
    }
    return "my-class2";
  }
}
