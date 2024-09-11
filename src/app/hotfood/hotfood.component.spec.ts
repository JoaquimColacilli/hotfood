import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotfoodComponent } from './hotfood.component';

describe('HotfoodComponent', () => {
  let component: HotfoodComponent;
  let fixture: ComponentFixture<HotfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotfoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
