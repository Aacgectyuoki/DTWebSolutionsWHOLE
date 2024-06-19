import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgresqlTutorialsComponent } from './postgresql-tutorials.component';

describe('PostgresqlTutorialsComponent', () => {
  let component: PostgresqlTutorialsComponent;
  let fixture: ComponentFixture<PostgresqlTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostgresqlTutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgresqlTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
