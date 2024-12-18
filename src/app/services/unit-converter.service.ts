import {Injectable} from '@angular/core';

const mass = ['kg', 'g', 'tbsp', 'mg', 'μg', 't', 'lb', 'oz'];
const volume = ['l', 'dl', 'ml', 'cup', 'flOzUk', 'flOzUs', 'drop'];

const unit = mass.concat(volume);

export type Mass = typeof mass[number];
export type Volume = typeof volume[number];
export type Unit = typeof unit[number];

@Injectable({
  providedIn: 'root'
})
export class UnitConverterService {

  private readonly massConversionRates: any = {
    t: 1/1000000,
    kg: 1/1000,
    lb: 1/453.59237,
    oz: 1/28.349523125,
    tbsp: 1/15,
    g: 1,
    mg: 1/0.001,
    μg: 1/0.000001,
  }

  private readonly volumeConversionRates: any = {
    l: 1,
    dl: 1/0.1,
    ml: 1/0.001,
    cup: 1/0.2365882365,
    flOzUk: 1/0.0284130625,
    flOzUs: 1/0.0295735296,
    drop: 1/0.00005
  };

  private readonly conversionRates: any = {
    mass: this.massConversionRates,
    volume: this.volumeConversionRates,
  };

  constructor() {
  }

  convert(input: number, from: Unit, to: Unit, density: number = 1): number {
    if (from === to) {
      return input;
    }

    const unitTypeFrom = this.findUnitType(from);
    const unitTypeTo = this.findUnitType(to);

    if(unitTypeFrom === null || unitTypeTo === null){
      return input;
    }

    if (unitTypeFrom == 'volume' && unitTypeTo == 'mass') {
      const ml = this.convert(input, from, 'ml');
      return this.convert(ml * density, 'g', to);
    }

    return (input * this.conversionRates[unitTypeTo][to] / this.conversionRates[unitTypeFrom][from]);
  }

  private findUnitType(unit: Unit) {
    const isMass = !!~mass.indexOf(unit as Mass);
    const isVolume = !!~volume.indexOf(unit as Volume);

    if (isMass) {
      return 'mass';
    }

    if (isVolume) {
      return 'volume';
    }

    return null;
  }
}
