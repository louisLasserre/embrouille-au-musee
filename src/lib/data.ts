export interface IPaintingsData {
  name: string;
  description: string;
  fileName: string;
  itemId: number;
  clueCollect: string;
  clueReturn: string;
  missingItemId: number;
  transcription: string;
  reactionVideos: videosUrls[];
  remerciement: string;

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
    itemId: 1,
    clueCollect: "Mais que fait ce foulard ici ?!",
    clueReturn: "Je vous en supplie, retrouvez mon testament !",
    remerciement: "Dieu soit loué mon testament ! Je vous en sais gré !",
    transcription: "Ô rage, ô désespoir ! Le testament de notre défunt père a disparu et a été remplacé par ce vieux foulard ! Que dirait notre créateur Eugène Buland ! C’est sûrement cette… cette… nigaude arrogante à l’ego aussi gros que son chapeau, qui nous l’a dérobé, cette madame Samazeuilh ! À quoi rime désormais notre nom les “Héritiers” !? Oh ! Vous êtes là !? Je vous en supplie ! Enlevez-moi ce foulard et retrouvez notre testament !",
    missingItemId: 2,
    reactionVideos: [
      {
        name: "placedItems",
        fileName: "test/test2"
      },
      {
        name: "clueGetItems",
        fileName: "test/test6"
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
    clueReturn: "Partez à la recherche de mon ravissant chapeau !",
    transcription: "Eh vous là ! Oui vous, regardez-moi, ne suis-je pas sublime ? Mon peintre, Guillaume Alaux, a parfaitement su retranscrire ma beauté ! Ce jour-là, je portais mon ravissant chape… Mais … MON CHAPEAU A DISPARU ! Et puis, que fait ce vieux truc sur ma figure ! C’est ridicule, je ne suis plus écolière ! Je suis sûre que c’est une affaire de ce prétentieux narcissique Alfred Roll, c’est tout à fait son style ! Visiteur, partez diligemment à sa recherche, retirez-moi ce testament de la tête, je ne peux pas sortir en cheveux, c’est indécent !",
    remerciement: 'Enfin, mon chapeau ! Vous en avez mis du temps !',
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
    name: "Autoportrait",
    description: "Alfred Roll - 1885",
    fileName: "alfred-roll",
    itemId: 3,
    clueCollect: "Ce chapeau hideux ne m’appartient pas !",
    clueReturn: "Dépêchez vous de retrouver mon foulard !",
    transcription: "MISÉCORDE ! Tout doit être parfait ! le visiteur ne doit pas voir que mon foulard a disparu… Et ce chapeau, que fait-il sur moi ? Quelle faute de goût ! Sous leurs airs pleurnichards, ne serait-ce pas les Héritiers qui convoitent mon foulard pour en faire un mouchoir ?!  Oh vous qui êtes là ! Hâtez vous de redorer mon image ! Et par la même occasion, ôtez-moi cet affreux chapeau !",
    remerciement: 'Il était temps ! Ma tenue manquait de finesse !',
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

export const team = [
  {
    name: 'Auréliane Dor',
    network: 'https://www.linkedin.com/in/aur%C3%A9liane-dor-992967200/',
    role: 'Développement',
    img: '/pictures/aureliane.png'
  },
  {
    name: 'Bastien Garnier',
    network: 'https://www.linkedin.com/in/bastiengarnier19/',
    img: '/pictures/bastien.png',
    role: 'Animation / Monteur Vidéo'
  },
  {
    name: 'Emma Guillaume',
    network: 'https://www.linkedin.com/in/emma-guillaume-7122a6202/',
    img: '/pictures/emma.png',
    role: 'Developpement / Design'
  },
  {
    name: 'Louis Lasserre',
    network: 'https://www.linkedin.com/in/louis-lasserre-0a8308222/',
    img: '/pictures/louis.png',
    role: "Développement"
  },
  {
    name: 'Safiya Seddiki',
    network: 'https://www.linkedin.com/in/safiya-seddiki/',
    img: '/pictures/safiya.png',
    role: 'Rédaction / Design'
  }
]
