import { Component } from '@angular/core';
import { AssetSummary } from '../../interfaces/AssestSummary';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    

backendData = new Map<string, { subtitle: string, value: number }[]>();
cards: { title: string, content: string }[] = [];

assetSummary: AssetSummary | undefined;


ngOnInit(): void {
    this.fetchAssetSummary();
  }

constructor(private dashboardService: DashboardService) {}
	

  cardBackgroundColors = [
  'linear-gradient(to right, #ffbf96, #fe7096)',
  'linear-gradient(to right, #90caf9, #047edf 99%)',
  'linear-gradient(to right, #84d9d2, #07cdae)'
  ]

  fetchAssetSummary(): void {
	this.dashboardService.getAssestSummary().subscribe(data => {
		this.assetSummary = data;
		console.log(this.assetSummary);
		this.backendData.set('ITAssets', [
			{ subtitle: 'Available', value: this.assetSummary?.unassignedItAssets || 0 },
			{ subtitle: 'Assigned', value: this.assetSummary?.assignedItAssets || 0 },
			{ subtitle: 'Undermaintenance', value: this.assetSummary?.notWorkingItAssets || 0  }
		  ]);
		  this.backendData.set('FixedAssets', [
			{ subtitle: 'Available', value: this.assetSummary?.unassignedFixedAssets || 0 },
			{ subtitle: 'Assigned', value: this.assetSummary?.assignedFixedAssets || 0 },
			{ subtitle: 'Undermaintenance', value: this.assetSummary?.notWorkingFixedAssets || 0 }
		  ]);
		  
		  this.backendData.set('OverAll Assets', [
			{ subtitle: 'Available', value: this.assetSummary?.totalUnassignedAssets || 0 },
			{ subtitle: 'Assigned', value: this.assetSummary?.totalAssignedAssets || 0 },
			{ subtitle: 'Undermaintenance', value: this.assetSummary?.totalNotWorkingAssets || 0 }
		  ]);
		  this.backendData.forEach((values, key) => {
			let content = values.map(v => `${v.subtitle}: ${v.value}`).join(' ');
			this.cards.push({ title: key, content });
		  });
    });

    }
}
