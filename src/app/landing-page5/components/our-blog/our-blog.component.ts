import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html'
})
export class OurBlogComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Digital Alpha',
    subTitle: 'Press',
    desc:'It is a long established fact that a reader will be distracted'
  };

  navList: any[] = [
    {
      id: 'tab-software-development',
      title: 'Professional Trading',
      sub_title:"Choose Your Software Development Service",
      desc:"Test Copy",
      active: true,
      chkList: ['Professional Software ','Professional Consulting Services','24/7 Support Help Center','Customer Service & Operations','There are many variations of passages.']
    },
    {
      id: 'tab-application-services',
      title: 'Application Services',
      sub_title:"Choose Your Application Service",
      desc:"Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
      chkList: ['Advance Advisory Team','Professional Consulting Services','24/7 Support Help Center','Customer Service & Operations','There are many variations of passages.']
    },
    {
      id: 'tab-data-analytics',
      title: 'Data Analytics',
      sub_title:"Choose Your Data Analytics Service",
      desc:"Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
      chkList: ['Advance Advisory Team','Professional Consulting Services','24/7 Support Help Center','Customer Service & Operations','There are many variations of passages.']
    },
    {
      id: 'tab-help-desk-services',
      title: 'Help Desk Services',
      sub_title:"Choose Your Help Desk Service",
      desc:"Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
      chkList: ['Advance Advisory Team','Professional Consulting Services','24/7 Support Help Center','Customer Service & Operations','There are many variations of passages.']
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
