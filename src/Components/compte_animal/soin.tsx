import { useContext } from 'react';
import { TokenContext } from '../../Context/tokenContext';
import { UpdateAnimalContext } from '../../Context/updateAnimalContext';
import { UserContext } from '../../Context/userContext';

export function Soin() {
    const { idAnimal } = useContext(UpdateAnimalContext);
    const { token } = useContext(TokenContext);
    const animalId = parseInt(idAnimal);
    const urlAddSoin = 'http://localhost:8000/soin';
    /*  const newPet = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
 */
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: `{"activite":"blabla","animalId":${animalId}}`,
    };

    fetch(urlAddSoin, options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    return <div></div>;
}
