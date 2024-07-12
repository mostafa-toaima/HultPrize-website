import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HultPrizeComponent } from './hult-prize.component';

describe('HultPrizeComponent', () => {
  let component: HultPrizeComponent;
  let fixture: ComponentFixture<HultPrizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HultPrizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HultPrizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
