import { Observable } from "rxjs";

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
  }, 1000);
  setTimeout(() => {
    observer.next(users[1]);
    observer.complete();
  }, 3000);
});

const observer = {
  next: (value: any) => console.log(value),
  error: (err: any) => console.error(err),
  complete: () => console.log('completed'),
};
source.subscribe(observer);
