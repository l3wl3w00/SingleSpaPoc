export interface Comment {
  author: string;
  text: string;
  date: string;
}

export const COMMENTS: Record<string, Comment[]> = {
  "Tyrannosaurus rex": [
    {
      author: "PaleoFan42",
      text: "This guy had the most powerful bite!",
      date: "2024-05-01",
    },
    {
      author: "DinoLover",
      text: "Imagine seeing one in real life... terrifying!",
      date: "2024-05-03",
    },
  ],
  Stegosaurus: [
    {
      author: "PlateMaster",
      text: "Those back plates look awesome.",
      date: "2024-05-02",
    },
  ],
};
