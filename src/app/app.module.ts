import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptlanesheadingComponent } from './component/scriptlanesheading/scriptlanesheading.component';
import { OnlinetestModule } from './page/onlinetest/onlinetest.module';


@NgModule({
  declarations: [
    AppComponent,
    ScriptlanesheadingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnlinetestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
