export interface IPaintingsData {
  name: string;
  description: string;
  fileName: string;
  itemId: number;
  clueCollect: string;
  clueReturn: string;
  missingItemId: number;
  transcription: string
  reactionVideos: videosUrls[]

}
export type TVideosName = 'placedItems' | 'clueGetItems' | 'cluePlaceItems';
export interface videosUrls {
  name: TVideosName;
  fileName: string;
}

export const paintingsData: IPaintingsData[] = [
  {
    name: "Les Héritiers",
    description: "Eugène Buland - 1887",
    fileName: "les-heritiers",
    itemId: 1 ,
    clueCollect: "Mais que fait ce foulard ici ?!",
    clueReturn: "Je vous en supplie, retrouvez mon testament !",
    transcription: "Transcription: Ô rage, ô désespoir ! Le testament de notre défunt père a disparu ! Que dirait notre créateur Eugène Buland ! C’est sûrement cette… cette… nigaude arrogante à l’ego aussi gros que son chapeau, qui nous l’a dérobée cette madame Samazeuilh ! (Sanglots) A quoi rime désormais notre nom les “Héritiers” !? (Soupire et redevient désespéré) Oh, vous êtes là !? Je vous en supplie ! Retrouvez notre testament !",
    missingItemId: 2,
    reactionVideos: [
      {
        name: "placedItems",
        fileName: "test/test6"
      },
      {
        name: "clueGetItems",
        fileName: "test/test2"
      },
      {
        name: "cluePlaceItems",
        fileName: "test/test9"
      },
    ]
  },
  {
    name: "Portrait de Madame Samazeuilh",
    description: "Guillaume Alaux - 1904",
    fileName: "madame-samazeuilh",
    itemId: 2,
    clueCollect: "Que fait cette feuille sur ma tête ?!",
    clueReturn:"Partez à la recherche de mon ravissant chapeau !",
    transcription: "Transcription: Et vous là ! Oui vous, regardez moi, ne suis-je pas sublime ? Mon peintre Guillaume Alaux, à parfaitement su retranscrire ma beauté ! Ce jour là , je portais mon ravissant chape… Mais … MON CHAPEAUX A DISPARU ! Je soupçonne ce prétentieux narcissique Alfred Roll ! C’est tout à fait son style ! Visiteur, partez diligemment à sa recherche, je ne peux pas sortir en cheveux, c’est indécent !",
    missingItemId: 3,
    reactionVideos: [
      {
        name: "placedItems",
        fileName: "madame-samazeuilh-placed-item"
      },
      {
        name: "clueGetItems",
        fileName: "madame-samazeuilh-clue-get-item"
      },
      {
        name: "cluePlaceItems",
        fileName: "madame-samazeuilh-clue-place-item"
      },
    ]
  },
  {
    name: "Alfred Roll autoportrait",
    description: "Alfred Roll - 1885",
    fileName: "alfred-roll",
    itemId: 3,
    clueCollect: "Ce chapeau hideux ne m’appartient pas !",
    clueReturn:"Dépêchez vous de retrouver mon foulard !",
    transcription: "Transcription: MISÉRICORDE ! Tout doit être parfait ! Le visiteur ne doit pas voir que mon foulard a disparu … Quelle faute de goût ! Sous leurs airs pleurnichards, ne serait-ce pas les Héritiers qui convoitent mon foulard pour en faire un mouchoir ?! Oh vous qui êtes là ! Dépêchez/Hâter vous de redorer mon image !",
    missingItemId: 1,
    reactionVideos: [
      {
        name: "placedItems",
        fileName: "alfred-roll-placed-item"
      },
      {
        name: "clueGetItems",
        fileName: "alfred-roll-clue-get-item"
      },
      {
        name: "cluePlaceItems",
        fileName: "alfred-roll-clue-place-item"
      },
    ]
  }

]
