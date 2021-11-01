import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  text: String = '';
  constructor() {
    
   }

  ngOnInit(): void {
  }

  chance(){
    if(Math.random() > 0.5){
      this.text = 'ano';
    }
    else {
      this.text = 'ne';
    }
  }



}
