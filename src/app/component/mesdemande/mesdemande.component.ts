import { Component, OnInit } from '@angular/core';
import { MonserviceService } from 'src/app/services/monservice.service';

@Component({
  selector: 'app-mesdemande',
  templateUrl: './mesdemande.component.html',
  styleUrls: ['./mesdemande.component.css']
})
export class MesdemandeComponent implements OnInit {
  bricolecollection;
  constructor(private monservice:MonserviceService) { }

  ngOnInit() {
    this.monservice.getcollection().subscribe(bricolage=>{
    this.bricolecollection=bricolage;
    }
      )
  }

}
