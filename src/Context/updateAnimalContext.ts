import { title } from 'process';
import react from 'react';

export const updateAnimalContext = react.createContext({
    idAnimal: '',
    setIdAnimal: (value: number) => {},
});
