import { useContext, useState } from 'react';
import { UserContext } from '../../Context/userContext';
import { Animal } from '../../types/animal.type';

export function CompteAnimal({ setPage, idAnimal }: any) {
    const [preview] = useState<string>('./default-avatar-user.jpg');
    const [preview_animal] = useState<string>('./animal.jpg');
    const { user } = useContext(UserContext);
    const affich = user.animal?.map((data: Animal, i: number) => (
        <div>{data.nom}</div>
    ));

    const updateAnimal = (e: React.SyntheticEvent) => {
        setPage('animalUpdate');
    };
    console.log(idAnimal);

    const affichageAnimal = user.animal?.map((data: Animal, i: number) => (
        <div className="bg-warning">
            <div>nom:{data.nom}</div>
            <div>Espèce:{data.espece}</div>
            <div>Genre:{data.genre}</div>
            <div>Habitat:{data.habitat}</div>
            <div>Date de naissance:{data.id}</div>
            <div>Lof:{data.lof}</div>
            <div>Race:{data.race}</div>
            <div>
                <div className="col-2">
                    <button className="couleur border border-0 rounded mt-2 me-2">
                        <i className="bi bi-x-lg"></i>
                    </button>
                    <button
                        className="couleur border border-0 rounded mt-2"
                        onClick={(e) => updateAnimal(e)}
                        type="button"
                    >
                        <i className="bi bi-pencil-fill"></i>
                        Modifier
                    </button>
                </div>
            </div>
        </div>
    ));

    console.log(affichageAnimal);

    return (
        <div className="container-fluid">
            <div className="container ">{affichageAnimal}</div>
        </div>
    );
}
