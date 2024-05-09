import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmployComponent } from './pages/emp/employ/employ.component';
import { AssestComponent } from './pages/assest/assest.component';
import { FormlyModule } from '@ngx-formly/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AssetviewComponent } from './pages/assest/view/assetview/assetview.component';
import { AssestdetailComponent } from './pages/assest/assestdetail/assestdetail/assestdetail.component';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './pages/emp/employ/employee-detail/employee-detail.component';
import { EmployeeCeateComponent } from './pages/emp/employee-ceate/employee-ceate.component'; // Import FormsModule
import { NgxSpinnerModule } from 'ngx-spinner';
import { VendorlistComponent } from './pages/vendorlist/vendorlist.component';

import { MatTableModule } from '@angular/material/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar'; 
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { VendorCreateComponent } from './pages/vendor/vendor-create/vendor-create.component';
import { EditVendorDialogComponentComponent } from './pages/vendor/edit-vendor-dialog-component/edit-vendor-dialog-component.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployComponent,
    AssestComponent,
    LoginComponent,
    DashboardComponent,
    AssetviewComponent,
    AssestdetailComponent,
    EmployeeDetailComponent,
    EmployeeCeateComponent,
    VendorlistComponent,
    VendorCreateComponent,
    EditVendorDialogComponentComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormlyModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    CanvasJSAngularChartsModule,
    FormsModule,
    NgxSpinnerModule,
    MatTableModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    TableModule,
    TagModule,
    RatingModule,
    DialogModule,
    DropdownModule,
    ConfirmDialogModule
 
     ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
