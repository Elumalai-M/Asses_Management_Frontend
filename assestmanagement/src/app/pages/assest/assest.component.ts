import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AssestType, Category, Device, OperationalStatus, Status } from '../../interfaces/Enum';
import { AssestService } from '../../services/assest.service';
import { AssetData } from '../../interfaces/AssestData';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { VendorService } from '../../services/vendor.service';
import { vendor } from '../../interfaces/vendor';
import { Observable, ReplaySubject, Subject, map, startWith, takeUntil, tap } from 'rxjs';
import { MatSelect } from '@angular/material/select';

interface status{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-assest',
  templateUrl: './assest.component.html',
  styleUrl: './assest.component.css',
})
export class AssestComponent {

  isLinear=true;
  category:string | null | undefined="";
  asset:string | null | undefined="";
  assetType:string | null | undefined="";

  vendorDataList!: vendor[];
  filteredVendors!: Observable<string[]>;


  constructor(private builder:FormBuilder,
    private router:Router,
    private assestService:AssestService,
    private vendorService:VendorService){}

  ngOnInit(): void {
    this.fetchVendorData();

  }

  private fetchVendorData() {
    this.vendorService.getVendorListData().subscribe((vendors: vendor[]) => {
      this.vendorDataList = vendors;
      console.log("vendordatalist",this.vendorDataList);
      this.filteredVendors = this.assetRegister.get('statusdetails.vendor')!.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.vendorDataList
      .map(emp => emp.vendorName) 
      .filter(emp => emp.toLowerCase().includes(filterValue));
  }


 

  assetRegister=this.builder.group({
    basic:this.builder.group({
      "category":this.builder.control(''),
      "assetCode":this.builder.control(''),
      "assetName":this.builder.control(''),
      "brand":this.builder.control(''),
      "modelNumber":this.builder.control(''),
      "serialNumber":this.builder.control(''),
      "poNumber":this.builder.control(''),
      "dcNumber":this.builder.control(''),
      "cost":this.builder.control(''),
      "remark":this.builder.control('')
    }),
    statusdetails:this.builder.group({
      "assetType":this.builder.control(''),
      "asset":this.builder.control(''),
      "rent":this.builder.control(''),
      "deliverychellan":this.builder.control(''),
      "serviceTag":this.builder.control(''),
      "vendor":this.builder.control('')
      
    }),
    laptopspecifications:this.builder.group({
      "color":this.builder.control(''),
      "chargerType":this.builder.control(''),
      "displaySize":this.builder.control(''),
      "batteryHealth":this.builder.control(''),
      "lanMacAddress":this.builder.control(''),
      "wifiMacAddress":this.builder.control(''),
      "dcNumber":this.builder.control(''),
      "os":this.builder.control(''),
      "osVersion":this.builder.control(''),
      "processor":this.builder.control(''),
      "generation":this.builder.control(''),
      "clockSpeed":this.builder.control(''),
      "ram":this.builder.control(''),
      "storageType":this.builder.control(''),     
      "storageCapacity":this.builder.control('')    
    })
  })
  

get basicform(){
  this.category=this.assetRegister.get("basic")?.value.category;
  return this.assetRegister.get("basic") as FormGroup
}
get statusform(){
 this.assetType=this.assetRegister.get("statusdetails")?.value.assetType;
  this.asset=this.assetRegister.get("statusdetails")?.value.asset;
//console.log("asset and assettype",this.asset);
  return this.assetRegister.get("statusdetails") as FormGroup
}



get laptopform(){
  console.log("sef");
  return this.assetRegister.get("laptopspecifications") as FormGroup
}


selectedStatus:status[]=[
 {value: 'ASSIGNED',viewValue:'Assigned'},
  {value: 'UNASSIGNED',viewValue:'Not Assigned'}
];

selectedOperation:status[]=[
  {value: 'WORKING',viewValue:'Working'},
  {value: 'NOT_WORKING',viewValue:'Not Working'}

];

selectedAssetType:status[]=[
  {value: 'Lease',viewValue:'Lease'},
  {value: 'PERMANENT',viewValue:'Permanent'}
];

selectedCategory:status[]=[
  {value: 'FIXED',viewValue:'Fixed Asset'},
  {value: 'IT',viewValue:'IT Asset'}
];

selectedStorageType:status[]=[
  {value: 'SSD',viewValue:'SSD'},
  {value: 'HHD',viewValue:'HHD'}
]

selectedAsset:status[]=[
  {value: 'LAPTOP',viewValue:'LAPTOP'},
  {value: 'ACCESORIES',viewValue:'ACCESSORIES'},
  {value: 'DESKTOP',viewValue:'DESKTOP'},
  {value: 'NETWORK',viewValue:'NETWORK'}
];


HandleSubmit(){
  console.log("handle method called",this.assetRegister.valid);
  
  if(this.assetRegister.valid){

    console.log("inside handle method , inside this.assetRegister.valid");
    
    let asset:any={
      ...this.assetRegister.get("basic")?.value,
      ...this.assetRegister.get("statusdetails")?.value
    }

    let fixedasset:any={};
    let itasset:any={};
    if(this.category==='FIXED'){
      
      fixedasset={
        ...this.assetRegister.get("laptopspecifications")?.value,
    }
    }
    else{
      itasset={
        ...this.assetRegister.get("laptopspecifications")?.value,
    }
    }
    
    

    let whole={};
    if(this.category==='FIXED'){
      whole={
        asset,
        fixedasset,
        itasset
      }
      console.log('fixedAssest',whole);
    }
    else{
      whole={
        asset,
        fixedasset,
        itasset
      }
      console.log('itAssest',whole);

    }
   

    console.log('finalData',whole);
       this.assestService.createAssestData(whole).subscribe(
        (response) => {
          console.log('Asset data created successfully:', response);
          this.router.navigate(['/assest']);
  
        },
        (error) => {
          console.error('Error creating asset data:', error);
        }
      );
      

  }
}


//fetchVendorData(): void {
//   this.vendorService.getVendorListData().subscribe((data) => {
//     this.vedorDataList = data;
//     console.log('vendorData', this.vedorDataList);
 
//   });

// }
}