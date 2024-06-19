import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaBasicsComponent } from './java-basics.component';

describe('JavaBasicsComponent', () => {
  let component: JavaBasicsComponent;
  let fixture: ComponentFixture<JavaBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
