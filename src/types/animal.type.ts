import { Soin } from './soin.type';

export type Animal = {
    id: number;
    nom: string;
    date_de_naissance: Date;
    espece: string;
    race: string;
    genre: string;
    lof: boolean;
    habitat: string;
    carnetDeSante: string;
    soin: Soin[];
};
