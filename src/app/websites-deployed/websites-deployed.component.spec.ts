import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitesDeployedComponent } from './websites-deployed.component';

describe('WebsitesDeployedComponent', () => {
  let component: WebsitesDeployedComponent;
  let fixture: ComponentFixture<WebsitesDeployedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitesDeployedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitesDeployedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
