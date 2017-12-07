import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAidsComponent } from './firstAids.component';

describe('FirstAidsComponent', () => {
  let component: FirstAidsComponent;
  let fixture: ComponentFixture<FirstAidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
