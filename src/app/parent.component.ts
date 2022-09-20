import { Component,Input,Inject } from '@angular/core';
import { HeroChildComponent } from './hero-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //reference the html template path
  //template: `<h1>Hello World!</h1>
    //         <h2>Oh i forget, Welcome</h2>  
      //    `, //Or direct embedded html template, But Can't have both
  styleUrls: ['./app.component.css']  //same is for CSS
})
export class AppComponent {
  @Input()
  child !: HeroChildComponent;
  @Input()
  reseted !: boolean;

  sendMsg(good : boolean){
    if(good) this.parent_msg = this.good_msg;
    else  this.parent_msg = this.bad_msg;
  }

  reset(reset:boolean){
    this.parent_msg = "No messages";
  }

  good_msg = 'انا بابا يالا';
  bad_msg = "";
  parent_msg = this.good_msg;

  childs : HeroChildComponent[] = [new HeroChildComponent(),] ; //new HeroChildComponent()];
  constructor(){
    this.parent_msg = 'No messages';
  }
}
