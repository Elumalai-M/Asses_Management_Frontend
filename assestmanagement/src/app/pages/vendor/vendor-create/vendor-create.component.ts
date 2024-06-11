import { Component } from '@angular/core';

import { vendor } from '../../../interfaces/vendor';
import { VendorService } from '../../../services/vendor.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrl: './vendor-create.component.css'
})
export class VendorCreateComponent {

  private subscription: Subscription = new Subscription();    
  vendorForm: FormGroup;
  vendorData: vendor = {
    vendorId: '',
    vendorName: ''
  };

  constructor(private fb: FormBuilder, private vendorService: VendorService, private router : Router, public dialogRef: MatDialogRef<VendorCreateComponent>) {
    this.vendorForm = this.fb.group({
      vendorId: [''],
      vendorName: [''],
      email: [''],
      poc: [''],
      contactNumber: [''],
      status: [true]
    });
  }

  onSubmit() {
    this.vendorData = this.vendorForm.value; // Assigning form values to vendor object
    console.log(this.vendorData);
    // You can perform further actions here like sending the form data to the server

    this.subscription.add(
      this.vendorService.saveVendorData(this.vendorData).subscribe()
    );
    this.dialogRef.close(true);
    this.router.navigate(['vendorlist']);
   
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}


