import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBootAnnotationsComponent } from './spring-boot-annotations.component';

describe('SpringBootAnnotationsComponent', () => {
  let component: SpringBootAnnotationsComponent;
  let fixture: ComponentFixture<SpringBootAnnotationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringBootAnnotationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringBootAnnotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
