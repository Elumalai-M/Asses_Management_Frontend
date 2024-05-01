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
    EmployeeCeateComponent
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
    NgxSpinnerModule
     ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
