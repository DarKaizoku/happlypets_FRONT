import React, { useState } from 'react';
import { Token } from '../types/token.type';

const urlLogin = 'http://localhost:3000/auth/login';

//export default function Login({ setToken }) {
export default function Login({ setToken }: any) {
    const dataLogin = {
        pseudo: '',
        password: '',
    };

    //const [token, setToken] = useState("");

    const [dataInput, setDataInput] = useState(dataLogin);

    const inputChange = (e: React.BaseSyntheticEvent) => {
        const { name, value } = e.target;
        setDataInput({ ...dataInput, [name]: value });
    };

    const login = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();

        async function fetchData() {
            const response = await fetch(urlLogin, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataInput),
            });

            const responseJson = await response.json();
            setToken(responseJson.access_token);
        }
        fetchData();
    };

    return (
        <div>
            <button
                type="button"
                className="btn btn-info"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Connexion
            </button>
            <form>
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    CONNEXION
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="container text-center">
                                    <label>
                                        <input
                                            onChange={(e) => inputChange(e)}
                                            type="text"
                                            name="pseudo"
                                            placeholder="pseudo"
                                        />
                                    </label>
                                    <br />
                                    <label className="mt-2">
                                        <input
                                            onChange={(e) => inputChange(e)}
                                            type="password"
                                            name="password"
                                            placeholder="password"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Fermer
                                </button>
                                <button
                                    onClick={(e) => login(e)}
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Valider
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {/* <button
                                onClick={(e) => login(e)}
                                type='button'
                                classNameName='btn btn-info justify-content-end'
                                data-bs-toggle='modal'
                                data-bs-target='#exampleModal'
                        >
                                LOGIN
                        </button> */}
        </div>
    );
}
