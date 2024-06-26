import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetviewComponent } from './assetview.component';

describe('AssetviewComponent', () => {
  let component: AssetviewComponent;
  let fixture: ComponentFixture<AssetviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
