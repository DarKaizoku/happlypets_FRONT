import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Compte_users from './components/compte_user/compte_user';
import { DataUsertoUpdate } from './components/compte_user/dataUsertoUpdate';
import CarnetSante from './components/formulaire_animal/carnet_sante';
import { FormulaireAnimal } from './components/formulaire_animal/formulaire';
import { FormulaireUser } from './components/formulaire_user/formulaire_user';
import Login from './components/Login';
import Navbar from './components/navbar/navbar';
import { TokenContext } from './Context/tokenContext';
import { UserContext } from './Context/userContext';
import { TUser } from './types/user.type';

const baseUrl = 'http://localhost:8000/users/profil';
function App() {
    const [user, setUser] = useState<TUser>({} as TUser);
    //const [dataUser, setDataUser]: any = useState();
    const [page, setPage]: any = useState('');

    const [token, setToken] = useState('');
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };

    //console.log('public\default-avatar-user.jpg'.);

    useEffect(() => {
        fetch(baseUrl, options)
            .then((response) => response.json())
            .then((donnee) => setUser(donnee))
            .catch((erreur) => `${erreur}`);
    }, [token]);
    console.log('token', token);

    return (
        <div>
            <UserContext.Provider value={{ user, setUser }}>
                <TokenContext.Provider value={{ token, setToken }}>
                    <Navbar setPage={setPage} />
                    {page === 'compte' && (
                        <Compte_users
                            token={token}
                            setPage={setPage}
                            //setUser={setDataUser}
                        />
                    )}
                    {page === 'update' && (
                        <DataUsertoUpdate
                        //token={token}
                        //user={dataUser}
                        //updateUser={setDataUser}
                        />
                    )}
                    {page === 'carnetDeSante' && <CarnetSante />}
                    {page === 'formulaire_user' && <FormulaireUser />}
                    {page === 'animal' && <FormulaireAnimal />}
                    {page === 'erreur401' && (
                        <div
                            className="container mx-auto alert alert-warning m-auto alert-dismissible fade show"
                            role="alert"
                        >
                            <strong>ERREUR!</strong> Compte inexistant !?!
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                                onClick={(e) => setPage('login')}
                            ></button>
                        </div>
                    )}
                </TokenContext.Provider>
            </UserContext.Provider>
        </div>
    );
}

export default App;
