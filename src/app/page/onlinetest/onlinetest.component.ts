import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestService } from './service/test.service';
@Component({
  selector: 'app-onlinetest',
  templateUrl: './onlinetest.component.html',
  styleUrls: ['./onlinetest.component.css']
})
export class OnlinetestComponent implements OnInit {
  productData: any;
  Allrequiredata: any;
  product: any;
  value: any;
  positive: any = 0;
  negative: any = 0;
  notattempt: any = 0;
  reactiveForm: FormGroup | undefined;
  selected: string = '';
  message: string | undefined;
 //RightAnswer: any;
  userSelected: any;
  totalMark: any = [];
  N: any;
  n: any;
  ExcelData: any;
  total: any = 0;
  correctans: any = 0;
  Allquestions: any = [
    {
      heading: 'Question: 1',
      question: 'What can RxJS be used for?',
      Option: [{ label: 'Server-side' }, { label: 'Browser' }, { label: 'Both' }, { label: 'None' }],
      RightAnswer: 'Both',
      userSelected: ''
    },
    {
      heading: 'Question: 2',
      question: 'AngularJS was developed by which company?',
      Option: [{ label: 'Facebook' }, { label: 'Angular' }, { label: 'Netfilx' }, { label: 'Google' }],
      RightAnswer: 'Google',
      userSelected: ''
    },
    {
      heading: 'Question: 3',
      question: 'Which decorator is used to make a class a service?',
      Option: [{ label: 'Injectable' }, { label: 'Component' }, { label: 'Server' }, { label: 'Injector' }],
      RightAnswer: 'Injector',
      userSelected: ''
    }
  ]
  routeData: any;
  d: any;
  rowdata: any;
  json: any;
  constructor(private csv: TestService , private http: HttpClient, private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.csv.getdata().subscribe((res: any) => {
      console.log("res", res)
      this.productData = this.productData.split("*/")[1]
      console.log("exel data:", this.productData)
    }, ((err: any) => {

      console.log("err", err.error.text);
      this.productData = err.error.text;
      var from = this.productData.indexOf("{");
      var to = this.productData.lastIndexOf("}") + 1;

      var jsonText = this.productData.slice(from, to);

      var parsedText = JSON.parse(jsonText);
      console.log("parsedText", parsedText)
      //this.Allrequiredata=JSON.stringify(parsedText);
      this.Allrequiredata = parsedText;
      console.log(this.Allrequiredata);
      //alert(JSON.stringify(this.Allrequiredata));

      for(let d in this.Allrequiredata.table.rows){

        console.log("row data", this.Allrequiredata.table.rows);
        //alert(JSON.stringify(this.Allrequiredata.table.rows));
this.json=this.Allrequiredata.table.rows;
alert(JSON.parse(this.json))
        // this.rowdata=this.Allrequiredata.table.rows|JSON
        // this.json = this.cleanString(this.Allrequiredata);
        // console.log("ddddd",JSON.parse(this.json));

       // this.json=JSON.parse(this.Allrequiredata.table.rows);
      //  console.log("json data", this.json);

          }

    }))
    this.routeData = this.route.snapshot;
    console.log("Route data", this.routeData);




  }




//   cleanString(str: string) {
//     str = str.replace('"[', '[');
//     str = str.replace(']"', ']');
//   return str;
// }



  // this.userSelected1.push(userSelected);
  receiveMessage($event: string | undefined) {
    this.message = $event
  }
  radio(event: any) {
    this.selected = event.target.value;
  }
  submit() {
    alert("hello");
  }
  clearForm = (form: any) => {
    form.reset();
    form.submitted = false;
  }
  radiobuttonselected(value: any, index: number) {
    this.product = value;
    this.Allquestions[index].userSelected = value
    console.log("data", this.product);
    // console.log("userselected",this.userSelected);

  }

  marks1() {
    this.n = this.Allquestions.length;
    console.log("number", this.n);

// for(let data of this.Allquestions)
// {
//   console.log(data);

// }
    // this.ExcelData = [this.product].map((res) => ({ ...res, userSelected: "" }));
    //const marks= this.product.map()
     for (let i = 0; i < this.n; i++) {

      if(this.Allquestions[i].userSelected==0){
        alert("Not attend any Question")
        this.total =this.total;
      }
      else if (this.Allquestions[i].RightAnswer == this.Allquestions[i].userSelected) {
       this.total = this.total + 3;
      }
      else{
        this.total=this.total-1;

      }
      console.log("totalMark", this.total);
  }

  }

  disable(){
    const isDisable = false;
    const filter = this.Allquestions.some((item: { userSelected: string; }) => item.userSelected === '');
    return filter;
  }
  // marks() {

  //   for (let i = 0; i < this.N; i++) {

      // for not attempt score + 0
      /* if (this.product[i] == 0){
           this.notattempt++;

           console.log(this.notattempt);
       }*/
      // for each correct answer score + 3
      // if (this.Allquestions.RightAnswer[i] == this.product[i]) {
      //   //this.positive++;
      //   this.total = this.positive++;
      //   console.log("dataaas", this.total);

      // }
      // for each wrong answer score - 1
      /* else  (this.RightAnswer[i] != this.product[i])
            this.negative;
    }*/

      // calculate total marks
  //     this.totalMark = (this.positive * 3) + (this.negative * -1);
  //     console.log("totalmarks", this.totalMark);

  //   //  this.RightAnswer = ['Both', 'Google', 'Injectable'];
  //     this.product = [];
  //   //  this.N = this.RightAnswer.length;

  //   }

  // }
}
// Driver code
// var answerKey = [ 1, 2, 3, 4, 1 ];
// var studentAnswer = [ 1, 2, 3, 4, 0 ];
// var N = answerKey.length;
// document.write( markingScheme(N, answerKey, studentAnswer));

//}




      // page: any;

  // handlePageChange(e: any) {
  //   this.page = e;
  // }




