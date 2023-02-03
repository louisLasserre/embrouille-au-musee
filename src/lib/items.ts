

export interface IItemData {
  id: number;
  name: string;
  fileName: string;
}

export const itemsData =  [
  {
    id: 1,
    name: "Noeud de Alfred Roll",
    fileName: "noeud"
  },
  {
    id: 2,
    name: "Testament",
    fileName: "testament"
  },
  {
    id: 3,
    name: "Chapeau de Madame Samazeuilh",
    fileName: "chapeau"
  },
] satisfies IItemData[]
