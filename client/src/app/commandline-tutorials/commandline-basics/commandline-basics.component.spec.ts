import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandlineBasicsComponent } from './commandline-basics.component';

describe('CommandlineBasicsComponent', () => {
  let component: CommandlineBasicsComponent;
  let fixture: ComponentFixture<CommandlineBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandlineBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandlineBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
