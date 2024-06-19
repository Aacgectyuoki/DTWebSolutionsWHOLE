import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcTutorialsComponent } from './vc-tutorials.component';

describe('VcTutorialsComponent', () => {
  let component: VcTutorialsComponent;
  let fixture: ComponentFixture<VcTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcTutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
