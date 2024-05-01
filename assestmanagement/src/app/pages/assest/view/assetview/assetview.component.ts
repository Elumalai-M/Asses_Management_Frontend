import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssestDatas } from '../../../../interfaces/AssestDatas';
import { AssestService } from '../../../../services/assest.service';

@Component({
  selector: 'app-assetview',
  templateUrl: './assetview.component.html',
  styleUrl: './assetview.component.css'
})
export class AssetviewComponent {
  searchTxt: string = '';

  assestDataList: AssestDatas[] = [];
  filterDataList: AssestDatas[] = [];

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
      console.log('brand',asset.assest.brand); // Accessing a property of each element
    });
    this.filterDataList = [...this.assestDataList];
  });
  }

  navigateToDetails(asset: number): void {
    this.router.navigate(['/assestdetail',asset]);
  }

  filterAssestData(){
    if (!this.searchTxt.trim()) {
      this.filterDataList = [...this.assestDataList];
    } else {
      this.filterDataList = this.assestDataList.filter(assest =>
        assest.assest.assetName?.toLowerCase().includes(this.searchTxt.trim().toLowerCase()) ||
        assest.assest.managedBy?.toLowerCase().includes(this.searchTxt.trim().toLowerCase()) ||
        assest.assest.brand?.toLowerCase().includes(this.searchTxt.trim().toLowerCase()) 

      );
    }
  }

}
