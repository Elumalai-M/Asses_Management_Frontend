import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVendorDialogComponentComponent } from './edit-vendor-dialog-component.component';

describe('EditVendorDialogComponentComponent', () => {
  let component: EditVendorDialogComponentComponent;
  let fixture: ComponentFixture<EditVendorDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditVendorDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditVendorDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
