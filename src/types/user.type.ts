import { TAnimal } from './animal.type';

export type TUser = {
        prenom: string;
        nom: string;
        pseudo: string;
        email: string;
        password: string;
        passwordConfirmed: string;
        adresse: string;
        ville: string;
        codepostal: string;
        departement: string;

        animal: TAnimal[] | undefined;
};
