import { Component } from '@angular/core';
import { EmployeeData } from '../../../interfaces/EmployeeData';
import { EmployeeServiceService } from '../../../services/employee-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-ceate',
  templateUrl: './employee-ceate.component.html',
  styleUrl: './employee-ceate.component.css'
})
export class EmployeeCeateComponent {
  employeeForm!: FormGroup;
  registerError: string = '';

  constructor(private formBuilder: FormBuilder,
    private employeeService : EmployeeServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
      contactNumber: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      designation: ['', Validators.required],
    });
  }

  get email(){
    return this.employeeForm.controls['emailId'];
  }

  get password(){
    return this.employeeForm.controls['password'];
  }

  onSubmit() {
    const employeedata = this.employeeForm.value;
    console.log(employeedata);  
    this.employeeService.createEmployee(employeedata as EmployeeData).subscribe(
      response => {
        console.log("Response from server:", response);

        this.router.navigate(['/employee']);
      },
      error => {
        console.log("Error:", error);
        this.registerError = "Invalid credentials.";
      }
    );
  }
  }
