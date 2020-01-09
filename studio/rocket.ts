import { Astronaut } from "./astronaut";
import { Cargo } from "./cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.astronauts = [];
        this.cargoItems = [];
    }
    sumMass(items: Payload[]): number {
        let totalMass: number = 0;
        // for (let i = 0; i < items.length; i++) {
        //     totalMass+=items[i].massKg;  
        // }
        for (let i of items) {
            totalMass += i.massKg;
        }
        return totalMass;

    }
    // currentMassKg(): number
    // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems

    currentMassKg(): number {
        let currentMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return currentMass;
    }

    // canAdd(item: Payload): boolean
    // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg



}

