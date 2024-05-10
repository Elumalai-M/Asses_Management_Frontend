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

  // categoryOptions = Object.values(Category);
  // assestType = Object.values(AssestType);
  // operationalStatus = Object.values(OperationalStatus);
  // status = Object.values(Status);
  // device = Object.values(Device);



  // constructor(private builder: FormBuilder,
  //   private assestService:AssestService,
  //   private router: Router,
  // ){}

  // ngonInit():void{
  // }
  // isLinear=true;

  // Empregister = this.builder.group({

  //   assest:this.builder.group({
  //     assetId:this.builder.control('',Validators.required),
  //     assetName:this.builder.control('',Validators.required),
  //     managedBy:this.builder.control('',Validators.required),
  //     modelNumber:this.builder.control('',Validators.required),
  //     serialNumber:this.builder.control('',Validators.required),
  //     brand:this.builder.control('',Validators.required),
  //     cost:this.builder.control('',Validators.required),
  //     status:this.builder.control(''),
  //     operationalStatus:this.builder.control(''),
  //     assetType:this.builder.control(''),
  //     category:this.builder.control('')
  //   }),
    // assestenum:this.builder.group({
    //   status:this.builder.control(''),
    //   operationalStatus:this.builder.control(''),
    //   assetType:this.builder.control(''),
    //   category:this.builder.control('')
    // }),
  //   fixedassest:this.builder.group({
  //     color:this.builder.control(''),
  //     graphicsCard:this.builder.control(''),
  //     ram:this.builder.control(''),
  //     rom:this.builder.control(''),
  //     material:this.builder.control(''),
  //     os:this.builder.control(''),
  //     osVersion:this.builder.control(''),
  //     battery:this.builder.control(''),
  //     chargerType:this.builder.control(''),
  //     wireless:this.builder.control(''),
  //     weight:this.builder.control(''),
  //     dimension:this.builder.control(''),
  //     ipAddress:this.builder.control(''),
  //     connectorType:this.builder.control(''),
  //     bluetoothVersion:this.builder.control(''),
  //     chargingTime:this.builder.control('')
  //     // capacity:this.builder.control(''),
  //     // size:this.builder.control(''),
  //     // watts:this.builder.control(''),
  //     // volt:this.builder.control(''),
  //     // length:this.builder.control(''),
  //     // simNumber:this.builder.control(''),
  //     // imeiNumber:this.builder.control(''),
  //     // generation:this.builder.control('')
  //   })
  // });
  

  // get Assestform(){
  //   return this.Empregister.get("assest") as FormGroup;
  // }
  // // get AssestEnumform(){
  // //   return this.Empregister.get("assestenum") as FormGroup;
  // // }
  // get FixedAssestform(){
  //   return this.Empregister.get("fixedassest") as FormGroup;
  // }
  
  // HandleSubmit(){
  // }

  // HandleSubmits(){
  //   if(this.Empregister && this.Empregister.valid){
  //     console.log(this.Empregister.value);
  //     const assetFormData = this.Empregister.getRawValue(); 
  //     console.log('finalData',assetFormData);
  //    this.assestService.createAssestData(assetFormData as AssetData).subscribe(
  //     (response) => {
  //       console.log('Asset data created successfully:', response);
  //       this.router.navigate(['/assest']);

  //     },
  //     (error) => {
  //       console.error('Error creating asset data:', error);
  //     }
  //   );
  //   }
  // }
  isLinear=true;
  category:string | null | undefined="";
  token:string | null=localStorage.getItem("loginToken");
  httpHeaders:HttpHeaders=new HttpHeaders();

  
  constructor(private builder:FormBuilder,
    private router:Router,
    private http:HttpClient,
    private assestService:AssestService){}


  assetRegister=this.builder.group({
    basic:this.builder.group({
      "assetCode":this.builder.control('',Validators.required),
      "assetName":this.builder.control('',Validators.required),
      "remark":this.builder.control('',Validators.required),
      "serialNumber":this.builder.control('',Validators.required),
      "modelNumber":this.builder.control('',Validators.required),
      "brand":this.builder.control('',Validators.required),
      "cost":this.builder.control('',Validators.required),
      "poNumber":this.builder.control('',Validators.required)
    }),
    statusdetails:this.builder.group({
      "status":this.builder.control('',Validators.required),
      "operationalStatus":this.builder.control('',Validators.required),
      "assetType":this.builder.control('',Validators.required),
      "category":this.builder.control('',Validators.required)
      
    }),
    generalspecifications:this.builder.group({
      "color":this.builder.control(''),
      "chargerType":this.builder.control(''),
      "wireless":this.builder.control(''),
      "weight":this.builder.control(''),
      "battery":this.builder.control(''),
      "dimension":this.builder.control(''),
      "connectorType":this.builder.control(''),
      "chargingTime":this.builder.control(''),
      "capacity":this.builder.control(''),
      "size":this.builder.control(''),
      "watts":this.builder.control(''),
      "material":this.builder.control('',Validators.required),
      "length":this.builder.control('')
      
    }),
    generalspecifications2:this.builder.group({
      "hostName":this.builder.control(''),
      "totalPort":this.builder.control(''),
      "managementPortInfo":this.builder.control(''),
      "defaultGateWay":this.builder.control(''),
      "firewallType":this.builder.control(''),
      "firewallIpAddress":this.builder.control(''),
      "macAddress":this.builder.control(''),
      "serviceTag":this.builder.control('',Validators.required)
    }),
    osspecifications:this.builder.group({
      "os":this.builder.control(''),
      "osversion":this.builder.control(''),
      "processor":this.builder.control(''),
      "ram":this.builder.control(''),
      "rom":this.builder.control(''),
      "ipaddress":this.builder.control(''),
      "blutoothVersion":this.builder.control(''),
      "simNumber":this.builder.control(''),
      "imeiNumber":this.builder.control(''),
      "generation":this.builder.control('',Validators.required),
      

    }),
    osspecifications2:this.builder.group({
      "os":this.builder.control(''),
      "processor":this.builder.control(''),
      "raidCard":this.builder.control(''),
      "harddisk":this.builder.control(''),
      "networkCard":this.builder.control(''),
      "smps":this.builder.control(''),
      "vmtype":this.builder.control(''),
      "diskDetails":this.builder.control(''),
      "graphicsCard":this.builder.control(''),
      "isPrinterLinked":this.builder.control('',Validators.required)
    })
  })
  

get basicform(){
  return this.assetRegister.get("basic") as FormGroup
}
get statusform(){
  console.log("this.assetRegister.get(\"statusdetails\")?.value.category",this.assetRegister.get("statusdetails")?.value.category);
  
  this.category=this.assetRegister.get("statusdetails")?.value.category;
  return this.assetRegister.get("statusdetails") as FormGroup
}
get generalform(){
  if(this.category==='FIXED'){
    const serviceTagControl = this.assetRegister.get('generalspecifications2.serviceTag');
    if(serviceTagControl){
      serviceTagControl.setValidators(null); // clear validators
      serviceTagControl.updateValueAndValidity(); // Trigger re-validation
    }
    
    const materialControl = this.assetRegister.get('generalspecifications.material');
    if(materialControl){
      materialControl.setValidators([Validators.required]); // clear validators
      materialControl.updateValueAndValidity(); // Trigger re-validation
    }
      
    return this.assetRegister.get("generalspecifications") as FormGroup
  }
  else{
    const materialControl = this.assetRegister.get('generalspecifications.material');
    if(materialControl){
      materialControl.setValidators(null); // clear validators
      materialControl.updateValueAndValidity(); // Trigger re-validation
    }
    const serviceTagControl = this.assetRegister.get('generalspecifications2.serviceTag');
    if(serviceTagControl){
      serviceTagControl.setValidators([Validators.required]); // Set validators
      serviceTagControl.updateValueAndValidity(); // Trigger re-validation
    }
    return this.assetRegister.get("generalspecifications2") as FormGroup

  }
 }
get osform(){
  if(this.category==='FIXED'){
    const isPrinterLinkedControl = this.assetRegister.get('osspecifications2.isPrinterLinked');
    if(isPrinterLinkedControl){
      isPrinterLinkedControl.setValidators(null); // clear validators
      isPrinterLinkedControl.updateValueAndValidity(); // Trigger re-validation
    }
    const generationControl = this.assetRegister.get('osspecifications.generation');
    if(generationControl){
      generationControl.setValidators([Validators.required]); // sets validators
      generationControl.updateValueAndValidity(); // Trigger re-validation
    }
    return this.assetRegister.get("osspecifications") as FormGroup
  }
  else{
    const isPrinterLinkedControl = this.assetRegister.get('osspecifications2.isPrinterLinked');
    if(isPrinterLinkedControl){
      isPrinterLinkedControl.setValidators([Validators.required]); // sets validators
      isPrinterLinkedControl.updateValueAndValidity(); // Trigger re-validation
    }
    const generationControl = this.assetRegister.get('osspecifications.generation');
    if(generationControl){
      generationControl.setValidators(null); // clear validators
      generationControl.updateValueAndValidity(); // Trigger re-validation
    }
    return this.assetRegister.get("osspecifications2") as FormGroup

  }
  }



selectedStatus:status[]=[
 {value: 'ASSIGNED',viewValue:'Assigned'},
  {value: 'NOT_ASSIGNED',viewValue:'Not Assigned'}
];

selectedOperation:status[]=[
  {value: 'WORKING',viewValue:'Working'},
  {value: 'NOT_WORKING',viewValue:'Not Working'}

];

selectedAsset:status[]=[
  {value: 'LEASE',viewValue:'Lease'},
  {value: 'PERMANENT',viewValue:'Permanent'}
]

selectedCategory:status[]=[
  {value: 'FIXED',viewValue:'Fixed Asset'},
  {value: 'IT',viewValue:'IT Asset'}
];

HandleSubmit(){
  console.log("handle method called");
  
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
        ...this.assetRegister.get("generalspecifications")?.value,
        ...this.assetRegister.get("osspecifications")?.value
    }
    }
    else{
      itasset={
        ...this.assetRegister.get("generalspecifications2")?.value,
        ...this.assetRegister.get("osspecifications2")?.value
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
      

  //   if(this.category==='FIXED'){
  //     this.http.post('http://localhost:8080/asset/saveAssetWithFixed',whole,{headers:this.httpHeaders}).subscribe((response)=>{
  //    console.log(response);
  //    alert("Asset Saved Succesfully");
 
  // })
  //   }
  //   else{
  //     this.http.post('http://localhost:8080/asset/saveAssetWithIT',whole,{headers:this.httpHeaders}).subscribe((response)=>{
  //    console.log(response);
  //    alert("Asset Saved Succesfully");
  // })
  //   }
    
   
    
  }
}

}