import { Dinosaur } from './dinosaur';

export const DINOSAURS: Dinosaur[] = [
  {
    name: 'Tyrannosaurus rex',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Palais_de_la_Decouverte_Tyrannosaurus_rex_p1050042.jpg',
    period: 'Cretaceous',
    classification: 'Theropod',
    diet: 'Carnivore',
    lengthMeters: 12,
    weightTons: 9,
    topSpeedKmH: 27,
    locomotion: 'Bipedal',
    habitat: 'Subtropical floodplains',
    discoveryYear: 1902,
    discoveredBy: 'Barnum Brown',
    fossilLocations: ['Hell Creek Formation, USA', 'Lance Formation, USA'],
    shortDescription:
      'The king of Late-Cretaceous predators, famed for its bone-crushing bite.',
    description:
      'T. rex stood nearly four metres at the hip and wielded one of the most powerful bites in terrestrial history. ' +
      'Forward-facing eyes provided keen depth perception, while robust legs hint at brief bursts of speed despite its bulk. ' +
      'Juveniles were lankier and faster, filling different ecological niches before bulking up in adulthood. ' +
      'Fossil evidence—including healed bite marks—suggests intraspecific combat and possible scavenging when opportunities arose.',
  },
  {
    name: 'Stegosaurus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Stegosaurus_stenops_mounted_skeleton.jpg',
    period: 'Jurassic',
    classification: 'Thyreophoran',
    diet: 'Herbivore',
    lengthMeters: 9,
    weightTons: 5,
    topSpeedKmH: 7,
    locomotion: 'Quadrupedal',
    habitat: 'Semi-arid woodlands',
    discoveryYear: 1877,
    discoveredBy: 'Othniel Charles Marsh',
    fossilLocations: ['Morrison Formation, USA'],
    shortDescription:
      'Plated plant-eater with a spiked, mace-like tail for defence.',
    description:
      'Stegosaurus is instantly recognisable by the alternating plates that ran along its backbone—likely used for display and thermoregulation. ' +
      'Despite its formidable look, the animal had a tiny brain, roughly walnut-sized relative to body mass. ' +
      'Four long tail spikes (a “thagomizer”) could swing with surprising force, as shown by puncture wounds found in Allosaurus fossils. ' +
      'Its beaked mouth and peg-like teeth were suited to low-growing ferns and cycads.',
  },
  {
    name: 'Triceratops',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Triceratops_BW.jpg',
    period: 'Cretaceous',
    classification: 'Ceratopsian',
    diet: 'Herbivore',
    lengthMeters: 8,
    weightTons: 8,
    topSpeedKmH: 20,
    locomotion: 'Quadrupedal',
    habitat: 'Coastal plains',
    discoveryYear: 1889,
    discoveredBy: 'O. C. Marsh',
    fossilLocations: ['Hell Creek Formation, USA'],
    shortDescription:
      'Three-horned giant with a parrot-like beak and solid frill.',
    description:
      'Triceratops sported two brow horns over a metre long and a stout nose horn, forming an impressive defensive array. ' +
      'The frill was solid bone rather than the air-filled panels of some kin, giving extra protection against predators such as T. rex. ' +
      'Cheek teeth formed a battery capable of shredding tough vegetation. ' +
      'Bone beds suggest these animals sometimes gathered in small herds, especially as juveniles.',
  },
  {
    name: 'Velociraptor',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Velociraptor_mongoliensis.jpg',
    period: 'Cretaceous',
    classification: 'Dromaeosaurid',
    diet: 'Carnivore',
    lengthMeters: 2,
    weightTons: 0.015,
    topSpeedKmH: 40,
    locomotion: 'Bipedal',
    habitat: 'Desert dunes',
    discoveryYear: 1924,
    discoveredBy: 'Henry Fairfield Osborn',
    fossilLocations: ['Djadochta Formation, Mongolia'],
    shortDescription:
      'Small, feathered hunter armed with a sickle-shaped toe claw.',
    description:
      'Real Velociraptors were turkey-sized, feather-covered predators—not the man-sized movie monsters. ' +
      'A stiffened tail acted as a dynamic stabiliser during rapid turns. ' +
      'The recurved toe claw likely pinned prey rather than slashing mid-air. ' +
      'The famous “Fighting Dinosaurs” specimen captures a raptor locked in mortal combat with a Protoceratops, frozen in sandstorm-triggered collapse.',
  },
  {
    name: 'Brachiosaurus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Brachiosaurus_DB.jpg',
    period: 'Jurassic',
    classification: 'Sauropod',
    diet: 'Herbivore',
    lengthMeters: 25,
    weightTons: 40,
    topSpeedKmH: 10,
    locomotion: 'Quadrupedal',
    habitat: 'Riparian forests',
    discoveryYear: 1903,
    discoveredBy: 'Elmer S. Riggs',
    fossilLocations: ['Morrison Formation, USA'],
    shortDescription:
      'Long-necked giant with giraffe-like front-heavy stance.',
    description:
      'Unlike most sauropods, Brachiosaurus had front legs longer than its hind legs, angling the body upward and giving easy access to treetop foliage. ' +
      'Computer models suggest its neck muscles supported high browsing without constant rearing. ' +
      'Even at a leisurely pace, it needed huge daily caloric intake, possibly aided by air sacs that lightened the skeleton. ' +
      'Tracks show herd movement through river-edge woodlands where water and tall conifers abounded.',
  },
  {
    name: 'Spinosaurus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Spinosaurus_aegyptiacus_2.jpg',
    period: 'Cretaceous',
    classification: 'Spinosaurid',
    diet: 'Carnivore',
    lengthMeters: 15,
    weightTons: 7,
    topSpeedKmH: 15,
    locomotion: 'Both',
    habitat: 'River deltas & mangroves',
    discoveryYear: 1912,
    discoveredBy: 'Ernst Stromer',
    fossilLocations: ['Bahariya Formation, Egypt', 'Kem Kem Beds, Morocco'],
    shortDescription:
      'Semi-aquatic predator with a towering sail and croc-like snout.',
    description:
      'Spinosaurus was longer than T. rex but built for a different niche: narrow jaws studded with conical teeth ideal for fish. ' +
      'Paddle-like feet, dense limb bones, and tail-fin vertebrae point to strong swimming ability. ' +
      'Its iconic neural-spine sail may have aided display or temperature control. ' +
      'Fragmentary fossils were bombed in WWII, leaving scientists to piece together its form from scattered remains and newer finds.',
  },
  {
    name: 'Ankylosaurus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Ankylosaurus_skull_AMNH.jpg',
    period: 'Cretaceous',
    classification: 'Ankylosaurid',
    diet: 'Herbivore',
    lengthMeters: 8,
    weightTons: 6,
    topSpeedKmH: 10,
    locomotion: 'Quadrupedal',
    habitat: 'Forest edges',
    discoveryYear: 1906,
    discoveredBy: 'Barnum Brown',
    fossilLocations: ['Hell Creek Formation, USA'],
    shortDescription:
      'Armoured “living tank” wielding a bone-crushing tail club.',
    description:
      'Ankylosaurus sported osteoderms fused into a protective carapace and rings of horn-tipped scutes around the neck. ' +
      'Its tail ended in a massive bony knob that could shatter a predator’s shin. ' +
      'Carnivorous teeth were swapped for leaf-shaped grinders that processed low-fibre plants. ' +
      'Nasal passages wound through the skull, possibly helping to cool the brain or resonate low rumbling calls.',
  },
  {
    name: 'Allosaurus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Allosaurus_fragilis_moulage_MNHN_paleontologie_1.JPG',
    period: 'Jurassic',
    classification: 'Theropod',
    diet: 'Carnivore',
    lengthMeters: 9.5,
    weightTons: 2,
    topSpeedKmH: 30,
    locomotion: 'Bipedal',
    habitat: 'Wooded floodplains',
    discoveryYear: 1877,
    discoveredBy: 'O. C. Marsh',
    fossilLocations: ['Morrison Formation, USA', 'Cleveland-Lloyd Quarry, USA'],
    shortDescription:
      'Dominant Jurassic predator with hatchet-like jaws.',
    description:
      'Allosaurus was the lion of the Jurassic savannah, outnumbering other large carnivores in bone beds. ' +
      'Studies of skull mechanics show it likely slashed with a “hatchet” motion rather than crushing bone. ' +
      'Evidence of healed fractures indicates a rough life filled with combat and risky hunts. ' +
      'Trackways hint at possible group behavior when tackling enormous sauropods.',
  },
  {
    name: 'Diplodocus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/DiplodocusDB.jpg',
    period: 'Jurassic',
    classification: 'Sauropod',
    diet: 'Herbivore',
    lengthMeters: 24,
    weightTons: 15,
    topSpeedKmH: 14,
    locomotion: 'Quadrupedal',
    habitat: 'River floodplains',
    discoveryYear: 1877,
    discoveredBy: 'Samuel W. Williston',
    fossilLocations: ['Morrison Formation, USA'],
    shortDescription:
      'Whip-tailed giant with pencil-thin teeth lining a boxy snout.',
    description:
      'Diplodocus boasted an 11-metre tail possibly capable of supersonic cracks used in display or defence. ' +
      'Peg-like teeth confined to the front of the jaws suggest it stripped soft foliage rather than chewing. ' +
      'Air-filled vertebrae reduced weight, letting this 24-metre animal remain surprisingly agile. ' +
      'Its skull is rare; most museum mounts use casts from the famous “CM 84” specimen.',
  },
  {
    name: 'Parasaurolophus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Life_reconstruction_of_Parasaurolophus_walkeri.png',
    period: 'Cretaceous',
    classification: 'Hadrosaurid',
    diet: 'Herbivore',
    lengthMeters: 10,
    weightTons: 3.5,
    topSpeedKmH: 25,
    locomotion: 'Both',
    habitat: 'Swampy lowlands',
    discoveryYear: 1920,
    discoveredBy: 'William Parks',
    fossilLocations: ['Dinosaur Park Formation, Canada', 'Fruitland Formation, USA'],
    shortDescription:
      'Crested “duck-bill” whose head tube worked like a trombone.',
    description:
      'The backward-sweeping crest of Parasaurolophus housed hollow nasal passages, allowing low-frequency calls that could travel long distances. ' +
      'Juvenile crests were short, lengthening with age to signal maturity. ' +
      'It alternated between two and four legs, grazing on tougher plants thanks to hundreds of continually replacing teeth. ' +
      'Bone microstructure shows rapid growth, reaching adult size in under 10 years.',
  },
  {
    name: 'Iguanodon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Iguanodon_paleoart_2025.png',
    period: 'Cretaceous',
    classification: 'Ornithopod',
    diet: 'Herbivore',
    lengthMeters: 10,
    weightTons: 3.5,
    topSpeedKmH: 24,
    locomotion: 'Both',
    habitat: 'Forest clearings',
    discoveryYear: 1825,
    discoveredBy: 'Gideon Mantell',
    fossilLocations: ['Wealden Group, UK', 'Bernissart, Belgium'],
    shortDescription:
      'Early dinosaur celebrity with thumb-spike defence.',
    description:
      'Iguanodon was only the second dinosaur formally named, laying groundwork for the word “Dinosauria.” ' +
      'Its hallmark thumb spike likely deterred predators or competed for mates. ' +
      'Forelimbs were dexterous enough to grasp foliage, while sturdy hind legs powered moderate sprints. ' +
      'The 1878 Bernissart mine yielded 30 nearly complete skeletons, offering an unprecedented look at herd dynamics.',
  },
  {
    name: 'Pteranodon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Pteranodon_longiceps_mmartyniuk_wiki.png',
    period: 'Cretaceous',
    classification: 'Pterosaur',
    diet: 'Carnivore',
    lengthMeters: 6,           // wingspan, not body length
    weightTons: 0.02,
    topSpeedKmH: 80,           // in sustained glide
    locomotion: 'Bipedal',
    habitat: 'Marine coastal cliffs',
    discoveryYear: 1876,
    discoveredBy: 'O. C. Marsh',
    fossilLocations: ['Niobrara Formation, USA'],
    shortDescription:
      'Ocean-soaring reptile with head crest acting as a rudder.',
    description:
      'Though not a dinosaur, Pteranodon often shares Cretaceous dioramas thanks to spectacular 6-metre wingspans. ' +
      'Hollow bones and membrane wings let it glide for hours over inland seas, snatching fish with toothless beaks. ' +
      'Males boasted larger cranial crests, possibly for display or aerodynamic trim. ' +
      'Articulated fossils show a unique quadrupedal take-off, vaulting skyward with powerful forelimbs.',
  },
  {
    name: 'Apatosaurus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Apatosaurus_louisae_by_durbed.jpg',
    period: 'Jurassic',
    classification: 'Sauropod',
    diet: 'Herbivore',
    lengthMeters: 23,
    weightTons: 22,
    topSpeedKmH: 12,
    locomotion: 'Quadrupedal',
    habitat: 'Floodplain forests',
    discoveryYear: 1877,
    discoveredBy: 'O. C. Marsh',
    fossilLocations: ['Morrison Formation, USA'],
    shortDescription:
      'Massive long-neck once confused with “Brontosaurus.”',
    description:
      'Apatosaurus (meaning “deceptive lizard”) sparked a long-running naming tangle with the beloved Brontosaurus. ' +
      'Neck vertebrae were heavy and rugged, hinting at strong muscles for lateral sweeping rather than extreme vertical reach. ' +
      'Tail bones formed a flexible whip, possibly used in intraspecific signalling. ' +
      'Trackways indicate herding, with juveniles encircled by adults for protection.',
  },
  {
    name: 'Pachycephalosaurus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Pachycephalosaurus_skull.JPG',
    period: 'Cretaceous',
    classification: 'Marginocephalian',
    diet: 'Herbivore',
    lengthMeters: 4.5,
    weightTons: 0.45,
    topSpeedKmH: 20,
    locomotion: 'Bipedal',
    habitat: 'Woodland margins',
    discoveryYear: 1943,
    discoveredBy: 'Charles W. Gilmore',
    fossilLocations: ['Hell Creek Formation, USA'],
    shortDescription:
      'Dome-headed biped possibly used head-butting displays.',
    description:
      'Pachycephalosaurus possessed a 25-centimetre thick skull roof comprised of dense bone. ' +
      'Whether they rammed head-on or sparred flank-to-flank remains debated, but cranial lesions show frequent impacts. ' +
      'Leaf-shaped teeth suggest a mixed diet of soft plants and fruit. ' +
      'So far, only skulls and scattered post-cranial bones are known, making full-body reconstructions educated guesses.',
  },
  {
    name: 'Gallimimus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gallimimus_Steveoc86_%28flipped%29.jpg',
    period: 'Cretaceous',
    classification: 'Ornithomimid',
    diet: 'Omnivore',
    lengthMeters: 6,
    weightTons: 0.35,
    topSpeedKmH: 56,
    locomotion: 'Bipedal',
    habitat: 'Semi-arid river basins',
    discoveryYear: 1964,
    discoveredBy: 'Osmólska, Roniewicz & Barsbold',
    fossilLocations: ['Nemegt Formation, Mongolia'],
    shortDescription:
      'Ostrich-like sprinter with toothless beak and large eyes.',
    description:
      'Gallimimus means “chicken mimic,” but its build resembles a modern ostrich with longer tail counterbalance. ' +
      'Hollow bones and powerful legs enabled speeds up to 56 km/h, ranking it among the fastest dinosaurs. ' +
      'Beak keratin impressions hint at a rhamphotheca suited to plucking plants, insects, and small vertebrates. ' +
      'Eye sockets faced slightly forward, perhaps granting better binocular vision for high-speed navigation.',
  },
  {
    name: 'Deinonychus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Deinonychus_Restoration.png',
    period: 'Cretaceous',
    classification: 'Dromaeosaurid',
    diet: 'Carnivore',
    lengthMeters: 3.4,
    weightTons: 0.07,
    topSpeedKmH: 30,
    locomotion: 'Bipedal',
    habitat: 'Woodland edges',
    discoveryYear: 1969,
    discoveredBy: 'John Ostrom',
    fossilLocations: ['Cloverly Formation, USA'],
    shortDescription:
      'The raptor that sparked modern images of agile killers.',
    description:
      'Deinonychus rewrote the dinosaur playbook when Ostrom revealed a sleek, dynamic predator built for speed and slashing claws. ' +
      'Its sickle-shaped toe claw gripped prey like a grappling hook while strong forelimbs restrained victims. ' +
      'Rather than crushing bone, its jaws delivered quick, lethal bites. ' +
      'The discovery triggered the dinosaur renaissance, inspiring visions of cunning pack hunters.',
  },
  {
    name: 'Dilophosaurus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Dilophosaurus_wetherilli.PNG',
    period: 'Jurassic',
    classification: 'Dilophosaurid',
    diet: 'Carnivore',
    lengthMeters: 7,
    weightTons: 0.45,
    topSpeedKmH: 35,
    locomotion: 'Bipedal',
    habitat: 'River floodplains',
    discoveryYear: 1942,
    discoveredBy: 'Sam Welles',
    fossilLocations: ['Kayenta Formation, USA'],
    shortDescription:
      'Twin-crested hunter from the Early Jurassic.',
    description:
      'Dilophosaurus carried two delicate head crests likely used for display rather than combat. ' +
      'Long arms with three-clawed hands helped grasp slippery prey along stream banks. ' +
      'Lightly built jaws hint at swift strikes instead of bone-crunching bites. ' +
      'Tracks suggest it may have roamed in small groups near winding rivers.',
  },
  // {
  //   name: 'Mosasaurus',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Mosasaurus_hoffmannii.jpg',
  //   period: 'Cretaceous',
  //   classification: 'Mosasaurid',
  //   diet: 'Carnivore',
  //   lengthMeters: 17,
  //   weightTons: 14,
  //   topSpeedKmH: 30,
  //   locomotion: 'Aquatic',
  //   habitat: 'Shallow seas',
  //   discoveryYear: 1764,
  //   discoveredBy: 'Peter Camper',
  //   fossilLocations: ['Maastricht Formation, Netherlands'],
  //   shortDescription:
  //     'Oceanic apex predator with a double-hinged jaw.',
  //   description:
  //     'Mosasaurus ruled Late Cretaceous waters with a powerful tail and flippers reminiscent of modern whales. ' +
  //     'Double-hinged jaws and recurved teeth trapped fish, turtles, and even smaller mosasaurs. ' +
  //     'Fossils from Europe and North America show it prowled warm seas worldwide. ' +
  //     'Its success ended only with the mass extinction that swept away marine reptiles.',
  // },
];
