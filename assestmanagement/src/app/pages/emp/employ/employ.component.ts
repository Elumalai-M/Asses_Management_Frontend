import { Component } from '@angular/core';
import { EmployeeServiceService } from '../../../services/employee-service.service';
import { EmployeeData } from '../../../interfaces/EmployeeData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrl: './employ.component.css'
})
export class EmployComponent {

  employeeDataList: EmployeeData[] = [];
  selectedEmployees: any[] = [];
  filterDataList: EmployeeData[] = [];
  searchText: string = '';
  selectedFile: File | null = null;
  viewMode: 'table' | 'card' = 'table'; // Default view mode


  constructor(private router: Router,
    private employeeService: EmployeeServiceService) {
   }

  ngOnInit(): void {
    this.fetchEmployeeData();
  }

  fetchEmployeeData(): void {
    this.employeeService.getEmployeeListData().subscribe(data => {
      console.log("hello",data);
      this.employeeDataList = data;
      this.filterDataList = [...this.employeeDataList];
    });

    }
  
    addNewEmployee(): void {
      console.log('Add new employee');
    }

    
    toggleSelection(employee: any) {
      const index = this.selectedEmployees.indexOf(employee);
      if (index === -1) {
        this.selectedEmployees.push(employee);
      } else {
        this.selectedEmployees.splice(index, 1);
      }
    }

  deleteSelectedEmployees() {
  console.log('selectedEmop',this.selectedEmployees);
  const employeeIdsToDelete: number[] = this.selectedEmployees.map(employee => employee.employeeId);

      this.employeeService.deleteSelectedEmployees(employeeIdsToDelete)
        .subscribe(
          (response) => {
            console.log('Employees deleted successfully:', response);
            this.selectedEmployees = []; 
            this.fetchEmployeeData();
          },
          (error) => {
            console.error('Error deleting employees:', error);
          }
        );
    }

    filterByText(event:any){
      const searchText = (event.target.value || '').trim().toLowerCase(); 
      this.employeeDataList = this.filterDataList.slice(); 
      if (searchText) {
        this.employeeDataList = this.employeeDataList.filter(employee =>
          employee.firstName.toLowerCase().includes(searchText)
        );
      }
  }

  filterEmployeeData(): void {
    if (!this.searchText.trim()) {
      this.filterDataList = [...this.employeeDataList];
    } else {
      this.filterDataList = this.employeeDataList.filter(employee =>
        employee.firstName.toLowerCase().includes(this.searchText.trim().toLowerCase())
        || employee.lastName.toLowerCase().includes(this.searchText.trim().toLowerCase())
      );
    }
  }

  createEmployees(): void{
    this.router.navigate(['/employeeCreate']);
  }

  navigateToDetails(employee: string){
    this.router.navigate(['/employeeDetail',employee]);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  uploadEmployeeData(){
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }
    const formData: FormData = new FormData();
    console.log('Selected File:', this.selectedFile);
    formData.append('fileData', new File(['sample content'], 'sample.csv'));
    console.log('FormData object:', formData);
    this.employeeService.uploadCSVFile(formData).subscribe(
      (response) => {
        console.log('File uploaded successfully:', response);
        // Handle success message or other actions
      },
      (error) => {
        console.error('Error uploading file:', error);
        // Handle error message or other actions
      }
    );
  }

  toggleView() {
    this.viewMode = this.viewMode === 'table' ? 'card' : 'table';
  }


  }

