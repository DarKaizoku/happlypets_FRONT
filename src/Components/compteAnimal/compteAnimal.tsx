import { useContext, useState } from 'react';
import { UpdateAnimalContext } from '../../Context/updateAnimalContext';
import { UserContext } from '../../Context/userContext';
import { Animal } from '../../types/animal.type';
import GetSoin from './getSoin';
import Soin from './soin';

export function CompteAnimal(props: { page: string; setPage: any }) {
    const [preview_animal] = useState<string>('./animal.jpg');
    const { user } = useContext(UserContext);
    const { idAnimal } = useContext(UpdateAnimalContext);

    const updateAnimal = (e: React.SyntheticEvent) => {
        props.setPage('animalUpdate');
    };
    const [inputHabitat, setInputHabitat] = useState(false);
    const [inputSoin, setInputSoin] = useState(false);

    const affichageAnimal = user.animal?.map((data: Animal, i: number) => {
        if (data.id === +idAnimal) {
            return (
                <div className="bg-warning container mb-5 rounded">
                    <div className="container text-center mb-4">
                        <div>
                            <strong className="me-2  display-4">
                                {data.nom}
                            </strong>
                        </div>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="col mt-3 ">
                            <div>
                                <strong className="me-2 fs-4">id:</strong>
                                {data.id}
                            </div>
                            <div>
                                <strong className="me-2 fs-4">Espèce:</strong>
                                {data.espece}
                            </div>
                            <div>
                                <strong className="me-2 fs-4">Genre:</strong>
                                {data.genre}
                            </div>{' '}
                            <div>
                                <>
                                    <strong className="me-2 fs-4">
                                        Date de naissance:
                                    </strong>
                                    {data.date_de_naissance}
                                </>
                            </div>
                        </div>{' '}
                        <img
                            src={preview_animal}
                            className="container rounded-circle text-center mt-2 mb-2 col-1 border border-0"
                            style={{
                                height: 200,
                                width: 250,
                            }}
                            alt="patpat"
                        />
                        <div className="col mt-2 mx-auto">
                            <div>
                                <button onClick={() => setInputHabitat(true)}>
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <strong className="me-2 fs-4">Habitat:</strong>
                                {inputHabitat === false ? (
                                    <div> {data.habitat}</div>
                                ) : (
                                    <>
                                        <input type="text" />
                                        <i className="bi bi-check-square"></i>
                                    </>
                                )}
                            </div>

                            <div>
                                <strong className="me-2 fs-4">Lof:</strong>
                                {data.lof}
                            </div>
                            <div>
                                <strong className="me-2 fs-4">Race:</strong>
                                {data.race}
                            </div>
                            {/*  <div>
                                <button onClick={() => setInputSoin(true)}>
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <strong className="me-2 fs-4">Soin:</strong>
                                {inputSoin === false ? (
                                    <GetSoin />
                                ) : (
                                    <input type="text" />
                                )}
                            </div> */}
                        </div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-center mt-4">
                            <button
                                className="btn couleur rounded-pill btn-sm  me-3  mb-5 border border-primary  text-light
"
                            >
                                {'           '}
                                <i className="bi bi-x-lg">
                                    <p>Retirez cette animal de ma liste</p>
                                </i>
                            </button>
                            <button
                                className="btn couleur rounded-pill btn-sm  me-3  mb-5 border border-primary  text-light
"
                                onClick={() => props.setPage('soin')}
                            >
                                {'        '}
                                <i className="bi bi-plus-square ">
                                    <p>Ajouter un soin</p>
                                </i>
                            </button>
                            <button
                                className="btn couleur rounded-pill btn-sm  me-3 mb-5 border border-primary text-light
                       "
                                onClick={(e) => updateAnimal(e)}
                                type="button"
                            >
                                <i className="bi bi-pencil-fill"></i>
                                <p> Modifier</p>
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
        return '';
    });

    return (
        <div className="container-fluid">
            <div className="container ">{affichageAnimal}</div>
            <GetSoin />
            {props.page === 'soin' && <Soin setPage={props.setPage} />}
        </div>
    );
}
