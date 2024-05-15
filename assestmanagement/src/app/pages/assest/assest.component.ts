import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssestType, Category, Device, OperationalStatus, Status } from '../../interfaces/Enum';
import { AssestService } from '../../services/assest.service';
import { AssetData } from '../../interfaces/AssestData';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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


  
  constructor(private builder:FormBuilder,
    private router:Router,
    private assestService:AssestService){}


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
      "vendor":this.builder.control('')
      
    }),
    laptopspecifications:this.builder.group({
      "color":this.builder.control(''),
      "chargerType":this.builder.control(''),
      "displaysize":this.builder.control(''),
      "batteryhealth":this.builder.control(''),
      "lanmacaddress":this.builder.control(''),
      "wifimacaddress":this.builder.control(''),
      "dcnumber":this.builder.control(''),
      "os":this.builder.control(''),
      "osversion":this.builder.control(''),
      "processor":this.builder.control(''),
      "generation":this.builder.control(''),
      "clockspeed":this.builder.control(''),
      "ram":this.builder.control(''),
      "storagetype":this.builder.control(''),     
      "storagecapacity":this.builder.control('')    
    })
  })
  

get basicform(){
  this.category=this.assetRegister.get("basic")?.value.category;
  return this.assetRegister.get("basic") as FormGroup
}
get statusform(){
 this.assetType=this.assetRegister.get("statusdetails")?.value.assetType;
  this.asset=this.assetRegister.get("statusdetails")?.value.asset;
console.log("asset and assettype",this.asset);
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
  {value: 'Vendor',viewValue:'Vendor'},
  {value: 'PERMANENT',viewValue:'Permanent'}
]

selectedCategory:status[]=[
  {value: 'FIXED',viewValue:'Fixed Asset'},
  {value: 'IT',viewValue:'IT Asset'}
];

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

}