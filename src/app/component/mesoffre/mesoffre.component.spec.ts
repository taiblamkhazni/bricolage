import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesoffreComponent } from './mesoffre.component';

describe('MesoffreComponent', () => {
  let component: MesoffreComponent;
  let fixture: ComponentFixture<MesoffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesoffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
