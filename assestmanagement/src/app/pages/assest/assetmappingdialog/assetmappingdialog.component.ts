import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { EmployeeServiceService } from '../../../services/employee-service.service';
import { EmployeeData } from '../../../interfaces/EmployeeData';
import { AssetTrackerService } from '../../../services/asset-tracker.service';
import { AssetTracker } from '../../../interfaces/AssetTracker';
import { AssetviewComponent } from '../view/assetview/assetview.component';
import { AssetData } from '../../../interfaces/AssestData';
import { AssestService } from '../../../services/assest.service';
@Component({
  selector: 'app-assetmappingdialog',
  templateUrl: './assetmappingdialog.component.html',
  styleUrl: './assetmappingdialog.component.css',
})
export class AssetmappingdialogComponent {

  form!: FormGroup;

  options: string[] = ['Employee1', 'Employee2', 'Employee3']; // Replace with your actual options
  empData!: EmployeeData[];
  //filteredOptions!: Observable<string[]>;
  filteredOptions!: Observable<EmployeeData[]>;
  assetDropDownData!: Observable<AssetData[]>;
  assestDataList: AssetData[] = [];
  asset: number | null | undefined;

  employeeList!: EmployeeData[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { asset: number | null | undefined },
    @Inject(MAT_DIALOG_DATA) public assetData: { assetData: number | null | undefined },
    private dialogRef: MatDialogRef<AssetmappingdialogComponent>,
    private fb: FormBuilder,
    private employeeService: EmployeeServiceService,
    private assetTrackerService:AssetTrackerService,
    private assestService:AssestService
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
    this.fetchAssestData();
    // this.filteredOptions = this.form.get('employeeId')!.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filter(value || ''))
    // );
  }

  fetchAssestData(): void {
    this.assestService.getAssestData().subscribe(data => {
      console.log("assestData",data);
      this.assestDataList = data;
      this.assetDropDownData = this.form.get('assetId')!.valueChanges.pipe(
        startWith(''),
        map((value) => this._filterAssetData(value || ''))
      );
    });
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

  private _filterAssetData(value: string): AssetData[] {
    const filterValue = value.toLowerCase();
    return this.assestDataList.filter(emp =>
      emp.asset.assetName?.toLowerCase().includes(filterValue) 
    );
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.empData
  //     .map(emp => emp.employeeId) 
  //     .filter(emp => emp.toLowerCase().includes(filterValue));
  // }

  private _filter(value: string): EmployeeData[] {
    const filterValue = value.toLowerCase();
    return this.empData.filter(emp =>
      emp.employeeId.toLowerCase().includes(filterValue) ||
      emp.firstName.toLowerCase().includes(filterValue)
    );
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
