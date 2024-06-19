import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBootApplicationArchitectureComponent } from './spring-boot-application-architecture.component';

describe('SpringBootApplicationArchitectureComponent', () => {
  let component: SpringBootApplicationArchitectureComponent;
  let fixture: ComponentFixture<SpringBootApplicationArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringBootApplicationArchitectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringBootApplicationArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
