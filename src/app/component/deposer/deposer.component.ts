import { Component, OnInit } from '@angular/core';
import { MonserviceService } from 'src/app/services/monservice.service';
import { Bricolage } from 'src/app/bricole';

@Component({
  selector: 'app-deposer',
  templateUrl: './deposer.component.html',
  styleUrls: ['./deposer.component.css']
})
export class DeposerComponent implements OnInit {

  constructor(private monservice:MonserviceService) {
  }
  bricolecollection;
  bricolage:Bricolage={
    title:'',
    cat:{id:0,name:''},
    ville:{id:0,name:''},
    description:'',
    prix:0,
    type:'',
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
