import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetmappingdialogComponent } from './assetmappingdialog.component';

describe('AssetmappingdialogComponent', () => {
  let component: AssetmappingdialogComponent;
  let fixture: ComponentFixture<AssetmappingdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetmappingdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetmappingdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
