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
import { DatePipe } from '@angular/common'; // Import DatePipe
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { FormsModule } from '@angular/forms';
 // Import FormsModule
import { NgxSpinnerModule } from 'ngx-spinner';
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
import { CardModule, } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



import { EmployeeDetailComponent } from './pages/emp/employ/employee-detail/employee-detail.component';
import { EmployeeCeateComponent } from './pages/emp/employee-ceate/employee-ceate.component';
import { AssestdetailComponent } from './pages/assest/assestdetail/assestdetail/assestdetail.component';
import { AssetmappingdialogComponent } from './pages/assest/assetmappingdialog/assetmappingdialog.component';
import { VendorCreateComponent } from './pages/vendor/vendor-create/vendor-create.component';
import { VendorlistComponent } from './pages/vendorlist/vendorlist.component'
import { EditVendorDialogComponentComponent } from './pages/vendor/edit-vendor-dialog-component/edit-vendor-dialog-component.component';
import { AssetTrackerListComponent } from './pages/asset-tracker/asset-tracker-list/asset-tracker-list.component';


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
    EditVendorDialogComponentComponent,
    AssetTrackerListComponent,
    AssetmappingdialogComponent
 
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
    ConfirmDialogModule,
    CardModule,
    CalendarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule

     ],
  providers: [
     DatePipe, 
    provideClientHydration(),
    provideAnimationsAsync(),
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
