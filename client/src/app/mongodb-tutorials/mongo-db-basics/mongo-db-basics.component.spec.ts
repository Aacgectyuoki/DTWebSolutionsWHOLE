import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoDbBasicsComponent } from './mongo-db-basics.component';

describe('MongoDbBasicsComponent', () => {
  let component: MongoDbBasicsComponent;
  let fixture: ComponentFixture<MongoDbBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MongoDbBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoDbBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
