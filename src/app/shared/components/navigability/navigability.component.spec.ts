import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigabilityComponent } from './navigability.component';

describe('NavigabilityComponent', () => {
  let component: NavigabilityComponent;
  let fixture: ComponentFixture<NavigabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
