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
    missingItemId: 2
  },
  {
    name: "Portrait de Madame Samazeuilh",
    description: "Guillaume Alaux - 1904",
    fileName: "madame-samazeuilh",
    itemId: 2,
    clueCollect: "Que fait cette feuille sur ma tête ?!",
    clueReturn :"Partez à la recherche de mon ravissant chapeau !",
    missingItemId: 3
  },
  {
    name: "Alfred Roll autoportrait",
    description: "Alfred Roll - 1885",
    fileName: "alfred-roll",
    itemId: 3,
    clueCollect: "Ce chapeau hideux ne m’appartient pas !",
    clueReturn:"Dépêchez vous de retrouver mon foulard !",
    missingItemId: 1
  }

]
