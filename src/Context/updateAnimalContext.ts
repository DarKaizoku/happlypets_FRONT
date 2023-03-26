import React from 'react';

export const UpdateAnimalContext = React.createContext({
    idAnimal: '',

    setIdAnimal: (value: string) => {},
});
