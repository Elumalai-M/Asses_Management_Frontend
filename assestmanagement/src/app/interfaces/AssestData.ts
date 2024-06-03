  // Interface for the overall form data structure
  export  interface AssetData {
    asset: Asset;
    fixedasset: FixedAsset;
    itasset:ITAssetData;
}
  

// Interface for the 'assest' object
export interface Asset {
    assetId: number | null;
    assetName: string | null;
    managedBy: string | null;
    modelNumber: string | null;
    serialNumber: string | null;
    brand: string | null;
    cost: number | null;
    status: string | null;
    operationalStatus: string | null;
    assetType: string | null;
    category: string | null;
}
  
  // Interface for the 'fixedassest' object
export interface FixedAsset {
    id: number;
    color: string | null;
    graphicsCard: string | null;
    ram: string | null;
    rom: string | null;
    material: string | null;
    os: string | null;
    osVersion: string | null;
    battery: string | null;
    chargerType: string | null;
    wireless: string | null;
    weight: string | null;
    dimension: string | null;
    ipAddress: string | null;
    connectorType: string | null;
    bluetoothVersion: string | null;
    chargingTime: string | null;
}
// export interface ITAssetData {
//   id: number;
//   hostName: string;
//   totalPort: string;
//   managementPortInfo: string;
//   defaultGateWay: string;
//   firewallType: string;
//   firewallIpAddress: string;
//   macAddress: string;
//   serviceTag: string;
//   os: string;
//   processor: string;
//   raidCard: string;
//   harddisk: string;
//   networkCard: string;
//   smps: string;
//   vmtype: string;
//   diskDetails: string;
//   graphicsCard: string;
//   isPrinterLinked: boolean;
//   active: boolean;
// }

export interface ITAssetData {
  color: string;
  chargerType: string;
  displaySize: string;
  batteryHealth: string;
  lanMacAddress: string;
  wifiMacAddress: string;
  dcNumber: string;
  os: string;
  osVersion: string;
  processor: string;
  generation: string;
  clockSpeed: string;
  ram: string;
  storageType: string;
  storageCapacity: string;
}
