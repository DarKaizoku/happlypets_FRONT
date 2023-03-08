import { response } from 'express';
import React from 'react';
import { useEffect, useState } from 'react';
const urlUser = 'http://localhost:8000/users';

export function DeleteUser({ token }: any) {
    const [supp, setSupp]: any = useState([]);
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    const delett = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        async function fetchData() {
            const response = await fetch(urlUser, options);
            if (response.status === 404) {
                return (
                    <div className="alert alert-primary" role="alert">
                        A simple primary alert—check it out!
                    </div>
                );
                {
                    /* <div
                        className="alert alert-warning alert-dismissible fade show"
                        role="alert"
                    >
                        {response}
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                        ></button>
                    </div> */
                }
            }

            const responseJson = await response.json();
            setSupp(responseJson);
            if (supp) {
                return (
                    <div
                        className="alert alert-warning alert-dismissible fade show"
                        role="alert"
                    >
                        {responseJson.message}
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                        ></button>
                    </div>
                );
            }
        }
        fetchData();
    };

    return (
        <button
            onClick={(e) => delett(e)}
            type="button"
            className="btn couleur  btn-sm me-3 border border-primary col-6"
        >
            Supprimer
        </button>
    );
}
