import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 
  chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Assest Details"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 14.1, name: "Lease" },
		  { y: 28.2, name: "UnAssigned" },
		  { y: 14.4, name: "NotWorking" },
		  { y: 43.3, name: "Assigned" }
		]
	  }]
	}	
}
