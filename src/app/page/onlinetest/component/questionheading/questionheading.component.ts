import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questionheading',
  templateUrl: './questionheading.component.html',
  styleUrls: ['./questionheading.component.css']
})
export class QuestionheadingComponent {

  @Input() headingv: any | undefined;

}
