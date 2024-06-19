import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicdJenkinsComponent } from './cicd-jenkins.component';

describe('CicdJenkinsComponent', () => {
  let component: CicdJenkinsComponent;
  let fixture: ComponentFixture<CicdJenkinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicdJenkinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CicdJenkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
