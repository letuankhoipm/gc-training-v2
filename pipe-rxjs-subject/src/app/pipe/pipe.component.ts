import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  user ={
    name: "Mai",
    age: 21
  }

  currentDate = new Date();

intervals = interval(1000);
addr = {
  address: "Phu My",
  city: "Vung Tau",
  country: "VietNam"
}

users = [
  {
    name: "Tiep Phan",
    age: 30
  },
  {
    name: "Trung Vo",
    age: 28
  },
  {
    name: "Chau Tran",
    age: 10
  },
  {
    name: "Tuan Anh",
    age: 16
  }
];

addUser() {
// this.users = [...this.users, {name: 'new user', age: 30}];
this.users.push({name: 'new user', age: 30 })
}

// formarAddr(addr: any) {
//   return addr.address + " "+ 
//   addr.city + " "+ 
//   addr.country
// }


  constructor() { }

  ngOnInit(): void {
  }

}
