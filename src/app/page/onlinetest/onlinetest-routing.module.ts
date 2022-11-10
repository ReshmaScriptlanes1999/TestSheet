import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlinetestComponent } from './onlinetest.component';

const routes: Routes = [
  {
  path:':id', 
  component: OnlinetestComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlinetestRoutingModule { }
