import { Animal } from './animal.type';

export type TCompte = {
    prenom: string;
    nom: string;
    pseudo: string;
    email: string;
    adresse: string;
    ville: string;
    codepostal: string;
    departement: string;
    animal: Animal[] | null;
};
