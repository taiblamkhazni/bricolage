import { Component, OnInit } from '@angular/core';
import { MonserviceService } from 'src/app/services/monservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bricolecollection;
  constructor(private monservice :MonserviceService) {
    
    
   }

  ngOnInit() {
    this.monservice.getcollection().subscribe(
      bricolage=>{
        this.bricolecollection=bricolage
      }
    )
   }
   
    



}
