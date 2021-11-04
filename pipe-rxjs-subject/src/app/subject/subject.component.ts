import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, from, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, multicast, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    const subject = new Subject<number>();
 
    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });
 
    subject.next(1);
    subject.next(2);
    const observable = from([1, 2, 3]);
    observable.subscribe(subject);
    console.log("---------");
    
    const subject0 = new Subject();

    subject0.subscribe({
      next: v => console.log("observerA: " + v)
    });
    
    subject0.next(1);
    subject0.next(2);
    
    subject0.subscribe({
      next: v => console.log("observerB: " + v)
    });
    
    subject0.next(3);

    console.log("---------")

    //// BehaviorSubject - Luu tru gia tri gan nhat
    const subject1 = new BehaviorSubject(0); // 0 is the initial value

    subject1.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });
    
    subject1.next(1);
    subject1.next(2);
    
    subject1.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });
    
    subject1.next(3);
    console.log("---------");

    // ReplaySubject
    // 1. buffer
    const subject2 = new ReplaySubject(3); // buffer 3 values for new subscribers

    subject2.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });
    
    subject2.next(1);
    subject2.next(2);
    subject2.next(3);
    subject2.next(4);
    
    subject2.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });
    
    subject2.next(5);

    
    // 2. windowTime
    const subject3 = new ReplaySubject(100, 500 /* windowTime */);

    subject3.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });
    
    let i = 1;
    const id = setInterval(() => subject3.next(i++), 200);
    
    setTimeout(() => {
      subject3.subscribe({
        next: (v) => console.log('observerB: ' + v)
      });
    }, 1000);
    
    setTimeout(() => {
      subject3.complete();
      clearInterval(id);
    }, 1500);
    
    console.log("---------");
    // AsyncSubject - Chi emit gia tri cuoi cung
    const subject4 = new AsyncSubject();

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });
    
    subject4.next(1);
    subject4.next(2);
    subject4.next(3);
    subject4.next(4);
    
    subject4.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });
    
    subject4.next(5);
    subject4.complete();

    //// 

  }

}
