import { Component, Input, OnInit,Output, Inject, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent{


  @Input()
  get parent_msg(): string { return this._parent_msg; }
  set parent_msg(parent_msg: string) {
    this._parent_msg = (parent_msg && parent_msg.trim()) || '<no parent_msg set>';
  }
  private _parent_msg = '';
  private _name = 'Ali';
  get name(): string { return this._name; }
  
  clicked : boolean = false;
  @Output() sent_msg = new EventEmitter<boolean>();
  @Output() resetted = new EventEmitter<boolean>();

  send_msg(isGood:boolean){
    this.reseted = false;
    this.sent_msg.emit(isGood);
    this.clicked = true; 
  }  
  @Output() reseted : boolean = false; 
  reset() {
    this.reseted = true;
    this.clicked = false;
    this.resetted.emit(true);
  }
  /*
  @Output()
  child =this;

  constructor(@Inject(String) public name:string){
    this._name = name;
  }
  */

}
