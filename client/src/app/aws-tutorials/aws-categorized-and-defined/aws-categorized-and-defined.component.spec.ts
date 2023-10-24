import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsCategorizedAndDefinedComponent } from './aws-categorized-and-defined.component';

describe('AwsCategorizedAndDefinedComponent', () => {
  let component: AwsCategorizedAndDefinedComponent;
  let fixture: ComponentFixture<AwsCategorizedAndDefinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsCategorizedAndDefinedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsCategorizedAndDefinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
