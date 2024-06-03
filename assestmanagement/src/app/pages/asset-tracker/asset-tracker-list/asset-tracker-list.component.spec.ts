import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTrackerListComponent } from './asset-tracker-list.component';

describe('AssetTrackerListComponent', () => {
  let component: AssetTrackerListComponent;
  let fixture: ComponentFixture<AssetTrackerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetTrackerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetTrackerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
