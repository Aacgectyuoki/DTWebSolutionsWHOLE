import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroToJavaComponent } from './intro-to-java.component';

describe('IntroToJavaComponent', () => {
  let component: IntroToJavaComponent;
  let fixture: ComponentFixture<IntroToJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroToJavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroToJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
