import { Component, OnInit,Output,  EventEmitter } from '@angular/core';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  userSelected: any;
  constructor() { }

  ngOnInit(): void {
  }

}
