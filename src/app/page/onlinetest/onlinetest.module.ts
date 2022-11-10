import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlinetestRoutingModule } from './onlinetest-routing.module';
import { OnlinetestComponent } from './onlinetest.component';
import { OptionsComponent } from './component/options/options.component';
import { QuestionheadingComponent } from './component/questionheading/questionheading.component';
import { QuestionsComponent } from './component/questions/questions.component';


@NgModule({
  declarations: [
    OnlinetestComponent,
    OptionsComponent,
    QuestionheadingComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    OnlinetestRoutingModule
  ]
})
export class OnlinetestModule { }
