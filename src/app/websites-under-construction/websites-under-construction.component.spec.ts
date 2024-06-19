import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitesUnderConstructionComponent } from './websites-under-construction.component';

describe('WebsitesUnderConstructionComponent', () => {
  let component: WebsitesUnderConstructionComponent;
  let fixture: ComponentFixture<WebsitesUnderConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitesUnderConstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitesUnderConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
