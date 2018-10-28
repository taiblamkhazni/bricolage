import { Component, OnInit, Output, Input } from '@angular/core';
import { MonserviceService } from 'src/app/services/monservice.service';

@Component({
  selector: 'app-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.css']
})
export class RechercherComponent implements OnInit {
  bricolecollection;
  constructor(private monservice :MonserviceService) {
   }
 
  
  ngOnInit() {
    this.monservice.getcollection().subscribe(
      bricolage=>{
        this.bricolecollection=bricolage;
      }
    )
  }
  
}
