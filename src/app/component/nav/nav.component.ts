import { Component, OnInit } from '@angular/core';
import { Bricolage } from 'src/app/bricole';
import { MonserviceService } from 'src/app/services/monservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private monservice:MonserviceService) {}
  bricolecollection;
  bricolage:Bricolage={
    title:'',
    cat:{id:0,name:''},
    ville:{id:0,name:''},
    description:'',
    prix:0,
    type:{id:0,name:''},
    email:'',
    photo:'',
    tele:212


  };
  ngOnInit() {
    this.monservice.getcollection().subscribe(bricole=>{
      this.bricolecollection=bricole;
    })
  }
 deposerBricole(){
  this.monservice.getAddCollection(this.bricolage);
 }

}
