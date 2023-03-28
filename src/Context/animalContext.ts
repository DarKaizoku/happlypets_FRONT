import React from 'react';
import { Animal } from '../types/animal.type';

export const AnimalContext = React.createContext({
    animal: {
        nom: '',
        date_de_naissance: new Date(),
        espece: '',
        race: '',
        genre: '',
        lof: true,
        habitat: '',
    } as Animal,
    setUser: (value: Animal) => {},
});
/* const animalUpdateContext = {
    animal: {
        id: '',
        nom: '',
        date_de_naissance: new Date(),
        espece: '',
        race: '',
        genre: '',
        lof: true,
        habitat: '',
        carnetDeSante: '',
    },
    setUser: (value: Animal) => {},
}; */
