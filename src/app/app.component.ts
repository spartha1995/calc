import { Component,OnInit  } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  //calculatedData:number;

  constructor(){
  }

   ngOnInit() {
  }

  // getcalculatedData(amount: number) {
  //       this.calculatedData = amount;
  //       console.log(this.calculatedData);
  //   }
}
