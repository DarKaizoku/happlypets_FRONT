import { useState } from 'react';

import Login from '../Login';
import './navbar.css';
export default function Navbar({ setToken }: any) {
    return (
        <div className="">
            <nav className="container-fluid text-center navbar navbar  shadow p-3 mb-5  rounded ">
                <div className="row">
                    <div className="col">
                        <button
                            className="btn btn-black heading dropdown-toggle "
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                fill="currentColor"
                                className="bi bi-list"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                        </button>
                        <ul className="dropdown-menu bg-warning">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Mon compte
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Mes animaux
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Carnet de santé
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Agenda
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Bien-être
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Me déconnecter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <p className="badge  text-wrap fs-5 text-center">
                        Laissez votre animal avoir un <br />
                        HAPPLY day avec HAPPLY PETS
                    </p>
                </div>
                <div className="col">
                    <img
                        className=""
                        style={{ height: 80 }}
                        src="logo.png"
                        alt="logo"
                    />
                </div>

                <div className="col">
                    <Login setToken={setToken} />
                </div>
            </nav>
        </div>
    );
}
