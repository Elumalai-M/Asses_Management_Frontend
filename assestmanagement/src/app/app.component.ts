import { Component } from '@angular/core';
import {Router} from  '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assestmanagement';

  constructor(public router: Router,
    private spinner: NgxSpinnerService
  ) { }

  logout(){
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/']);
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000); // Hide the spinner after 2 seconds (adjust as needed)
  }
}
