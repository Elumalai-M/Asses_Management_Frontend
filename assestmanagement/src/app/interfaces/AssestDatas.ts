import { Asset } from "./AssestData";

export interface AssestDatas{
    id: number;
    color: string;
    graphicsCard: string;
    ram: string;
    rom: string;
    processor: string;
    material: string;
    os: string;
    osVersion: string;
    battery: string;
    chargerType: string;
    wireless: boolean;
    weight: number;
    dimension: string;
    ipAddress: string;
    connectorType: string;
    bluetoothVersion: string;
    chargingTime: number;
    capacity: number;
    size: string;
    watts: number;
    volt: string;
    length: number;
    simNumber: string;
    imeiNumber: string;
    generation: string;
    assest: Asset;
}