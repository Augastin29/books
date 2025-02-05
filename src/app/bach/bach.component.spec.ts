import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachComponent } from './bach.component';

describe('BachComponent', () => {
  let component: BachComponent;
  let fixture: ComponentFixture<BachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BachComponent]
    });
    fixture = TestBed.createComponent(BachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
