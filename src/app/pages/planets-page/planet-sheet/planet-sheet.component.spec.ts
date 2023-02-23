import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetSheetComponent } from './planet-sheet.component';

describe('PlanetSheetComponent', () => {
  let component: PlanetSheetComponent;
  let fixture: ComponentFixture<PlanetSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
