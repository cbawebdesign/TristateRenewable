import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  List : any ={
    title:"WHAT WE DO",
    subtitle : "High End Hospitality Experts",
    desc : "Become a Restaurant Partner and find qualified On Demand Hospitality Professionals in your city."
  };


  constructor() { }

  ngOnInit() {
  }

}
