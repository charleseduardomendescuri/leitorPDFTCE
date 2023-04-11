import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPDFComponent } from './buscar-pdf.component';

describe('BuscarPDFComponent', () => {
  let component: BuscarPDFComponent;
  let fixture: ComponentFixture<BuscarPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPDFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
