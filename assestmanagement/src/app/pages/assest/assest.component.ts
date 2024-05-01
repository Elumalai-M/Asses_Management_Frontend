import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssestType, Category, Device, OperationalStatus, Status } from '../../interfaces/Enum';
import { AssestService } from '../../services/assest.service';
import { AssetData } from '../../interfaces/AssestData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assest',
  templateUrl: './assest.component.html',
  styleUrl: './assest.component.css',
})
export class AssestComponent {

  categoryOptions = Object.values(Category);
  assestType = Object.values(AssestType);
  operationalStatus = Object.values(OperationalStatus);
  status = Object.values(Status);
  device = Object.values(Device);



  constructor(private builder: FormBuilder,
    private assestService:AssestService,
    private router: Router,
  ){}

  ngonInit():void{
  }
  isLinear=true;

  Empregister = this.builder.group({

    assest:this.builder.group({
      assetId:this.builder.control('',Validators.required),
      assetName:this.builder.control('',Validators.required),
      managedBy:this.builder.control('',Validators.required),
      modelNumber:this.builder.control('',Validators.required),
      serialNumber:this.builder.control('',Validators.required),
      brand:this.builder.control('',Validators.required),
      cost:this.builder.control('',Validators.required),
      status:this.builder.control(''),
      operationalStatus:this.builder.control(''),
      assetType:this.builder.control(''),
      category:this.builder.control('')
    }),
    // assestenum:this.builder.group({
    //   status:this.builder.control(''),
    //   operationalStatus:this.builder.control(''),
    //   assetType:this.builder.control(''),
    //   category:this.builder.control('')
    // }),
    fixedassest:this.builder.group({
      color:this.builder.control(''),
      graphicsCard:this.builder.control(''),
      ram:this.builder.control(''),
      rom:this.builder.control(''),
      material:this.builder.control(''),
      os:this.builder.control(''),
      osVersion:this.builder.control(''),
      battery:this.builder.control(''),
      chargerType:this.builder.control(''),
      wireless:this.builder.control(''),
      weight:this.builder.control(''),
      dimension:this.builder.control(''),
      ipAddress:this.builder.control(''),
      connectorType:this.builder.control(''),
      bluetoothVersion:this.builder.control(''),
      chargingTime:this.builder.control('')
      // capacity:this.builder.control(''),
      // size:this.builder.control(''),
      // watts:this.builder.control(''),
      // volt:this.builder.control(''),
      // length:this.builder.control(''),
      // simNumber:this.builder.control(''),
      // imeiNumber:this.builder.control(''),
      // generation:this.builder.control('')
    })
  });
  

  get Assestform(){
    return this.Empregister.get("assest") as FormGroup;
  }
  // get AssestEnumform(){
  //   return this.Empregister.get("assestenum") as FormGroup;
  // }
  get FixedAssestform(){
    return this.Empregister.get("fixedassest") as FormGroup;
  }
  
  HandleSubmit(){
  }

  HandleSubmits(){
    if(this.Empregister && this.Empregister.valid){
      console.log(this.Empregister.value);
      const assetFormData = this.Empregister.getRawValue(); 
      console.log('finalData',assetFormData);
     this.assestService.createAssestData(assetFormData as AssetData).subscribe(
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