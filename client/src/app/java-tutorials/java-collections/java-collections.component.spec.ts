import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaCollectionsComponent } from './java-collections.component';

describe('JavaCollectionsComponent', () => {
  let component: JavaCollectionsComponent;
  let fixture: ComponentFixture<JavaCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaCollectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
