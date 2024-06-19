import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOnOneServicesComponent } from './one-on-one-services.component';

describe('OneOnOneServicesComponent', () => {
  let component: OneOnOneServicesComponent;
  let fixture: ComponentFixture<OneOnOneServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneOnOneServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOnOneServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
