import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssestService } from '../../../../services/assest.service';
import { AssetData } from '../../../../interfaces/AssestData';

@Component({
  selector: 'app-assetview',
  templateUrl: './assetview.component.html',
  styleUrl: './assetview.component.css'
})
export class AssetviewComponent {
  searchTxt: string = '';
  display:string='flex';
  assestDataList: AssetData[] = [];
  filterDataList: AssetData[] = [];
  viewMode: 'table' | 'card' = 'table';

  constructor(private router: Router,
    private assestService:AssestService,
  ){}

createAssest() {
this.router.navigate(['/assestCreate']);
}

ngOnInit(): void {
  this.fetchAssestData();
}

fetchAssestData(): void {
  this.assestService.getAssestData().subscribe(data => {
    console.log("assestData",data);
    this.assestDataList = data;
    this.assestDataList.forEach((asset) => {
      console.log('asset', asset); // Log the entire asset object
      console.log('assest', asset?.asset); // Log the assest property
      console.log('brand', asset?.asset?.assetName); // Safe access to assetName
    });
    this.filterDataList = [...this.assestDataList];
    console.log("filterDataList",this.filterDataList);
  });
  }

  navigateToDetails(asset: number| null | undefined): void {
    this.router.navigate(['/assestdetail',asset]);
  }

  assignAsset(asset: number| null | undefined): void {
    this.router.navigate(['/assestdetail',asset]);
  }

  filterAssestData(){
    if (!this.searchTxt.trim()) {
      this.filterDataList = [...this.assestDataList];
    } else {
      this.filterDataList = this.assestDataList.filter(assest =>
        assest.asset.assetName?.toLowerCase().includes(this.searchTxt.trim().toLowerCase()) ||
        assest.asset.managedBy?.toLowerCase().includes(this.searchTxt.trim().toLowerCase()) ||
        assest.asset.brand?.toLowerCase().includes(this.searchTxt.trim().toLowerCase()) 

      );
    }
  }

  toggleView() {
    this.viewMode = this.viewMode === 'table' ? 'card' : 'table';
  }

  assetListPage(employeeAsset:any){
   
  }
}
