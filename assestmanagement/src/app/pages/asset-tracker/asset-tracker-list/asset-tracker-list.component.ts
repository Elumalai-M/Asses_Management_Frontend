import { Component, OnInit } from '@angular/core';
import { AssetTrackerTableData } from '../../../interfaces/AssetTrackerTableData';
import { Observable, Subscription } from 'rxjs';
import { AssetTrackerService } from '../../../services/asset-tracker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset-tracker-list',
  templateUrl: './asset-tracker-list.component.html',
  styleUrl: './asset-tracker-list.component.css'
})
export class AssetTrackerListComponent implements OnInit {

  assetTrackerList!: AssetTrackerTableData[];
  assetTrackerFilterDatalist!: AssetTrackerTableData[];
  selectedAssetTrackerData: AssetTrackerTableData | null = null;
  displayDialog: boolean = false;

  private subscription: Subscription = new Subscription(); 
  searchTxt: string = '';
  productDialog: boolean = false;
  blurTable: boolean = false;

  constructor(private assetTrackerService: AssetTrackerService,
    private router : Router
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

openEditDialog(assettrackerData: any) {
  this.selectedAssetTrackerData = { ...assettrackerData }; // Set selected vendor data (create a copy)
  this.displayDialog = true; // Show the dialog
  this.blurTable = true; // Blur the table

 
}

onCancelEdit() {
  this.selectedAssetTrackerData = null; // Clear selected vendor data
  this.displayDialog = false; // Close the dialog
  this.blurTable = false; // Unblur the table
}


onDialogHide() {
  this.blurTable = false;
}

}


