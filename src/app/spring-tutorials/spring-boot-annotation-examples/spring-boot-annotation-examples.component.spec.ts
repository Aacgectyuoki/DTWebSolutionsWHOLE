import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBootAnnotationExamplesComponent } from './spring-boot-annotation-examples.component';

describe('SpringBootAnnotationExamplesComponent', () => {
  let component: SpringBootAnnotationExamplesComponent;
  let fixture: ComponentFixture<SpringBootAnnotationExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringBootAnnotationExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringBootAnnotationExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
