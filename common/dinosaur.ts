export type Period = 'Triassic' | 'Jurassic' | 'Cretaceous';
export type Diet = 'Carnivore' | 'Herbivore' | 'Omnivore';
export type Locomotion = 'Bipedal' | 'Quadrupedal' | 'Both';

export type Epoch = 'Early' | 'Middle' | 'Late';
export type TemperatureRegulation = 'Endothermic' | 'Ectothermic' | 'Mesothermic';
export type SocialBehavior = 'Solitary' | 'Pack' | 'Herd' | 'Unknown';
export type ParentalCare = 'None' | 'Guarding' | 'Brooding' | 'Unknown';
export type PaleoEnvironment =
  | 'Floodplain'
  | 'Coastal'
  | 'Desert'
  | 'Forest'
  | 'Plains'
  | 'Marine';

export interface Dinosaur {
  name: string;
  image: string;
  period: Period;
  epoch?: Epoch;
  classification: string;
  diet: Diet;
  lengthMeters: number;
  weightTons: number;
  hipHeightMeters?: number;
  topSpeedKmH: number;
  locomotion: Locomotion;
  habitat: string;
  paleoEnvironment?: PaleoEnvironment;
  discoveryYear: number;
  discoveredBy: string;
  fossilLocations: string[];
  specimenCompletenessPct?: number;
  holotypeCatalogId?: string;
  fossilSpecimenCount?: number;
  shortDescription: string;
  description: string;

  /* — extra biology — */
  biteForceNewtons?: number;
  brainToBodyRatio?: number;
  temperatureRegulation?: TemperatureRegulation;
  evidenceOfFeathers?: boolean;
  lifeSpanYears?: number;

  /* — behavior & reproduction — */
  clutchSize?: number;
  eggDiameterCm?: number;
  parentalCare?: ParentalCare;
  socialBehavior?: SocialBehavior;

  /* — timeline — */
  absoluteAgeMa?: { start: number; end: number };

  /* — references & pop culture — */
  notableSpecimens?: string[];
  referencePapers?: string[];
  featuredInMedia?: string[];
  emoji?: string;
}

export type DinosaurDetail = Dinosaur;
