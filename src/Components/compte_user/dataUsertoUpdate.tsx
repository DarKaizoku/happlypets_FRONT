import parseJson from 'parse-json';
import { useState, useEffect, useContext } from 'react';
import { TokenContext } from '../../Context/tokenContext';
import { UserContext } from '../../Context/userContext';
import { TUser } from '../../types/user.type';

const baseUrl = 'http://localhost:8000/users';
export function DataUsertoUpdate() {
    const { user } = useContext(UserContext);
    const [test, setTest] = useState(user);
    const { token } = useContext(TokenContext);
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(test),
    };
    const inputChange = (e: React.BaseSyntheticEvent) => {
        const { name, value } = e.target;

        setTest({ ...user, [name]: value });
    };

    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState<string>('/default-avatar-user.jpg');
    useEffect(() => {
        if (!selectedFile) {
            setPreview('/default-avatar-user.jpg');
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

    const jsonUser = JSON.stringify(user);

    const update = (e: any) => {
        console.log(test);

        fetch(baseUrl, options)
            .then((response) => response.json())
            .then((donnee) => setTest(donnee))
            .catch((err) => console.error(err));
    };

    return (
        <div className="container-fluid">
            <div className="container card bg-warning mx-auto">
                <div className="card-body">
                    <h5 className="card-title fs-2 text-center">
                        Modification
                    </h5>
                    <div className="row">
                        <div className="col-md-8">
                            <form className="container-fluid row g-3 needs-validation">
                                <div className="col-md-6">
                                    <label
                                        form="validationCustomNom"
                                        className="form-label"
                                    >
                                        Nom
                                    </label>
                                    <input
                                        onChange={(e) => inputChange(e)}
                                        name="nom"
                                        type="text"
                                        defaultValue={user.nom}
                                        className="form-control"
                                        id="validationCustomNom"
                                        required
                                    />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label
                                        form="validationCustomPrenom"
                                        className="form-label"
                                    >
                                        Prénom
                                    </label>
                                    <input
                                        onChange={(e) => inputChange(e)}
                                        name="prenom"
                                        type="text"
                                        defaultValue={user.prenom}
                                        className="form-control"
                                        id="validationCustomPrenom"
                                        required
                                    />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label
                                        form="validationCustomEmail"
                                        className="form-label"
                                    >
                                        E-mail
                                    </label>
                                    <div className="input-group has-validation">
                                        <input
                                            onChange={(e) => inputChange(e)}
                                            name="email"
                                            type="email"
                                            defaultValue={user.email}
                                            className="form-control"
                                            id="validationEmail"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Merci, de saisir votre E-mail
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label
                                        form="validationCustomPseudo"
                                        className="form-label"
                                    >
                                        Pseudo
                                    </label>
                                    <input
                                        onChange={(e) => inputChange(e)}
                                        name="pseudo"
                                        type="text"
                                        defaultValue={user.pseudo}
                                        className="form-control"
                                        id="validationCustomPseudo"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Renseignez un pseudo valide, svp.
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <label
                                        form="validationCustomAdresse"
                                        className="form-label"
                                    >
                                        Adresse
                                    </label>
                                    <input
                                        onChange={(e) => inputChange(e)}
                                        placeholder="N°, type de rue, nom de rue"
                                        name="adresse"
                                        type="text"
                                        defaultValue={user.adresse}
                                        className="form-control"
                                        id="validationCustomAdresse"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Renseignez un mot de passe correct, svp.
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label
                                        form="validationCustomVille"
                                        className="form-label"
                                    >
                                        Ville
                                    </label>
                                    <input
                                        onChange={(e) => inputChange(e)}
                                        type="text"
                                        name="ville"
                                        defaultValue={user.ville}
                                        className="form-control"
                                        id="validationCustomVille"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Renseignez votre ville, svp.
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label
                                        form="validationCustomCodePostal"
                                        className="form-label"
                                    >
                                        Code Postal
                                    </label>
                                    <input
                                        onChange={(e) => inputChange(e)}
                                        type="text"
                                        name="codepostal"
                                        defaultValue={user.codepostal}
                                        className="form-control"
                                        id="validationCustomCodePostal"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Renseignez votre code postal, svp.
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label
                                        form="validationCustomDepartement"
                                        className="form-label"
                                    >
                                        Département
                                    </label>
                                    <input
                                        onChange={(e) => inputChange(e)}
                                        type="text"
                                        name="departement"
                                        defaultValue={user.departement}
                                        className="form-control"
                                        id="validationCustomDepartement"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Renseignez votre département correct,
                                        svp.
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 row custom-line">
                            <div className="container-fluid text-center mt-3 col align-self-center">
                                <img
                                    src={preview}
                                    alt="example placeholder"
                                    className="img-thumbnail"
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

                            <div className="container text-center mt-3">
                                <button
                                    onClick={(e) => update(e)}
                                    className="btn bleu text-light btn-outline-primary"
                                    type="submit"
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
