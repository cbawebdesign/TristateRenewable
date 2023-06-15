import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  List : any ={
    title:"WHAT WE DO",
    subtitle : "A New Day for Solar",
    desc : "Find out how you can save thousands of dollars on your annual electric bill at no upfront costs."
  };


  constructor() { }

  ngOnInit() {
  }

}
