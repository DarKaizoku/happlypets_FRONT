import { useEffect, useState } from 'react';
import './App.css';
import Compte_users from './Components/compte_user/compte_user';
import { DataUsertoUpdate } from './Components/compte_user/dataUsertoUpdate';
import { FormulaireAnimal } from './Components/formulaire_animal/formulaire';
import { FormulaireUser } from './Components/formulaire_user/formulaire_user';
import Navbar from './Components/navbar/navbar';
import CarnetSante from './Components/formulaire_animal/carnet_sante';
import { TokenContext } from './Context/tokenContext';
import { UserContext, UserInit } from './Context/userContext';
import { TUser } from './types/user.type';
import { CompteAnimal } from './Components/compte_animal/compteAnimal';
import { UpdateAnimal } from './Components/formulaire_animal/animalUpdate';
import { UpdateAnimalContext } from './Context/updateAnimalContext';

const baseUrl = 'http://localhost:8000/users/profil';
function App() {
    const [user, setUser] = useState<TUser>({} as TUser);
    //const [dataUser, setDataUser]: any = useState();
    const [page, setPage] = useState('');
    const [idAnimal, setIdAnimal] = useState('');
    const [token, setToken] = useState('');
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };

    //console.log('public\default-avatar-user.jpg'.);

    const logout = () => {
        setToken('');
        setUser(UserInit);
        window.location.reload();
    };
    useEffect(() => {
        fetch(baseUrl, options)
            .then((response) => response.json())
            .then((donnee) => setUser(donnee))
            .catch((erreur) => `${erreur}`);
    }, [token]);

    return (
        <div>
            <UserContext.Provider value={{ user, setUser }}>
                <TokenContext.Provider value={{ token, setToken }}>
                    <UpdateAnimalContext.Provider
                        value={{ idAnimal, setIdAnimal }}
                    >
                        <Navbar setPage={setPage} logout={logout} />
                        {page === 'compte' && (
                            <Compte_users setPage={setPage} logout={logout} />
                        )}
                        {page === 'update' && (
                            <DataUsertoUpdate

                            //token={token}
                            //user={dataUser}
                            //updateUser={setDataUser}
                            />
                        )}
                        {page === 'animalUpdate' && <UpdateAnimal />}
                        {page === 'compteanimal' && (
                            <CompteAnimal setPage={setPage} />
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
                    </UpdateAnimalContext.Provider>
                </TokenContext.Provider>
            </UserContext.Provider>
        </div>
    );
}

export default App;
