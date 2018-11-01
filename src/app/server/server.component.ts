import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    counter = 0;
    isLogin = false;
    userName: string;
    students: Student[] = [new Student('Bill Gates', 'Computer Science'),
                           new Student('Steve Jobs', 'Computer Science'),
                           new Student('Elon Musk', 'Computer Science')];

    counterPlus() {
     this.counter ++;
    }

    resetCounter() {
      this.counter = 0;
    }

    login() {
      this.isLogin = true;
    }

    signOut() {
      this.isLogin = false;
    }
}
