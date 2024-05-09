
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-vendor-dialog-component',
  templateUrl: './edit-vendor-dialog-component.component.html',
  styleUrl: './edit-vendor-dialog-component.component.css'
})
export class EditVendorDialogComponentComponent {

  @Input() displayDialog!: boolean;
  @Input() vendor: any; // Pass the vendor object to edit
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onHide: EventEmitter<any> = new EventEmitter();

  save() {
    // Call API to save changes
    // Assuming you have a service method to update the vendor details
    // this.vendorService.updateVendor(this.vendor).subscribe(() => {
    //     this.onSave.emit(this.vendor);
    // });
    this.onSave.emit(this.vendor); // Emitting event with updated vendor data
    this.onHide.emit(); // Closing the dialog after save
}

cancel() {
    this.onHide.emit(); // Closing the dialog without saving
}

}
