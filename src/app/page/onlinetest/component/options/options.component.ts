import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  ngOnInit(): void {
  }
  @Output() userSelected: EventEmitter<string> = new EventEmitter<string>();
  @Input() optionv: any = [];
  Answered: any = [];
  selected: string = '';
  isShow = false;
  data: any = [];
  value: any;
  favoriteSeason: string | undefined;
  radiobuttonselected(value: any) {
    this.userSelected.emit(value);
  }
  // change(data: any, index: string | number) {
  //   this.optionv[index].userSelected = data;
  // }
  // this.isShow = !this.isShow;
  // this.optionv.data[index].userSelected = data;
  //  this.optionv[1].data[index].userSelected = data;
  //   this.optionv[2].data[index].userSelected = data;
  // change(data: any, index: any) {
  // this.optionv[index].userSelected = data;
  // console.log("userselecteddata", data)
  // console.log("dataa", this.optionv);
  // this.data = this.optionv;
  // console.log("all data", this.data);



}

