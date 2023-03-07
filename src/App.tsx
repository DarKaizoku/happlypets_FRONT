import React, { useEffect, useState } from 'react';
import './App.css';
import Compte_users from './components/compte_user/compte_user';
import Navbar from './components/navbar/navbar';
import { TUser } from './types/user.type';

const baseUrl = 'http://localhost:8000/users/users';
function App() {
    const [data, setData]: any = useState([]);

    const [token, setToken] = useState('');

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
                animal :
                <br />
                <br />
            </div>
        ));
    }
    return (
        <div>
            <Navbar setToken={setToken} token={token} />
            <Compte_users token={token} />
            {/*     <FormulaireAnimal />
            <FormulaireUser token={token} /> */}
            <div className="text-center">{affichage}</div>;
        </div>
    );
}

export default App;
