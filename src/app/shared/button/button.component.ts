import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input('size')
  size='S'; //S|M|L
  @Input('shade')
  shade='W';//D|L|NA
  @Input('animation')
  animation='C'; //F|C

  @Input('name')
  name=''
  constructor(){}
  ngOnInit():void {

  }
  
}
