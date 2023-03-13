import React from 'react';
import { TUser } from '../types/user.type';

export const UserContext = React.createContext({
    user: null,
    setUser: (value: TUser) => {},
});
