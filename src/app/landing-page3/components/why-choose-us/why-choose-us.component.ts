import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
})
export class WhyChooseUsComponent implements OnInit {

  List : any ={
    title:"WHAT WE DO",
    subtitle : "Trading Professionals",
    desc : "Access to markets technology and experienced professinals. For serious traders who want scale their business. Contact us today to speak with one of our experienced traders."
  };
  constructor() { }

  ngOnInit() {
  }

}
