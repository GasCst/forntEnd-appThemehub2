import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDialogComponentComponent } from './cart-dialog-component.component';

describe('CartDialogComponentComponent', () => {
  let component: CartDialogComponentComponent;
  let fixture: ComponentFixture<CartDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
