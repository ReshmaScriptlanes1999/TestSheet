import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionheadingComponent } from './page/onlinetest/component/questionheading/questionheading.component';
import { OptionsComponent } from './page/onlinetest/component/options/options.component';
import { QuestionsComponent } from './page/onlinetest/component/questions/questions.component';
import { ScriptlanesheadingComponent } from './component/scriptlanesheading/scriptlanesheading.component';
import { OnlinetestComponent } from './page/onlinetest/onlinetest.component';



@NgModule({
  declarations: [
    AppComponent,
    QuestionheadingComponent,
    OptionsComponent,
    QuestionsComponent,
    ScriptlanesheadingComponent,
    OnlinetestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
