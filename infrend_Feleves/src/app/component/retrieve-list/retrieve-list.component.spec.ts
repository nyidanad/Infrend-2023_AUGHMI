import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveListComponent } from './retrieve-list.component';

describe('RetrieveListComponent', () => {
  let component: RetrieveListComponent;
  let fixture: ComponentFixture<RetrieveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrieveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
