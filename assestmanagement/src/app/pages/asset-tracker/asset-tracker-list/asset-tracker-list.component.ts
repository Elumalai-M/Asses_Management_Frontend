import { Component, OnInit ,ViewChild,TemplateRef} from '@angular/core';
import { AssetTrackerTableData } from '../../../interfaces/AssetTrackerTableData';
import { Observable, Subscription } from 'rxjs';
import { AssetTrackerService } from '../../../services/asset-tracker.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';



@Component({
  selector: 'app-asset-tracker-list',
  templateUrl: './asset-tracker-list.component.html',
  styleUrl: './asset-tracker-list.component.css',
 
})
export class AssetTrackerListComponent implements OnInit {

  assetTrackerList!: AssetTrackerTableData[];
  assetTrackerFilterDatalist!: AssetTrackerTableData[];
  selectedAssetTrackerData: AssetTrackerTableData | null = null;
  tempAssetTrackerData: AssetTrackerTableData | null = null;
  displayDialog: boolean = false;
  

  private subscription: Subscription = new Subscription(); 
  searchTxt: string = '';
  productDialog: boolean = false;
  blurTable: boolean = false;

  @ViewChild('editAssetTrackerDialog') editAssetTrackerDialog!: TemplateRef<any>;

  constructor(private assetTrackerService: AssetTrackerService,
    private router : Router,
    private dialog: MatDialog,
    private datePipe: DatePipe
   
  ) {}

  ngOnInit(): void {
    this.fetchAssertTrackerListData().subscribe(data => {
      this.assetTrackerList = data;
      this.assetTrackerFilterDatalist = [...this.assetTrackerList];
      console.log("data_test",this.assetTrackerFilterDatalist);
  })
}   

fetchAssertTrackerListData(): Observable<AssetTrackerTableData[]> {
  return this.assetTrackerService.getAssetTrackerListData();
}


filterAssetTrackerData(){
  if (!this.searchTxt.trim()) {
    this.assetTrackerFilterDatalist = [...this.assetTrackerList];
  } else {
    this.assetTrackerFilterDatalist = this.assetTrackerList.filter(assetTracker =>
      assetTracker.assetId?.toLowerCase().includes(this.searchTxt.trim().toLowerCase()) ||
      assetTracker.employeeId?.toLowerCase().includes(this.searchTxt.trim().toLowerCase()) ||
      assetTracker.employeeName?.toLowerCase().includes(this.searchTxt.trim().toLowerCase()) 

    );
  }
}

// openEditDialog(assettrackerData: any) {
//   this.selectedAssetTrackerData = { ...assettrackerData }; // Set selected vendor data (create a copy)
//   this.displayDialog = true; // Show the dialog
//   this.blurTable = true; // Blur the table

 
// }

openEditDialog(assettrackerData: any): void {
  this.selectedAssetTrackerData = assettrackerData;
  this.tempAssetTrackerData = { ...assettrackerData }; // Create a copy for editing


  const dialogRef = this.dialog.open(this.editAssetTrackerDialog);
  this.blurTable = true; 

  dialogRef.afterClosed().subscribe(result => {
    this.selectedAssetTrackerData = null; // Clear selected vendor data
    this.tempAssetTrackerData = null;
     this.displayDialog = false; // Close the dialog
     this.blurTable = false;
  });
}

onCancelEdit() {
  this.selectedAssetTrackerData = null; 
// Clear selected vendor data
  this.displayDialog = false; // Close the dialog
  this.blurTable = false; // Unblur the table
}


onDialogHide() {
  this.blurTable = false;
}

saveEditedVAssetTrackerData() {
  // Call your API to save edited vendor details
  // Close the dialog after saving
  if (this.selectedAssetTrackerData && this.tempAssetTrackerData) {
    Object.assign(this.selectedAssetTrackerData, this.tempAssetTrackerData);
    this.assetTrackerService.updateAssetTrackerDataData(this.selectedAssetTrackerData).subscribe(
      response => {
        console.log('Successfully saved:', response);
        // Optionally, you can perform additional actions here after saving
        // For example, you can refresh the vendor list or display a success message
        this.displayDialog = false;
        this.blurTable = false;
        this.dialog.closeAll();
       this.ngOnInit();
      },
      error => {
        console.error('Error occurred while saving:', error);
      }
    );
  }
}

onDateChange(event: MatDatepickerInputEvent<Date>) {
  if (this.tempAssetTrackerData) {
    this.tempAssetTrackerData.returnDate = this.datePipe.transform(event.value, 'yyyy-MM-dd') || '';
  }
}




}


