import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DemandeComponent } from './component/demande/demande.component';
import { OffreComponent } from './component/offre/offre.component';
import { DeposerComponent } from './component/deposer/deposer.component';
import { ShowpostComponent } from './component/showpost/showpost.component';
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'Demande',component:DemandeComponent},
  {path:'Offre',component:OffreComponent},
  {path:'Deposer',component:DeposerComponent},
  {path:'ShowBricole/:id',component:ShowpostComponent},
  
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
  //declarations: []
})
export class AppRoutingModule { }
