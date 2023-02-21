import React, { useEffect, useState } from 'react';
import './App.css';
import { FormulaireAnimal } from './components/formulaire_animal/formulaire';
import { User } from './types/user.type';
import './App.css';
import Navbar from './components/navbar/navbar';

const baseUrl = 'http://localhost:3000/animal';
function App() {
        const [data, setData]: any = useState([]);

        const [token, setToken] = useState<string>();

        /*        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${token?.access_token}`); */

        //const options = { method: 'GET', headers: headers };

        useEffect(() => {
                fetch(baseUrl, {
                        headers: {
                                Content_Type: 'application/json',
                                Authorization: `Bearer ${token}`,
                        },
                })
                        .then((response) => response.json())
                        .then((donnee) => setData(donnee))
                        .catch((erreur) => `${erreur}`);
        }, []);

        console.log('token', token);

        console.log('data', data);

        let affichage;

        if (data[0]) {
                affichage = data.map((data: User) => (
                        <div>
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
                        <div className='text-center'>{affichage}</div>;
                </div>
        );
}

export default App;
