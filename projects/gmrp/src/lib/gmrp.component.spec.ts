import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmrpComponent } from './gmrp.component';

describe('GmrpComponent', () => {
  let component: GmrpComponent;
  let fixture: ComponentFixture<GmrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmrpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
