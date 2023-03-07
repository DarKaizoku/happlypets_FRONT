import { useEffect, useState } from 'react';
import { Animal } from '../../types/animal.type';
import { TCompte } from '../../types/compte.type';
const urlUser = 'http://localhost:8000/users/profil';
export default function Compte_users({ token }: any) {
        const [compte, setCompte]: any = useState([]);
        const [preview, setPreview] = useState<string>('/reindeer.png');
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
        console.log(compte[0]);

        let affichageAnimal;
        let affichageUser;
        if (compte[0]) {
                affichageUser = compte.map((data: TCompte, i: number) => (
                        <div className='container-fluid text-center'>
                                <div className='container'>
                                        <div className='row '>
                                                <div className='col-sm-12 col-lg-2 bg-warning rounded'>
                                                        <div className=''>
                                                                <img
                                                                        src={
                                                                                preview
                                                                        }
                                                                        alt='example placeholder'
                                                                        className='img-thumbnail bleu'
                                                                        style={{
                                                                                height: 150,
                                                                                width: 150,
                                                                                borderRadius: 100,
                                                                        }}
                                                                />
                                                        </div>
                                                        <div>
                                                                Pseudo :{' '}
                                                                {data.pseudo}
                                                        </div>
                                                        <div>
                                                                Nom : {data.nom}
                                                        </div>
                                                        <div>
                                                                Prénom :{' '}
                                                                {data.prenom}
                                                        </div>
                                                        <div>
                                                                Adresse :{' '}
                                                                {data.adresse}
                                                        </div>
                                                        <div>
                                                                Code Postal :{' '}
                                                                {
                                                                        data.codepostal
                                                                }
                                                                <br />
                                                                Ville :{' '}
                                                                {data.ville}
                                                        </div>
                                                        <div>
                                                                Département :{' '}
                                                                {
                                                                        data.departement
                                                                }
                                                        </div>
                                                </div>

                                                <div className='container col-sm-12 col-lg-9 '>
                                                        <div>
                                                                {data.animal?.map(
                                                                        (
                                                                                data
                                                                        ) => (
                                                                                <div
                                                                                        key={
                                                                                                i
                                                                                        }
                                                                                >
                                                                                        <div className='bg-warning sm rounded lg rounded-pill mt-2'>
                                                                                                <strong>
                                                                                                        nom
                                                                                                        :{' '}
                                                                                                </strong>
                                                                                                {
                                                                                                        data.nom
                                                                                                }
                                                                                                {
                                                                                                        '   '
                                                                                                }
                                                                                                <strong>
                                                                                                        race
                                                                                                        :{' '}
                                                                                                </strong>{' '}
                                                                                                {
                                                                                                        data.race
                                                                                                }
                                                                                                {
                                                                                                        '   '
                                                                                                }
                                                                                                <strong>
                                                                                                        espèce
                                                                                                        :{' '}
                                                                                                </strong>
                                                                                                {
                                                                                                        '   '
                                                                                                }
                                                                                                {
                                                                                                        data.espece
                                                                                                }
                                                                                                {
                                                                                                        '   '
                                                                                                }
                                                                                                <strong>
                                                                                                        {' '}
                                                                                                        genre
                                                                                                        :{' '}
                                                                                                </strong>
                                                                                                {
                                                                                                        '   '
                                                                                                }
                                                                                                {
                                                                                                        data.genre
                                                                                                }
                                                                                                {
                                                                                                        '   '
                                                                                                }
                                                                                                <strong>
                                                                                                        date
                                                                                                        de
                                                                                                        naissance
                                                                                                        :
                                                                                                </strong>
                                                                                                {
                                                                                                        '   '
                                                                                                }
                                                                                                {
                                                                                                        data.date_de_naissance
                                                                                                }
                                                                                                {
                                                                                                        '   '
                                                                                                }
                                                                                                <strong>
                                                                                                        habitat
                                                                                                        :
                                                                                                </strong>
                                                                                                {
                                                                                                        '   '
                                                                                                }
                                                                                                {
                                                                                                        data.habitat
                                                                                                }
                                                                                                {
                                                                                                        '   '
                                                                                                }
                                                                                                <strong>
                                                                                                        {' '}
                                                                                                        carnet
                                                                                                        de
                                                                                                        sante
                                                                                                        :
                                                                                                </strong>
                                                                                                {
                                                                                                        '   '
                                                                                                }
                                                                                                {
                                                                                                        data.carnetDeSante
                                                                                                }
                                                                                        </div>
                                                                                </div>
                                                                        )
                                                                )}
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                ));
        }
        console.log(affichageUser);

        return (
                <div className='container-fluid'>
                        <div className='container '>{affichageUser}</div>
                        <div className='container '>{affichageAnimal}</div>
                </div>
        );
}
