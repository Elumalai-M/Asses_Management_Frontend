import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../services/vendor.service';
import { vendor } from '../../interfaces/vendor';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrl: './vendorlist.component.css'
})
export class VendorlistComponent implements OnInit {

  displayDialog: boolean = false;
  selectedVendor: vendor | null = null;

  vendorForm!: FormGroup;

  private subscription: Subscription = new Subscription(); 

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

filterVendorData(){
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
    this.selectedVendor = { ...vendorData }; // Set selected vendor data (create a copy)
    this.displayDialog = true; // Show the dialog
    this.blurTable = true; // Blur the table

   
}

saveEditedVendor() {
  // Call your API to save edited vendor details
  // Close the dialog after saving
  if (this.selectedVendor) {
    this.vendorService.saveVendorData(this.selectedVendor).subscribe(
      response => {
        console.log('Successfully saved:', response);
        // Optionally, you can perform additional actions here after saving
        // For example, you can refresh the vendor list or display a success message
        this.displayDialog = false;
        this.blurTable = false;
       this.ngOnInit();
      },
      error => {
        console.error('Error occurred while saving:', error);
        // Optionally, handle the error here
        // For example, you can display an error message to the user
      }
    );
  }
}

onCancelEdit() {
  this.selectedVendor = null; // Clear selected vendor data
  this.displayDialog = false; // Close the dialog
  this.blurTable = false; // Unblur the table
}

onDialogHide() {
  this.blurTable = false;
}

}