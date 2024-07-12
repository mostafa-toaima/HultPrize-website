import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestLeadersComponent } from './best-leaders.component';

describe('BestLeadersComponent', () => {
  let component: BestLeadersComponent;
  let fixture: ComponentFixture<BestLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestLeadersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
