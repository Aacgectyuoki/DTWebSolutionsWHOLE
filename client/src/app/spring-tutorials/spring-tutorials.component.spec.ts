import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringTutorialsComponent } from './spring-tutorials.component';

describe('SpringTutorialsComponent', () => {
  let component: SpringTutorialsComponent;
  let fixture: ComponentFixture<SpringTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringTutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
