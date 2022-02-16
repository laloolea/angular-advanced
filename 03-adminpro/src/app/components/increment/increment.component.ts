import { Component, Input, Output,EventEmitter, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit {
  
  ngOnInit() {
    this.btnClass=`btn ${this.btnClass}`;
  }
  @Input('value') progress:number= 40;
  @Input() btnClass:string='btn-primary' 

  @Output('value') outputValue: EventEmitter<number> = new EventEmitter();


  changeValue(valor:number){
    if(this.progress>=100 && valor >= 0 ){
      this.outputValue.emit(100);
      return this.progress=100;
    }
    if(this.progress<=0 && valor < 0 ){
      this.outputValue.emit(0);
      return this.progress=0;
    }
    this.outputValue.emit(this.progress+valor);
    return this.progress= this.progress + valor;
  }

  onChange(newValue:number) {
    if(newValue>=100){
      this.progress=100;
    }else if(newValue <= 0 ){
      this.progress=0;
    }else{
      this.progress=newValue;
    }
    this.outputValue.emit(this.progress);
  }

  
}
