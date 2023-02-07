export interface IPaintingsData {
  name: string;
  description: string;
  fileName: string;
  itemId: number;
  clueCollect: string;
  clueReturn: string;
  missingItemId: number;

}

export const paintingsData: IPaintingsData[] = [
  {
    name: "Les Héritiers",
    description: "Eugène Buland - 1887",
    fileName: "les-heritiers",
    itemId: 1 ,
    clueCollect: "Mais que fait ce foulard ici ?!",
    clueReturn: "Je vous en supplie, retrouvez mon testament !",
    itemId: 1,
    missingItemId: 2
  },
  {
    name: "Portrait de Madame Samazeuilh",
    description: "Guillaume Alaux - 1904",
    fileName: "madame-samazeuilh",
    itemId: 2,
    clueCollect: "Mais que fait ce foulard ici ?!",
    clueReturn :"Partez à la recherche de mon ravissant chapeau !",
    missingItemId: 3
  },
  {
    name: "Alfred Roll autoportrait",
    description: "Alfred Roll - 1885",
    fileName: "alfred-roll",
    itemId: 3,
    clueCollect: "Mais que fait ce foulard ici ?!",
    clueReturn:"Dépêchez vous de retrouver mon foulard !",

    missingItemId: 1
  }

]
