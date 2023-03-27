import React from 'react';
import { useState, useEffect } from 'react';
import { TUser } from '../../types/user.type';
import { InputUser } from './input_user';

export function FormulaireUser({ token }: any) {
    const newUser: TUser = {
        prenom: '',
        nom: '',
        pseudo: '',
        email: '',
        password: '',
        passwordConfirmed: '',
        adresse: '',
        ville: '',
        codepostal: '',
        departement: '',
        animal: [],
    };

    const [user, setUser] = useState(newUser);

    const urlAddUser = 'http://localhost:8000/users/register';

    const login = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();

        if (user.password !== user.passwordConfirmed) {
            return alert('Merci de vérifier votre mot de passe !!');
        }
        async function fetchData() {
            const response = await fetch(urlAddUser, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });

            const responseJson = await response.json();
            if (responseJson.statusCode !== 201) {
                return alert(
                    responseJson.message.map((data: any) => data + `\n`),
                );
            }
            alert(responseJson.message);
        }
        fetchData();
    };

    /* code ajouter photo avec preview */

    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState<string>('/default-avatar-user.jpg');
    useEffect(() => {
        if (!selectedFile) {
            setPreview('/default-avatar-user.jpg');
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);

        //commande permettant de loger dans le localstorage l'url de la photo
        /* localStorage.setItem('photoprofil', objectUrl); */

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

    return (
        <div className="container-fluid">
            <div className="container card bg-warning mx-auto">
                <div className="card-body">
                    <h5 className="card-title fs-2 text-center">Inscription</h5>

                    <div className="row">
                        <div className="col-md-8">
                            <InputUser
                                user={user}
                                setUser={setUser}
                            ></InputUser>
                        </div>

                        {/* <div className='col-12 mt-3'>
                                                <div className='form-check'>
                                                        <input
                                                                className='form-check-input'
                                                                type='checkbox'
                                                                value=''
                                                                id='invalidCheck'
                                                                required
                                                        />
                                                        <label
                                                                className='form-check-label'
                                                                htmlFor='invalidCheck'
                                                        >
                                                                J'accepte que
                                                                les données de
                                                                mon profil soit
                                                                publique sur ce
                                                                site
                                                        </label>
                                                </div>
                                        </div>
                                        <div className='col-12 mt-3'>
                                                <div className='form-check'>
                                                        <input
                                                                className='form-check-input'
                                                                type='checkbox'
                                                                value=''
                                                                id='invalidCheck'
                                                                required
                                                        />
                                                        <label
                                                                className='form-check-label'
                                                                htmlFor='invalidCheck'
                                                        >
                                                                Je suis d'accord
                                                                avec les termes
                                                                et conditions du
                                                                site
                                                        </label>
                                                        <div className='invalid-feedback'>
                                                                You must agree
                                                                before
                                                                submitting.
                                                        </div>
                                                </div>
                                        </div> */}
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
                                    onClick={(e) => login(e)}
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
