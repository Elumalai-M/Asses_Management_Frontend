import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { EmployeeServiceService } from '../../../services/employee-service.service';
import { EmployeeData } from '../../../interfaces/EmployeeData';
import { AssetTrackerService } from '../../../services/asset-tracker.service';
import { AssetTracker } from '../../../interfaces/AssetTracker';
@Component({
  selector: 'app-assetmappingdialog',
  templateUrl: './assetmappingdialog.component.html',
  styleUrl: './assetmappingdialog.component.css',
})
export class AssetmappingdialogComponent {
  form!: FormGroup;

  options: string[] = ['Employee1', 'Employee2', 'Employee3']; // Replace with your actual options
  empData!: EmployeeData[];
  filteredOptions!: Observable<string[]>;

  asset: number | null | undefined;

  employeeList!: EmployeeData[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { asset: number | null | undefined },
    private dialogRef: MatDialogRef<AssetmappingdialogComponent>,
    private fb: FormBuilder,
    private employeeService: EmployeeServiceService,
    private assetTrackerService:AssetTrackerService
  ) {
    this.asset = data.asset; // Access the passed asset value
    console.log('asset' + this.asset);
  }

  ngOnInit() {
    this.form = this.fb.group({
      employeeId: ['', Validators.required],
      assetId: [this.asset, Validators.required],
      assignDate: ['', Validators.required],
      remark: ['', Validators.required],
    });
    this.fetchEmployeeData();
    // this.filteredOptions = this.form.get('employeeId')!.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filter(value || ''))
    // );
  }

  fetchEmployeeData(): void {
    this.employeeService.getEmployeeListData().subscribe((data) => {
      this.employeeList = data;
      console.log('employeedata', this.employeeList);
      this.empData = this.employeeList;
      this.filteredOptions = this.form.get('employeeId')!.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );
    });
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.empData
      .map(emp => emp.employeeId) 
      .filter(emp => emp.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    console.log("Form Submitted", this.form.value);
    const assetMapperData = this.form.value;
    this.assetTrackerService.createAssetTracker(assetMapperData as AssetTracker).subscribe(
      response => {
        console.log("Response from server:", response);
        this.dialogRef.close();
        window.location.reload();
      },
      error => {
        console.log("Error:", error);
      }
    );

    // Handle form submission here
  }

  // fetchEmployeeData(): void {
  //   this.employeeService.getEmployeeListData().subscribe((data) => {
  //     this.employeeList = data;
  //     console.log("employeedata",this.employeeList);
  //     this.empData=this.employeeList;
  //   });
  // }


  onCancel(): void {
   this.dialogRef.close(); 
  }

}
