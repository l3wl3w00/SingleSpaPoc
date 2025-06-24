export type Period = 'Triassic' | 'Jurassic' | 'Cretaceous';
export type Diet = 'Carnivore' | 'Herbivore' | 'Omnivore';
export type Locomotion = 'Bipedal' | 'Quadrupedal' | 'Both';

export interface Dinosaur {
  name: string;
  image: string;
  period: Period;
  classification: string;
  diet: Diet;
  lengthMeters: number;
  weightTons: number;
  topSpeedKmH: number;
  locomotion: Locomotion;
  habitat: string;
  discoveryYear: number;
  discoveredBy: string;
  fossilLocations: string[];
  shortDescription: string;
  description: string;
}

export type DinosaurDetail = Dinosaur;
