import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selected = [true, false ,false ];
  prevSelected = 0;
  constructor() { }

  ngOnInit() {
  }
  onSelect(element){
    this.selected[this.prevSelected] = false;
    this.selected[element] = false;
    this.prevSelected = element;
  }

}
