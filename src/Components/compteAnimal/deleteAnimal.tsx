import { MouseEvent, useContext, useState } from 'react';
import { UpdateAnimalContext } from '../../Context/updateAnimalContext';
import { UserContext } from '../../Context/userContext';

export default function DeleteAnimal(props: {
    TOKEN: string;
    setPage: (value: string) => void;
}) {
    const { idAnimal } = useContext(UpdateAnimalContext);
    const urlAnimal = `http://localhost:8000/animal/${+idAnimal}`;
    const [supp, setSupp]: any = useState([]);
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${props.TOKEN}`,
        },
    };

    const delett = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        async function fetchData() {
            const response = await fetch(urlAnimal, options);
            if (response.status === 404) {
                return alert('Cet animal est déjà supprimé');
            }

            const responseJson = await response.json();
            setSupp(responseJson);
            props.setPage('compteanimal');

            if (supp) {
                return alert(`${responseJson.message}`);
            }
        }
        fetchData();
    };

    return (
        <button
            className="btn btn-primary couleur rounded-pill btn-sm  me-3  mb-5 border border-primary  text-light"
            onClick={(e) => delett(e)}
        >
            {'           '}
            <i className="bi bi-x-lg">
                <p>Retirez cette animal de ma liste</p>
            </i>
        </button>
    );
}
