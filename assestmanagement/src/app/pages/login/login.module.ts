import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [LoginComponent]
})
export class AppModule { }
