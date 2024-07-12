import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestMembersComponent } from './best-members.component';

describe('BestMembersComponent', () => {
  let component: BestMembersComponent;
  let fixture: ComponentFixture<BestMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
