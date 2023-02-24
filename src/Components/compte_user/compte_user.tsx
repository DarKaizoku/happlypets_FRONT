import { useEffect, useState } from 'react';
import { TCompte } from '../../types/compte.type';
const urlUser = 'http://localhost:3000/users/profil';
export default function Compte_users({ token }: any) {
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
            <div key={i} className="row align-items-center">
                <div className="col-2 rounded bg-warning">
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
                </div>
                <div className="col-8  ms-5 badge text-center text-dark rounded bg-warning">
                    {data.animal?.map((data) => (
                        <div>
                            <div className="fs-6">
                                nom :{data.nom}
                                {'\n'}
                                espèce :{data.espece}
                                {'\n'}
                                race :{data.race}
                                {'\n'}
                                genre :{data.genre}
                                {'\n'}
                                date de naissance :{data.date_de_naissance}
                                {'\n'}
                                habitat : {data.habitat}
                            </div>
                        </div>
                    ))}

                    <br />
                    <br />
                </div>
            </div>
        ));
    }

    return (
        <div className="container-fluid">
            <div className="container ">{affichageUser}</div>
        </div>
    );
}
