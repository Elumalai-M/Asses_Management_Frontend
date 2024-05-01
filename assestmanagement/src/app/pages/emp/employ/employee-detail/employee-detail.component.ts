import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../../../../services/employee-service.service';
import { EmployeeData } from '../../../../interfaces/EmployeeData';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent {

  EmpID!: string;
  employeeData!: EmployeeData;
  isEditMode = false;
  editedEmployee: any;

  constructor(private router: Router,
    private employeeService:EmployeeServiceService,
    private route:ActivatedRoute
  ){
    this.editedEmployee = { ...this.employeeData }; // Create a copy for editing

  }

  ngOnInit():void{
    this.fetchEmployleeDetail();
   }

   fetchEmployleeDetail():void {
    this.EmpID = String(this.route.snapshot.paramMap.get('employee'));
    console.log("empId",this.EmpID);
    this.employeeService.getEmployeeById(this.EmpID).subscribe(
      (data: EmployeeData) => {
        this.employeeData = data; // Assign received data to property
        console.log('Employee data:', this.employeeData);
      },
      (error) => {
        console.error('Error fetching employee:', error);
        // Handle error cases here
      }
    );
  }

  enableEditMode() {
    this.isEditMode = true;
  }

  saveChanges() {
    this.employeeService.updateEmlpoyeetData(this.employeeData as EmployeeData).subscribe(
      (response) => {
        console.log('Employee data updated successfully:', response);
        this.router.navigate(['/employee']);

      },
      (error) => {
        console.error('Error updating employee data:', error);
      }
    );
  }

  cancelEdit() {
    this.editedEmployee = { ...this.employeeData }; // Reset editedEmployee
    this.isEditMode = false;
  }

}
