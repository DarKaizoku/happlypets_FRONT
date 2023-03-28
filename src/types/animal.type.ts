import { Soin } from './soin.type';
import { Photo } from './photo.type';
import { TCarnetDeSante } from './carnetDeSsante.type';

export type Animal = {
    id: number;
    nom: string;
    date_de_naissance: Date;
    espece: string;
    race: string;
    genre: string;
    lof: boolean;
    habitat: string;
    carnetdesante: TCarnetDeSante[];
    soin: Soin[];
    photo: Photo[];
};
