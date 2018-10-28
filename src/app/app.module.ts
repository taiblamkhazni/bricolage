import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule,InputsModule, ButtonsModule } from 'angular-bootstrap-md';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {  CarouselModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';
import {MatFormFieldModule,MatInputModule} from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from './../environments/environment';
import {NgxPaginationModule} from 'ngx-pagination';
import {MonserviceService} from './services/monservice.service';





import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './component/home/home.component';
import { OffreComponent } from './component/offre/offre.component';
import { DemandeComponent } from './component/demande/demande.component';
import { DeposerComponent } from './component/deposer/deposer.component';
import { SlideComponent } from './component/slide/slide.component';
import { RechercherComponent } from './component/rechercher/rechercher.component';
import { AllComponent } from './component/all/all.component';
import { ContactComponent } from './component/contact/contact.component';
import { ShowpostComponent } from './component/showpost/showpost.component';
import { FooterComponent } from './component/footer/footer.component';
import { MesoffreComponent } from './component/mesoffre/mesoffre.component';
import { MesdemandeComponent } from './component/mesdemande/mesdemande.component';
import { AppRoutingModule } from './/app-routing.module';
import { TabsComponent } from './component/tabs/tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OffreComponent,
    DemandeComponent,
    DeposerComponent,
    SlideComponent,
    RechercherComponent,
    AllComponent,
    ContactComponent,
    ShowpostComponent,
    FooterComponent,
    MesoffreComponent,
    MesdemandeComponent,
    HomeComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatTabsModule,
    CarouselModule,
    WavesModule,
    CardsFreeModule,
    AppRoutingModule,
    HttpModule,
    MatFormFieldModule,
    InputsModule, 
    ButtonsModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgxPaginationModule
   
  ],
  providers: [MonserviceService],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
