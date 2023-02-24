import { useState } from 'react';
import { Habitat } from './habitat';
import { InputAnimal } from './input_animal';
import './formulaire_animal.css';
import CarnetSante from './carnet_sante';

export function FormulaireAnimal() {
    const [fiche, setFiche] = useState('animal');

    return (
        <div className="container-fluid">
            <div className="container card bg-warning mx-auto">
                <div className="card-body">
                    <h5 className="card-title text-center">Nouvel Animal</h5>
                    <div className="container-fluid text-center mt-3">
                        <img
                            src="https://i.postimg.cc/hG2tRsNG/shutterstock-1698643315.jpg"
                            alt="profil animal"
                            title="photo de profil animal"
                            className="img-thumbnail bg-black"
                            style={{
                                height: 200,
                                width: 200,
                            }}
                        />
                        <div>
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-bs-toggle="modal"
                                data-bs-target="#ajoutPhoto"
                                name="addPhoto"
                            >
                                <img src="addphoto32.png" alt="" />
                            </button>
                        </div>
                        <div
                            className="modal fade"
                            id="ajoutPhoto"
                            tabIndex={-1}
                            aria-labelledby="photoProfilLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered bleu">
                                <div className="modal-content">
                                    <div className="modal-header bg-warning">
                                        <h1
                                            className="modal-title fs-5"
                                            id="photoProfilLabel bg-warning"
                                        >
                                            Photo de profil de votre animal
                                        </h1>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body shadow bg-warning">
                                        <ul>
                                            <li>
                                                Rendez vous sur le site{' '}
                                                <a
                                                    href="https://postimages.org/fr/"
                                                    target="_blank"
                                                >
                                                    postimages
                                                </a>
                                            </li>
                                            <li>
                                                Selectionnez votre image avec le
                                                bouton "Choisissez votre image"
                                            </li>
                                            <li>
                                                Une fois validée, copiez le
                                                "lien direct" et le coller ici :
                                            </li>
                                        </ul>
                                        <form>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="urlPhoto"
                                                    className="col-form-label"
                                                >
                                                    Lien de l'image
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="urlPhoto"
                                                    name="photoUrl"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer bg-warning">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Fermer
                                        </button>
                                        <button
                                            type="button"
                                            className="btn bleu text-light"
                                        >
                                            Sauvegarder photo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*           
            Ajouter une photo avec le brosser
            
            <div>
            <div className="mb-4 d-flex justify-content-center">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                alt="example placeholder"
                style={{ width: 300 }}
              />
            </div>
            <div className="d-flex justify-content-center">
              <div className="btn btn-primary btn-rounded">
                <label
                  className="form-label text-white m-1"
                  htmlFor="customFile1"
                >
                  Choose file
                </label>
                <input
                  type="file"
                  className="form-control d-none"
                  id="customFile1"
                />
              </div>
            </div>
          </div> */}
                        .
                    </div>
                    {fiche === 'animal' && <InputAnimal></InputAnimal>}
                    {fiche === 'carnetDeSante' && <CarnetSante />}
                    {fiche === 'habitat' && <Habitat></Habitat>}
                    <div className="col-12 mt-3">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="invalidCheck"
                                name="profil_public"
                                required
                            />
                            <label
                                className="form-check-label"
                                htmlFor="invalidCheck"
                            >
                                J'accèpte que les données de mon animal soit
                                publique sur le site
                            </label>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="invalidCheck"
                                required
                            />
                            <label
                                className="form-check-label"
                                htmlFor="invalidCheck"
                            >
                                Je suis d'accord avec les termes et conditions
                                du site
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div
                        className="btn-group container-fluid mt-3 p-1 mb-1 bleu"
                        role="group"
                        aria-label="Basic radio toggle button group"
                    >
                        <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio1"
                            autoComplete="off"
                            onClick={() => setFiche('animal')}
                            defaultChecked={fiche === 'animal'}
                        />
                        <label
                            className="btn btn-outline-warning"
                            htmlFor="btnradio1"
                        >
                            Fiche animal
                        </label>

                        <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio2"
                            autoComplete="off"
                            onClick={() => setFiche('carnetDeSante')}
                            defaultChecked={fiche === 'carnetDeSante'}
                        />
                        <label
                            className="btn btn-outline-warning"
                            htmlFor="btnradio2"
                        >
                            Carnet de santé
                        </label>

                        <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio3"
                            autoComplete="off"
                            onClick={() => setFiche('habitat')}
                            defaultChecked={fiche === 'habitat'}
                        />
                        <label
                            className="btn btn-outline-warning"
                            htmlFor="btnradio3"
                        >
                            Habitat
                        </label>
                    </div>
                    <div className="container text-center mt-3">
                        <button
                            className="btn bleu text-light btn-outline-primary"
                            type="submit"
                        >
                            Enregistrer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
