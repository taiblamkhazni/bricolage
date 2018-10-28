import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from '../../../node_modules/rxjs';
import { Bricolage } from '../bricole';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonserviceService {

  bricoleobservable:Observable<Bricolage[]>;
  bricolecollection:AngularFirestoreCollection<Bricolage>;

  constructor(private afs:AngularFirestore) { 

   this.bricolecollection= this.afs.collection('bricole');
  this.bricoleobservable= this.bricolecollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
    const data = a.payload.doc.data() as Bricolage;
    const id = a.payload.doc.id;
    return { id, ...data };
  }))
);
  }
  getcollection(){
    return this.bricoleobservable;
  }
  getAddCollection(annonce:Bricolage){
      this.bricolecollection.add(annonce);
  }
}
