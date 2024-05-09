import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../services/vendor.service';
import { vendor } from '../../interfaces/vendor';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrl: './vendorlist.component.css'
})
export class VendorlistComponent implements OnInit {

  displayDialog: boolean = false;
  selectedVendor: any;


  searchTxt: string = '';
  productDialog: boolean = false;

  vedorDataList!: vendor[];
  filterDataList!: vendor[];
  vendorslist!:vendor[];
  vendor!:vendor
  submitted: boolean = false;
  selectedVendors!: vendor[] | null;
  blurTable: boolean = false;


  constructor(private vendorService: VendorService,
    private router : Router
  ) {}

  ngOnInit() {
    
       
        this.fetchVendorData().subscribe(data => {
          this.vedorDataList = data;
          this.filterDataList = [...this.vedorDataList];
          console.log("data_test",this.filterDataList);

          
      });
      
      

      // this.statuses = [
      //     { label: 'Active', value: true },
      //     { label: 'Inactive', value: false }
      //   //  { label: 'OUTOFSTOCK', value: 'outofstok' }
      // ];
  }

  openNew() {
    this.router.navigate(['vendorcreate']);
  }

  fetchVendorData(): Observable<vendor[]> {
    return this.vendorService.getVendorListData();
}



  filterAssestData(){
    if (!this.searchTxt.trim()) {
      this.filterDataList = [...this.vedorDataList];
    } else {
      this.filterDataList = this.vedorDataList.filter(vendor =>
        vendor.vendorId?.toLowerCase().includes(this.searchTxt.trim().toLowerCase()) ||
        vendor.vendorName?.toLowerCase().includes(this.searchTxt.trim().toLowerCase()) ||
        vendor.email?.toLowerCase().includes(this.searchTxt.trim().toLowerCase()) 

      );
    }
  }

  openEditDialog(vendorData: any) {
    this.selectedVendor = vendorData; // Set selected vendor data
    this.displayDialog = true; // Show the dialog
    this.blurTable = true;
}

saveEditedVendor() {
  // Call your API to save edited vendor details
  // Close the dialog after saving
  this.displayDialog = false;
  this.blurTable = false;
}

onDialogHide() {
  this.blurTable = false;
}

}