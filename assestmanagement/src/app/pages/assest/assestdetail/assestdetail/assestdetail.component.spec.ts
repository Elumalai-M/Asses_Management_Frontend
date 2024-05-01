import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssestdetailComponent } from './assestdetail.component';

describe('AssestdetailComponent', () => {
  let component: AssestdetailComponent;
  let fixture: ComponentFixture<AssestdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssestdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssestdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
