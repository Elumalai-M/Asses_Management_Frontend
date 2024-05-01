import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssestService } from '../../../../services/assest.service';
import { AssestDatas } from '../../../../interfaces/AssestDatas';

@Component({
  selector: 'app-assestdetail',
  templateUrl: './assestdetail.component.html',
  styleUrl: './assestdetail.component.css'
})
export class AssestdetailComponent{
  EmpID!: number;
  assestDataList!: AssestDatas;
Object: any;
isEditMode = false;

  constructor(private router: Router,
    private assestService:AssestService,
    private route:ActivatedRoute
  ){}

   ngOnInit():void{
    this.fetchAssestDetail();
   }
  fetchAssestDetail():void {
    this.EmpID = Number(this.route.snapshot.paramMap.get('asset'));
    console.log("empId",this.EmpID);
    this.assestService.getAssetById(this.EmpID).subscribe(
      (data: AssestDatas) => {
        this.assestDataList = data; // Assign received data to property
        console.log('Asset data:', this.assestDataList);
      },
      (error) => {
        console.error('Error fetching asset:', error);
        // Handle error cases here
      }
    );
  }
  enableEditMode() {
    this.isEditMode = true;
  }
  saveChanges() {
   
  }

  cancelEdit() {
    
  }
}
