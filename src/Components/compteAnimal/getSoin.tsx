import { useContext, useState, useEffect } from 'react';
import { TreeChildren } from 'typeorm';
import { UpdateAnimalContext } from '../../Context/updateAnimalContext';
import { UserContext } from '../../Context/userContext';
import { Animal } from '../../types/animal.type';
import { Soin } from '../../types/soin.type';

export default function GetSoin() {
    const { idAnimal } = useContext(UpdateAnimalContext);
    const animalId = parseInt(idAnimal);
    const { user } = useContext(UserContext);
    const idSoin = user.animal
        .find((elm: Animal) => elm.id == animalId)
        ?.soin.map((data, i: number) => (
            <tbody>
                <td>{data.activite}</td>
                <td>{data.date}</td>
            </tbody>
        ));
    return (
        <div className="container table-responsive">
            <caption className="text-black">Soins</caption>
            <table className="table bg-warning rounded">
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
