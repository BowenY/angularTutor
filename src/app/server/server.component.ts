import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    counter = 0;
    isSub = false;
    isClr = true;
    isValid = true;
    isOORange = true;
    isInRange = false;
    isOOMenu = true;

    chicken = false;
    beef = false;
    shrimp = false;
    fish = false;
    rice = false;
    noodle = false;
    veggie = false;



    foodChoice: boolean[] = [this.chicken, this.beef, this.shrimp, this.fish, this.rice, this.noodle, this.veggie];
    foodName: string[] = ['Chicken', 'Beef', 'Shrimp', 'Fish fillet', 'Rice', 'Noodle', 'Veggie'];
    foodRst: string[] = [];

    dishName: string;

    submitOrder() {
      this.isSub = true;
      this.isClr = false;
      this.foodRst = [];
      this.counter = 0;
      this.foodChoice = [this.chicken, this.beef, this.shrimp, this.fish, this.rice, this.noodle, this.veggie];
      for (let i in this.foodChoice) {
        if (this.foodChoice[i] === true) {
          this.foodRst.push(this.foodName[i]);
          this.counter ++;
        }
      }
      console.log(this.counter);
      this.validateNum();
      this.isInRange = !this.isOORange;
      this.validateMenu();
      this.validateRst();
    }

    validateNum() {
      this.isOORange = false;
      if ((this.counter < 3) || (this.counter > 4)) {
        this.isOORange = true;
      }
    }

    validateMenu() {
      this.isOOMenu = false;
      if((this.foodRst.length === 3) && (this.fish && this.shrimp && this.rice))
      {
        this.dishName = 'Seafood Fried Rice';
      }
      else if ((this.foodRst.length === 3) && (this.beef && this.chicken && this.rice))
      {
        this.dishName = 'Special Fried Rice';
      }
      else if((this.foodRst.length === 3) && (this.fish && this.shrimp && this.noodle))
      {
        this.dishName = 'Seafood Noodle';
      }
      else if ((this.foodRst.length === 3) && (this.beef && this.chicken && this.noodle))
      {
        this.dishName = 'Special Noodle';
      }
      else if ((this.foodRst.length === 4) && (this.beef && this.chicken && this.rice && this.noodle))
      {
        this.dishName = 'Energy Master';
      }
      else {
        this.isOOMenu = true;
      }
    }




    validateRst() {
        if((this.isOOMenu === false) && (this.isOORange === false) ) {
          this.isValid = true;
        } else {
          this.isValid = false;
        }
    }


    clearOrder() {
      this.isSub = false;
      this.isClr = true;
    }
}
