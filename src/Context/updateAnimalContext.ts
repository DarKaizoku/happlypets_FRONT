import { title } from 'process';
import react from 'react';

export const updateAnimalContext = react.createContext({
    idAnimal: {
        title: '',
    },
    setIdAnimal: (value: string) => {},
});
