import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeStatsComponent } from './joke-stats.component';

describe('JokeStatsComponent', () => {
  let component: JokeStatsComponent;
  let fixture: ComponentFixture<JokeStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
