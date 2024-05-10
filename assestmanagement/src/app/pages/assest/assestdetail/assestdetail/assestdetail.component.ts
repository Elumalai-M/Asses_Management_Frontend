import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssestService } from '../../../../services/assest.service';
import { AssetData } from '../../../../interfaces/AssestData';

@Component({
  selector: 'app-assestdetail',
  templateUrl: './assestdetail.component.html',
  styleUrl: './assestdetail.component.css'
})
export class AssestdetailComponent{
  EmpID!: number;
  assestDataList!: AssetData;
Object: any;
isEditMode = false;
editedAsset: any;

  constructor(private router: Router,
    private assestService:AssestService,
    private route:ActivatedRoute
  ){

  }


   ngOnInit():void{
    this.fetchAssestDetail();
   }
  fetchAssestDetail():void {
    this.EmpID = Number(this.route.snapshot.paramMap.get('asset'));
    console.log("empId",this.EmpID);
    this.assestService.getAssetById(this.EmpID).subscribe(
      (data: AssetData) => {
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
    this.assestService.updateAssetData(this.assestDataList as AssetData).subscribe(
      (response) => {
        console.log('Asset data updated successfully:', response);
        this.router.navigate(['/assest']);

      },
      (error) => {
        console.error('Error updating employee data:', error);
      }
    );
  }
  

  cancelEdit() {
    this.editedAsset = { ...this.assestDataList }; // Reset editedEmployee
    this.isEditMode = false;
  }
}
