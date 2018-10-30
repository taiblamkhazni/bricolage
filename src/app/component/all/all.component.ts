import { Component, OnInit } from '@angular/core';
import { MonserviceService } from 'src/app/services/monservice.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  bricolecollection;
  constructor(private monservice:MonserviceService) {
    
   }

  ngOnInit() {
    debugger;
    this.monservice.getcollection().subscribe(bricolage=>{
      this.bricolecollection=bricolage;
      console.log(this.bricolecollection)
      }
        )
        
  }



}
