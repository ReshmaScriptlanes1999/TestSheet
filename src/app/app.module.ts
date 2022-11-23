import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptlanesheadingComponent } from './component/scriptlanesheading/scriptlanesheading.component';
import { OnlinetestModule } from './page/onlinetest/onlinetest.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, ScriptlanesheadingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnlinetestModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
