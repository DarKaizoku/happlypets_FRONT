import { useContext, useState } from 'react';
import { UserContext } from '../../Context/userContext';
import { Animal } from '../../types/animal.type';
import { TUser } from '../../types/user.type';

export function CompteAnimal() {
    const [preview] = useState<string>('./default-avatar-user.jpg');
    const [preview_animal] = useState<string>('./animal.jpg');
    const { user } = useContext(UserContext);
    const affich = user.animal?.map((data: Animal, i: number) => (
        <div>{data.nom}</div>
    ));
    console.log(affich);

    const affichageAnimal = user.animal?.map((data: Animal, i: number) => (
        <div className="bg-warning">
            <div>nom:{data.nom}</div>
            <div>Espèce:{data.espece}</div>
            <div>Genre:{data.genre}</div>
            <div>Habitat:{data.habitat}</div>
            <div>Date de naissance:{data.id}</div>
            <div>Lof:{data.lof}</div>
            <div>Race:{data.race}</div>
        </div>
    ));

    console.log(affichageAnimal);

    return (
        <div className="container-fluid">
            <div className="container ">{affichageAnimal}</div>
        </div>
    );
}
