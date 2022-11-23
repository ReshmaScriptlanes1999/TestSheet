// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class TestService {
//   constructor() { }
//     //Using any
//     Allquestions: any = [
//       {
//         heading: 'Question: 1',
//         question: 'What can RxJS be used for?',
//         Option: [{ label: 'Server-side' }, { label: 'Browser' }, { label: 'Both' }, { label: 'None' }],
//         RightAnswer: 'Both',
//         userSelected: ''
//       },
//       {
//         heading: 'Question: 2',
//         question: 'AngularJS was developed by which company?',
//         Option: [{ label: 'Facebook' }, { label: 'Angular' }, { label: 'Netfilx' }, { label: 'Google' }],
//         RightAnswer: 'Google',
//         userSelected: ''
//       },
//       {
//         heading: 'Question: 3',
//         question: 'Which decorator is used to make a class a service?',
//         Option: [{ label: 'Injectable' }, { label: 'Component' }, { label: 'Server' }, { label: 'Injector' }],
//         RightAnswer: 'Injectable',
//         userSelected: ''
//       }
//     ]
//     public editDataDetails: any = [];
//     public subject = new Subject<any>();
//     private messageSource = new  BehaviorSubject(this.editDataDetails);
//     currentMessage = this.messageSource.asObservable();
//     changeMessage(message: string) {
//     this.messageSource.next(message)
//     }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class  TestService {
  sheetid = "1jJnV-nsy0KOxtlpUHrT1cRu93MHxZ2kA";
  constructor(private http: HttpClient) { }
  public getdata(): Observable<any> {
    const url =
    `https://docs.google.com/spreadsheets/d/${this.sheetid}/gviz/tq?tqx=out:json`
    console.log("URL", url);
    return this.http.get(url)
  }
}
