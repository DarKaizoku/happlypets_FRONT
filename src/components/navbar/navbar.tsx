import { useState } from 'react';
import Compte_users from '../compte_user/compte_user';
import CarnetSante from '../formulaire_animal/carnet_sante';
import { FormulaireAnimal } from '../formulaire_animal/formulaire';
import { FormulaireUser } from '../formulaire_user/formulaire_user';

import Login from '../Login';
import './navbar.css';
export default function Navbar({ setToken, token }: any) {
    const [fiche, setFiche] = useState('');

    return (
        <div>
            <div className="container-fluid couleur shadow rounded-bottom mb-5">
                <div className="text-center ">
                    <form /* action="http://localhost:3001" */>
                        <button
                            className="bleu border-0"
                            type="reset"
                            onClick={() => window.location.reload()}
                        >
                            <img src="logo1.png" alt="logo" />
                        </button>
                    </form>
                </div>
                <div className="d-none d-lg-block text-light text-center fs-5 mt-3">
                    <p>
                        Laissez votre animal avoir un HAPPLY day avec HAPPLY
                        PETS
                    </p>
                </div>

                <nav className="navbar navbar-expand-lg couleur">
                    <div className="container-fluid ">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>{' '}
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <a
                                        className="nav-link  text-light couleur ms-2"
                                        href="#"
                                        onClick={() =>
                                            setFiche('formulaire_user')
                                        }
                                    >
                                        Inscription
                                    </a>
                                </li>
                                <li className="nav-item ms-3">
                                    <a
                                        className="nav-link  text-light"
                                        href="#"
                                        onClick={() => setFiche('compte')}
                                    >
                                        Mon Compte
                                    </a>
                                </li>
                                <li className="nav-item dropdown ms-3">
                                    <a
                                        className="nav-link dropdown-toggle text-light"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Mes animaux
                                    </a>
                                    <ul className="dropdown-menu bg-warning">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                onClick={() =>
                                                    setFiche('animal')
                                                }
                                            >
                                                Ajouter un animal
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item "
                                                href="#"
                                                onClick={() =>
                                                    setFiche('carnetDeSante')
                                                }
                                            >
                                                Carnet de santé
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Agenda
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Bien-être
                                            </a>
                                        </li>
                                    </ul>
                                </li>{' '}
                            </ul>{' '}
                            <div className="me-5">
                                <Login
                                    className="nav-link  text-light"
                                    href="#"
                                    setToken={setToken}
                                />
                            </div>
                            {/*     <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button
                                    className="btn btn-outline-success"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form> */}{' '}
                        </div>
                    </div>
                </nav>
            </div>
            {fiche === 'carnetDeSante' && <CarnetSante />}
            {fiche === 'users' && <Compte_users token={token} />}
            {fiche === 'formulaire_user' && <FormulaireUser />}
            {fiche === 'animal' && <FormulaireAnimal />}
        </div>
    );
}
