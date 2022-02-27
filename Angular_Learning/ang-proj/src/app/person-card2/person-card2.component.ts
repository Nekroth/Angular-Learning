import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../test1/test1.component';

@Component({
  selector: 'app-person-card2',
  templateUrl: './person-card2.component.html',
  styleUrls: ['./person-card2.component.scss']
})
export class PersonCard2Component implements OnInit {

  @Input()
  person?: Person;

  @Output()
  onButtonClick = new EventEmitter<string>();

  @Input()
  message?:string;
  @Output()
  messageChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(): void {
    this.onButtonClick.emit("Emiting from " + this.person?.firstName);
  }

  changeMessage(): void{
    this.message = 'New message from ' + this.person?.firstName;
    this.messageChange.emit(this.message);
  }
}
