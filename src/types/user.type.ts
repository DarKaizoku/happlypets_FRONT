import { Animal } from './animal.type';

export type User = {
        prenom: string;
        nom: string;
        pseudo: string;
        email: string;
        password: string;
        adresse: string;
        ville: string;
        codepostal: 0;
        departement: string;

        animal: Animal[] | undefined;
};
