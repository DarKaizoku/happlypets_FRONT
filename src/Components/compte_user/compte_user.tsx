import { useEffect, useState } from 'react';
import { TCompte } from '../../types/compte.type';

export default function Compte_users({ setToken, token }: any) {
    const urlUser = 'http://localhost:3000/users/profil';
    const [compte, setCompte]: any = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    useEffect(() => {
        fetch(urlUser, options)
            .then((response) => response.json())
            .then((donnee) => setCompte(donnee))
            .catch((erreur) => `${erreur}`);
    }, [token]);
    let affichageUser;
    if (compte[0]) {
        affichageUser = compte.map((data: TCompte, i: number) => (
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
                {data.animal?.map((data) => (
                    <div>{data.nom}</div>
                ))}
                ;
                <br />
                <br />
            </div>
        ));
    }
    console.log(affichageUser);

    return affichageUser;
}
