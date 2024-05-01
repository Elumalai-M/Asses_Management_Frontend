  // Interface for the overall form data structure
export  interface AssetData {
    assest: Assest;
    fixedassest: FixedAssest;
}
  

// Interface for the 'assest' object
export interface Assest {
    assetId: string | null;
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
export interface FixedAssest {
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

