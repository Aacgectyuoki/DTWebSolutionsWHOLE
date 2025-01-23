import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactTutorialsComponent } from './react-tutorials.component';

describe('ReactTutorialsComponent', () => {
  let component: ReactTutorialsComponent;
  let fixture: ComponentFixture<ReactTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactTutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
