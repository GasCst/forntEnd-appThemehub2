import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerThemeComponent } from './list-customer-theme.component';

describe('ListCustomerThemeComponent', () => {
  let component: ListCustomerThemeComponent;
  let fixture: ComponentFixture<ListCustomerThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCustomerThemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCustomerThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
