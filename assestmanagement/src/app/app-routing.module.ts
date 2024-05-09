import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployComponent } from './pages/emp/employ/employ.component';
import { AssestComponent } from './pages/assest/assest.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AssetviewComponent } from './pages/assest/view/assetview/assetview.component';
import { AssestdetailComponent } from './pages/assest/assestdetail/assestdetail/assestdetail.component';
import { EmployeeDetailComponent } from './pages/emp/employ/employee-detail/employee-detail.component';
import { EmployeeCeateComponent } from './pages/emp/employee-ceate/employee-ceate.component';
import { VendorlistComponent } from './pages/vendorlist/vendorlist.component';
import { create } from 'domain';
import { VendorCreateComponent } from './pages/vendor/vendor-create/vendor-create.component';

const routes: Routes = [
  {component:LoginComponent,path: "login"},
  {component:HomeComponent,path: "home"},
  {component:EmployComponent,path: "employee"},
  {component:AssestComponent,path: "assestCreate"},
  {component:DashboardComponent,path: "dashboard"},
  {component:AssetviewComponent,path: "assest"},
  {component:AssestdetailComponent,path: "assestdetail"},
  {component:EmployeeDetailComponent,path: "employeeDetail"},
  {component:EmployeeCeateComponent,path: "employeeCreate"},
  {component:VendorlistComponent,path: "vendorlist"},
  {component:VendorCreateComponent, path :"vendorcreate"},
  { path: 'employeeDetail/:employee', component: EmployeeDetailComponent },
  { path: 'assestdetail/:asset', component: AssestdetailComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
