export type Period = 'Triassic' | 'Jurassic' | 'Cretaceous';
export type Diet   = 'Carnivore' | 'Herbivore' | 'Omnivore';
export type Locomotion = 'Bipedal' | 'Quadrupedal' | 'Both';


/**
 * Basic palaeo-facts you might want to show in a card / table
 * (all values are rounded mid-range estimates from the literature).
 */
export interface Dinosaur {
  // “identity”
  name: string;
  image: string;

  // natural-history facts
  period: Period;
  classification: string;        // informal group/clade (“Theropod”, “Sauropod” …)
  diet: Diet;
  lengthMeters: number;          // mid-range adult length
  weightTons: number;            // mid-range adult mass
  topSpeedKmH: number;           // best-guess land (or flight) speed
  locomotion: Locomotion;        // typical stance/gait
  habitat: string;               // plain-language setting

  // discovery metadata
  discoveryYear: number;
  discoveredBy: string;
  fossilLocations: string[];     // notable formations/sites

  // UX text
  shortDescription: string;      // 1-sentence blurb
  description: string;           // 3-to-4 sentence summary
}
