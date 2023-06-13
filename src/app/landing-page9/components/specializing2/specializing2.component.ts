import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specializing2',
  templateUrl: './specializing2.component.html'
})
export class Specializing2Component implements OnInit {

  List: any[] = [
    {
      title: 'Sean Hendelman',
      subtitle:'Founder & Chief Executive Officer @ T3 Companies:',
      desc: '',
      // Prior to founding Digital Alpha, Mr. Shrotri was Managing Director of Ciscos Business Acceleration Team, where he focused on identifying and developing opportunities from Cisco’s sales pipeline that require equity financing.',

      href: '#'
    },

    {
      title: 'Gregg Cooper',
      subtitle:'Director- Derivatives Trading',

      desc: 'Corey joined T3 in February 2021.  The areas of focus were operations, business development, and risk management. Corey comes with a background of over 25 years of trading and financial markets experience.  Primarily focused on Futures, Futures Options, Equity and Index Options trading. Corey has risk managed proprietary trading firms, teams of traders, and his traded his own book of business. He was also Chief Risk Officer (CRO) of a non-clearing FCM for two years. His management of complex trading firms focused on FCM interactions, trading technology integration, firm-wide risk management, broker-dealer administration, and business development.  Corey received his bachelor’s degree in history from the University of Illinois at Urbana-Champaign.',
      // href: '#'
    },

    {
      title: 'Corey Fisher',
      subtitle:'Director- Derivatives Trading',

      desc: 'Corey joined T3 in February 2021.  The areas of focus were operations, business development, and risk management. Corey comes with a background of over 25 years of trading and financial markets experience.  Primarily focused on Futures, Futures Options, Equity and Index Options trading. Corey has risk managed proprietary trading firms, teams of traders, and his traded his own book of business. He was also Chief Risk Officer (CRO) of a non-clearing FCM for two years. His management of complex trading firms focused on FCM interactions, trading technology integration, firm-wide risk management, broker-dealer administration, and business development.  Corey received his bachelor’s degree in history from the University of Illinois at Urbana-Champaign.',
      // href: '#'
    },
    {
      title: 'Josh Lefler',
      subtitle:'Deal Partner',

      desc: '',

      href: '#',

    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
