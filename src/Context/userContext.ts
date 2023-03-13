import React from 'react';
import { TUser } from '../types/user.type';

export const UserContext = React.createContext({
    user: {
        prenom: '',
        nom: '',
        pseudo: '',
        email: '',
        password: '',
        passwordConfirmed: '',
        adresse: '',
        ville: '',
        codepostal: '',
        departement: '',
        animal: undefined,
    } as TUser,
    setUser: (value: TUser) => {},
});
