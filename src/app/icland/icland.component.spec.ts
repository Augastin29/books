import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IclandComponent } from './icland.component';

describe('IclandComponent', () => {
  let component: IclandComponent;
  let fixture: ComponentFixture<IclandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IclandComponent]
    });
    fixture = TestBed.createComponent(IclandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
