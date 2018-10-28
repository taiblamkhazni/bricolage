import { Component, OnInit } from '@angular/core';
import { MonserviceService } from 'src/app/services/monservice.service';

@Component({
  selector: 'app-mesoffre',
  templateUrl: './mesoffre.component.html',
  styleUrls: ['./mesoffre.component.css']
})
export class MesoffreComponent implements OnInit {
  bricolecollection;
  constructor(private monservice:MonserviceService) { }

  ngOnInit() {
    this.monservice.getcollection().subscribe(bricolage=>{
    this.bricolecollection=bricolage;
    }
      )
  }

}
