import { useContext } from 'react';

import { UpdateAnimalContext } from '../../Context/updateAnimalContext';
import { UserContext } from '../../Context/userContext';
import { Animal } from '../../types/animal.type';

export default function GetSoin() {
    const { user } = useContext(UserContext);
    const { idAnimal } = useContext(UpdateAnimalContext);
    const animalId = +idAnimal;
    const idSoin = user.animal
        .find((elm: Animal) => elm.id === animalId)
        ?.soin.map((data, i: number) => (
            <tbody>
                <td>{data.activite}</td>
                <td>{data.date}</td>
            </tbody>
        ));
    const idCarnet = user.animal
        .find((elm: Animal) => elm.id === animalId)
        ?.photo.map((data, i: number) => (
            <tbody>
                {/*     <td>{data.vaccin}</td>
                <td>{data.date_vaccin}</td>
                <td>{data.poids}</td>
                <td>{data.steriliser}</td> */}
                <td>{data.url}</td>
            </tbody>
        ));
    return (
        <div className="container table-responsive">
            <caption className="text-black">Soins</caption>
            <table className="table bg-warning rounded" style={{ width: 400 }}>
                <thead>
                    <tr>
                        <td>
                            <strong>Activité</strong>
                        </td>
                        <td>
                            <strong>Date</strong>
                        </td>
                    </tr>
                </thead>
                {idSoin}
            </table>
        </div>
    );
}
