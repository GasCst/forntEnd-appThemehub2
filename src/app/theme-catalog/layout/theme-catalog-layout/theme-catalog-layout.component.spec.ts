import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCatalogLayoutComponent } from './theme-catalog-layout.component';

describe('ThemeCatalogLayoutComponent', () => {
  let component: ThemeCatalogLayoutComponent;
  let fixture: ComponentFixture<ThemeCatalogLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeCatalogLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeCatalogLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
