import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlinetestRoutingModule } from './onlinetest-routing.module';
import { OnlinetestComponent } from './onlinetest.component';
import { OptionsComponent } from './component/options/options.component';
import { QuestionheadingComponent } from './component/questionheading/questionheading.component';
import { QuestionsComponent } from './component/questions/questions.component';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { AnswerComponent } from './component/answer/answer.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule }   from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    OnlinetestComponent,
    OptionsComponent,
    QuestionheadingComponent,
    QuestionsComponent,
    AnswerComponent,


  ],
  imports: [
    CommonModule,
    OnlinetestRoutingModule,
    MatCardModule,
    NgxPaginationModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule
  ]
})
export class OnlinetestModule { }
