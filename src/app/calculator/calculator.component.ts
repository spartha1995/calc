import { Component } from '@angular/core';
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
    selector: 'simple-calculator',
    templateUrl: './calculator.component.html',
    host: {
        '(document:keypress)': 'handleKeyboardEvents($event)'
    }
})


export class CalculatorComponent {
calculatedValue:number;
operation: string ;
  result: string ;
pattern:RegExp;
private regex: RegExp;
isCalcOpen:boolean;

@Output() valueChange = new EventEmitter();

constructor(){
this.operation = '';
this.result = '';
this.calculatedValue =0;
this.pattern = new RegExp("[0-9-+*/.()]");
this.regex= new RegExp(/^[*\-+=\/]{1}$/g);
this.isCalcOpen =false;
}

CalcUseButtonPressed() {
        this.evaluate();
        this.isCalcOpen = false;
        
    }

 valueChanged() { // You can give any function name
        if (!this.calculatedValue) {
            this.calculatedValue = 0;
        }

        if (this.calculatedValue != undefined && this.calculatedValue.toString() != "" && this.calculatedValue != Infinity) {
            this.calculatedValue = this.roundtoTwo(parseFloat(this.calculatedValue.toString()));
        }
        this.valueChange.emit(this.calculatedValue);
        this.operation ='';
    }
  append(element: string){
    this.operation += element;
  }

  evaluate(){
    try {
      this.result = eval(this.operation);

       if (!this.result) {
            this.result = '0';
        }
        this.calculatedValue = +this.result;
        this.valueChanged();
    }
    catch(e) {
      alert('cannot evaluate expression');
    }
  }

  closeCalculator(){
      this.isCalcOpen = false;
  }

  clear(){
    this.operation = '';
  }

   @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        if (String(event.key).match(this.regex)) {
            this.isCalcOpen = true;
        }

    }

    /**
    * round if value two digit
    * @param value: Amount
    */
    private roundtoTwo(value) {
        if (value !== null) {
            return (Math.round((value + 0.00001) * 100) / 100);
        }
    }

}
