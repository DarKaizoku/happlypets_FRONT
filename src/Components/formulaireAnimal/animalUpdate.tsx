import { useState, useEffect, useContext } from 'react';
import { UpdateAnimalContext } from '../../Context/updateAnimalContext';
import { UserContext } from '../../Context/userContext';
import { Animal } from '../../types/animal.type';
import { animalUpdate } from '../../types/animalUpdate.type';

export function UpdateAnimal(props: {
    TOKEN: string;
    setPage: (value: string) => void;
}) {
    const { idAnimal } = useContext(UpdateAnimalContext);
    const { user } = useContext(UserContext);
    const id = parseInt(idAnimal);
    const dataAnimal = user.animal.find(
        (elm: Animal) => elm.id === (+idAnimal as number),
    );
    const [animal, setAnimal] = useState<animalUpdate>();
    const animalUrl = `http://localhost:8000/animal/${id}`;

    const updateChange = (e: React.BaseSyntheticEvent) => {
        let { name, value } = e.target;

        if (name === 'lof') {
            if (value === 'on' && dataAnimal?.lof === true) {
                return setAnimal({
                    ...animal!,
                    [name]: (value = false),
                });
            }
            return setAnimal({
                ...animal!,
                [name]: (value = true),
            });
        }

        setAnimal({ ...animal!, [name]: value });
    };

    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState<string>('/reindeer.png');
    useEffect(() => {
        if (!selectedFile) {
            setPreview('/reindeer.png');
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);

        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }
        setSelectedFile(e.target.files[0]);
    };

    const update = (e: React.BaseSyntheticEvent) => {
        const jsonAnimal = JSON.stringify(animal);

        console.log(jsonAnimal);

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${props.TOKEN}`,
            },
            body: jsonAnimal,
        };
        console.log(options);

        fetch(animalUrl, options)
            .then((response) => response.json())
            .then((donnee) => {
                setAnimal(donnee.data);
                props.setPage('compteanimal');
            })
            .catch((erreur) => `${erreur}`);
    };
    const buttonRetour = (e: React.BaseSyntheticEvent) => {
        props.setPage('compteanimal');
    };
    return (
        <div className="container card bg-warning mx-auto">
            <div className="d-flex justify-content-end mt-2">
                <button
                    type="button"
                    className="btn-close "
                    data-bs-dismiss="form"
                    aria-label="Close"
                    onClick={(e) => buttonRetour(e)}
                ></button>
            </div>
            <div className="container-fluid">
                <div className="card-body">
                    <h5 className="card-title text-center fs-2 mb-4">
                        Modifier mon animal
                    </h5>
                    {/* Ajouter une photo avec le brosser */}
                    <div>
                        <div className="mb-4 d-flex justify-content-center">
                            <img
                                src={preview}
                                alt="example placeholder"
                                className="img-thumbnail bleu"
                                style={{
                                    height: 200,
                                    width: 200,
                                    borderRadius: 100,
                                }}
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="btn bg-warning btn-rounded ms-2">
                                <label
                                    className="form-label text-center"
                                    htmlFor="customFile1"
                                >
                                    <img src="addphoto64.png" alt="" />
                                </label>
                                <input
                                    type="file"
                                    className="form-control d-none"
                                    id="customFile1"
                                    onChange={onSelectFile}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <form
                    className="container-fluid row g-3 needs-validation"
                    noValidate
                >
                    <div className="col-md-4">
                        <label
                            htmlFor="validationCustomNom"
                            className="form-label"
                        >
                            Nom
                        </label>
                        <input
                            onChange={(e) => updateChange(e)}
                            type="text"
                            defaultValue={dataAnimal?.nom}
                            className="form-control"
                            id="validationCustomNom"
                            name="nom"
                            required
                        />
                        <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="validationCustomEspece"
                            className="form-label"
                        >
                            Espèce
                        </label>
                        <input
                            onChange={(e) => updateChange(e)}
                            type="text"
                            defaultValue={dataAnimal?.espece}
                            className="form-control"
                            id="validationCustomEspece"
                            name="espece"
                            required
                        />
                        <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="validationCustomRace"
                            className="form-label"
                        >
                            Race
                        </label>
                        <div className="input-group has-validation">
                            <input
                                onChange={(e) => updateChange(e)}
                                type="text"
                                defaultValue={dataAnimal?.race}
                                className="form-control"
                                id="validationCustomRace"
                                aria-describedby="inputGroupPrepend"
                                name="race"
                                required
                            />
                            <div className="invalid-feedback">
                                Choisissez une race svp.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="validationCustomAnniversaire"
                            className="form-label"
                        >
                            Anniversaire
                        </label>
                        <input
                            onChange={(e) => updateChange(e)}
                            placeholder="jj/mm/aaaa"
                            type="date"
                            defaultValue={dataAnimal?.date_de_naissance}
                            className="form-control"
                            id="validationCustomAnniversaire"
                            name="date_de_naissance"
                            required
                        />
                        <div className="invalid-feedback">
                            Renseignez une date valide svp.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="validationCustomGenre"
                            className="form-label"
                        >
                            Genre
                        </label>
                        <select
                            onChange={(e) => updateChange(e)}
                            className="form-select"
                            defaultValue={dataAnimal?.genre}
                            id="validationCustomGenre"
                            name="genre"
                            required
                        >
                            <option defaultValue="choix...">Choix...</option>
                            <option value="Femelle">Femelle</option>
                            <option value="Mâle">Mâle</option>
                        </select>
                        <div className="invalid-feedback">
                            Selectionnez un genre valide svp.
                        </div>
                    </div>
                    <div className="col-md-4 row align-items-end">
                        <div className="form-check">
                            <label
                                className="form-check-label ms-3"
                                htmlFor="lofCheck"
                            >
                                Pedigree inscrit (LOF, LOOF,etc...)
                            </label>
                            <input
                                onChange={(e) => updateChange(e)}
                                className="form-check-input ms-3"
                                type="checkbox"
                                id="lofCheck"
                                name="lof"
                                required
                            />
                        </div>
                    </div>
                    <div className="container text-center mt-3">
                        <button
                            onClick={(e) => {
                                update(e);
                                props.setPage('compteanimal');
                            }}
                            className="btn bleu text-light btn-outline-primary"
                            type="button"
                        >
                            Enregistrer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
