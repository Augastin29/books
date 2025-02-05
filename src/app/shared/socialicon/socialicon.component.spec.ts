import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialiconComponent } from './socialicon.component';

describe('SocialiconComponent', () => {
  let component: SocialiconComponent;
  let fixture: ComponentFixture<SocialiconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialiconComponent]
    });
    fixture = TestBed.createComponent(SocialiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
