import { useEffect, useState } from 'react';
import './App.css';
import { CompteAnimal } from './Components/compteAnimal/compteAnimal';
import Soin from './Components/compteAnimal/soin';
import CompteUsers from './Components/compteUser/compteUser';
import { DataUsertoUpdate } from './Components/compteUser/dataUsertoUpdate';
import { UpdateAnimal } from './Components/formulaireAnimal/animalUpdate';
import CarnetSante from './Components/formulaireAnimal/carnetSante';
import { FormulaireAnimal } from './Components/formulaireAnimal/formulaire';
import { FormulaireUser } from './Components/formulaireUser/formulaireUser';
import { ImageAccueil } from './Components/imageAccueil';
import Navbar from './Components/navbar/navbar';

import { UpdateAnimalContext } from './Context/updateAnimalContext';
import { UserInit, UserContext } from './Context/userContext';
import { TUser } from './types/user.type';

const baseUrl = 'http://localhost:8000/users/profil';

function App() {
    const TOKEN = localStorage.getItem('token')!;

    const [user, setUser] = useState<TUser>({} as TUser);
    const [page, setPage] = useState<string>('');
    const [idAnimal, setIdAnimal] = useState<string>('');

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
    };

    useEffect(() => {
        fetch(baseUrl, options)
            .then((response) => response.json())
            .then((donnee) => setUser(donnee))
            .catch((erreur) => `${erreur}`);
    }, [page]);

    const logout = () => {
        localStorage.clear();
        setUser(UserInit);
        window.location.reload();
    };

    return (
        <div>
            <UserContext.Provider value={{ user, setUser }}>
                <UpdateAnimalContext.Provider
                    value={{
                        idAnimal,
                        setIdAnimal,
                    }}
                >
                    <Navbar setPage={setPage} logout={logout} />
                    {page === '' && <ImageAccueil />}
                    {page === 'compte' && (
                        <CompteUsers
                            setPage={setPage}
                            logout={logout}
                            TOKEN={TOKEN}
                        />
                    )}
                    {page === 'soin' && (
                        <Soin setPage={setPage} TOKEN={TOKEN} />
                    )}
                    {page === 'update' && <DataUsertoUpdate />}
                    {page === 'animalUpdate' && (
                        <UpdateAnimal TOKEN={TOKEN} setPage={setPage} />
                    )}
                    {page === 'compteanimal' && (
                        <CompteAnimal
                            setPage={setPage}
                            page={page}
                            TOKEN={TOKEN}
                        />
                    )}
                    {page === 'carnetDeSante' && <CarnetSante />}
                    {page === 'formulaire_user' && <FormulaireUser />}
                    {page === 'animal' && (
                        <FormulaireAnimal TOKEN={TOKEN} setPage={setPage} />
                    )}
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
            </UserContext.Provider>
        </div>
    );
}

export default App;
