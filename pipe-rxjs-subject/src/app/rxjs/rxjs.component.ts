import { Component, OnInit } from '@angular/core';
import { defer, from, fromEvent, fromEventPattern, interval, merge, Observable, of, pipe, throwError, timer } from 'rxjs';
import { buffer, delay, filter, first, map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  ////----------Create Observable
    // const observable = new Observable(function subscribe(observer) {
    //   const id = setTimeout(() => {
    //     observer.next('Hello Rxjs');
    //     observer.complete();
    //   }, 3000);
    //   return function unsubscribe() {
    //     clearTimeout(id);
    //   }
    // });
    
    ////-----Execunting Observables
    // observable.subscribe(val => console.log(val));
    // observable.subscribe(val => console.log(val), null, ()=> console.log("complete"));
    // observable.subscribe({
    //   next: val => console.log(val),
    //   error: err => console.log(err),
    //   complete: () => console.log('complete')
    // })
    

    ////------Unsubcrible-------------
    // const subscription = observable.subscribe({
    //   next: (value) => {
    //     console.log(value);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    //   complete: () => {
    //     console.log('Done');
    //   }
    // });
    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 500)

    // const foo = interval(500);
    // const bar = interval(700);
    // const subscription = foo.subscribe(x => console.log('first: ' + x));
    // const childSub = bar.subscribe(x => console.log('second: ' + x));

    // subscription.add(childSub)    
    // setTimeout(() => {
    // // Unsubscribes BOTH `subscription` and `childSub`
    // subscription.unsubscribe();
    // }, 2000);


  ////---RXJS CREATION OPERATORS
    const observer = {
      next: (val: any) => console.log(val),
      error: (err: any) => console.log(err),
      complete: () => console.log('complete'),
    };

    ////--of 
    // of(1,2,3).subscribe(observer);
    // of([1, 2, 3]).subscribe(observer);
    // of("hello").subscribe(observer);
    // of(true).subscribe(observer);
    // of({age: 19}).subscribe(observer);
    // of(1, 2, 3, 'hello', 'world', { foo: 'bar' }, [4, 5, 6]).subscribe(observer);
    // of(Promise.resolve('hello')).subscribe(observer);
    
    ////--from
    // from(Promise.resolve('hello world')).subscribe(observer);
    // from([1,2,3]).subscribe(observer)
    // from("world").subscribe(observer)

    // const map = new Map();
    // map.set(1, 'hello');
    // map.set(2, 'bye');
    // from(map).subscribe(observer);
    // // output: [1, 'hello'], [2, 'bye']
    // // complete: 'complete'

    // const set = new Set();
    // set.add(1);
    // set.add(2);
    // from(set).subscribe(observer);
    // // output: 1, 2
    // // complete: 'complete'


    ////--- fromEvent
    // fromEvent(document, 'click').subscribe(observer)

    //// --- fromEventPattern
    // fromEventPattern(
    //   (handler) => {
    //     document.addEventListener('click', handler);
    //   },
    //   (handler) => {
    //     document.removeEventListener('click', handler)
    //   }
    // ).subscribe(observer)

    ///--Interval
    // interval(1000).subscribe(observer)


    ///-- Timer
    // timer(1000).subscribe(observer);
    // timer(1000, 1000).subscribe(observer);// delay, chu ki

    //// throwError
    // throwError('an error').subscribe(observer);

    //// defer
    // const random1 =  of(Math.random());
    // random1.subscribe(observer);
    // random1.subscribe(observer);
    // random1.subscribe(observer);
    // const random = defer(() => of(Math.random()));
    // random.subscribe(observer);
    // random.subscribe(observer);
    // random.subscribe(observer);

  ////---RXJS TRANSFORMATION OPERATORS

    const users = [
      {id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662', username: 'tiepphan', firstname: 'tiep', lastname: 'phan'},
      {id: '34784716-019b-4868-86cd-02287e49c2d3', username: 'nartc', firstname: 'chau', lastname: 'tran'},
    ];
  
    const usersVm = users.map(user => {
      return {
        ...user,
        fullname: `${user.firstname} ${user.lastname}`
      }
    });
    // console.log(usersVm)
    // of(users)
    // .pipe(map(data => {
    //   console.log('inside map', data);
    //   return data;
    // }))
    // .subscribe(observer)

    // merge(
    //   of(users[0]).pipe(delay(2000)),
    //   of(users[1]).pipe(delay(4000))
    //   ).pipe(
    //     map(user => ({...user, fullname: `${user.firstname} ${user.lastname}`}))
    //   ).subscribe(observer)

    interface User {
      id: string;
      username: string;
      firstname: string;
      lastname: string;
    }
    
    const source = new Observable<User>((observer) => {
      const users = [
        {id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662', username: 'tiepphan', firstname: 'tiep', lastname: 'phan'},
        {id: '34784716-019b-4868-86cd-02287e49c2d3', username: 'nartc', firstname: 'chau', lastname: 'tran'},
      ];
    
      setTimeout(() => {
        observer.next(users[0]);
      }, 2000);
      setTimeout(() => {
        observer.next(users[1]);
        observer.complete();
      }, 4000);
    });
    
    // source.subscribe(observer);
    //// map
    // source.pipe(
    //   map(user => {
    //     return {
    //       ...user,
    //       fullname: `${user.firstname} ${user.lastname}`
    //     };
    //   })
    // ).subscribe(observer);
    // source.pipe(
    //   map(user => user.id)
    // ).subscribe(observer);

    ////pluck
    // source.pipe(
    //   pluck('id')
    // ).subscribe(observer);
    // const params$ = of({id: 1});
    // const ids = params$.pipe(pluck('id')).subscribe(observer);
    

    //// buffer
    // const clicks = fromEvent(document, 'click');
    // const intervalEvents = interval(1000);
    // const buffered = intervalEvents.pipe(buffer(clicks));
    // buffered.subscribe(x => console.log(x));

    //// FILTER OPERATING
    //// --- first

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(first());
    // result.subscribe(x => console.log(x));
    
    

  }




  
  
}
