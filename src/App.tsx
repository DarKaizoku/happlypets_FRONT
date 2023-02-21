import React, { useEffect, useState } from 'react';
import './App.css';
import { User } from './types/user.type';

const baseUrl = 'http://localhost:3000/users/users';
function App() {
        const [data, setData]: any = useState([]);

        useEffect(() => {
                fetch(baseUrl)
                        .then((response) => response.json())
                        .then((donnee) => setData(donnee))
                        .catch((erreur) => `${erreur}`);
        }, []);

        console.log(data);

        const affichage = data.map((data: User) => (
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

        return <div className='text-center'>{affichage}</div>;
}

export default App;
