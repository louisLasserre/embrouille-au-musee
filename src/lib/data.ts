export interface IPaintingsData {
  name: string;
  description: string;
  fileName: string;
  itemId: number;
}

export const paintingsData: IPaintingsData[] = [
  {
    name: "Les Héritiers",
    description: "Eugène Buland - 1887",
    fileName: "les-heritiers",
    itemId: 1
  },
  {
    name: "Portrait de Madame SAMAZEUILH",
    description: "Guillaume Alaux - 1904",
    fileName: "madame-samazeuilh",
    itemId: 2
  },
  {
    name: "Alfred Roll autoportrait",
    description: "Alfred Roll - 1885",
    fileName: "alfred-roll",
    itemId: 3
  }

]
