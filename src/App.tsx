import React, { useEffect, useState } from 'react';
import './App.css';
import { FormulaireAnimal } from './components/formulaire_animal/formulaire';
import './App.css';
import Navbar from './components/navbar/navbar';
import { FormulaireUser } from './components/formulaire_user/formulaire_user';
import { TUser } from './types/user.type';

const baseUrl = 'http://localhost:3000/users/users';
function App() {
    const [data, setData]: any = useState([]);

    const [token, setToken] = useState<string>();

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };

    useEffect(() => {
        fetch(baseUrl, options)
            .then((response) => response.json())
            .then((donnee) => setData(donnee))
            .catch((erreur) => `${erreur}`);
    }, [token]);
    console.log('token', token);

    console.log('data', data);

    let affichage;

    if (data[0]) {
        affichage = data.map((data: TUser, i: number) => (
            <div key={i}>
                nom : {data.nom}
                <br />
                prénom : {data.prenom}
                <br />
                pseudo : {data.pseudo}
                <br />
                adresse : {data.adresse}
                <br />
                code postal : {data.codepostal}
                <br />
                ville : {data.ville}
                <br />
                departement : {data.departement}
                <br />
                <br />
                <br />
            </div>
        ));
    }

    return (
        <div>
            <Navbar setToken={setToken} />
            <FormulaireAnimal />
            <FormulaireUser token={token} />
            <div className="text-center">{affichage}</div>;
        </div>
    );
}

export default App;
