import { useState } from 'react';
import CarnetId from './carnet_sante';
import { Habitat } from './habitat';
import { InputAnimal } from './input_animal';

export function FormulaireAnimal() {
        const [fiche, setFiche] = useState('animal');

        return (
                <div>
                        <div
                                className='card bg-warning mx-auto'
                                style={{ width: 75 + 'rem' }}
                        >
                                <div className='card-body'>
                                        <h5 className='card-title text-center'>
                                                Nouvel Animal
                                        </h5>

                                        <div className='container text-center mt-3'>
                                                <img
                                                        src='animal.jpg'
                                                        alt='profil animal'
                                                        title='photo de profil animal'
                                                        className='img-thumbnail bg-black'
                                                        style={{
                                                                height: 200,
                                                                width: 200,
                                                        }}
                                                />
                                                .
                                        </div>
                                        {fiche === 'animal' && (
                                                <InputAnimal></InputAnimal>
                                        )}
                                        {fiche === 'carnetDeSante' && (
                                                <CarnetId></CarnetId>
                                        )}
                                        {fiche === 'habitat' && (
                                                <Habitat></Habitat>
                                        )}
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
                                                                J'accèpte que
                                                                les données de
                                                                mon animal soit
                                                                publique sur le
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
                                        </div>
                                        <div
                                                className='btn-group container text-center mt-3'
                                                role='group'
                                                aria-label='Basic radio toggle button group'
                                        >
                                                <input
                                                        type='radio'
                                                        className='btn-check'
                                                        name='btnradio'
                                                        id='btnradio1'
                                                        autoComplete='off'
                                                        onClick={() =>
                                                                setFiche(
                                                                        'animal'
                                                                )
                                                        }
                                                        defaultChecked={
                                                                fiche ===
                                                                'animal'
                                                        }
                                                />
                                                <label
                                                        className='btn btn-outline-primary'
                                                        htmlFor='btnradio1'
                                                >
                                                        Fiche animal
                                                </label>

                                                <input
                                                        type='radio'
                                                        className='btn-check'
                                                        name='btnradio'
                                                        id='btnradio2'
                                                        autoComplete='off'
                                                        onClick={() =>
                                                                setFiche(
                                                                        'carnetDeSante'
                                                                )
                                                        }
                                                        defaultChecked={
                                                                fiche ===
                                                                'carnetDeSante'
                                                        }
                                                />
                                                <label
                                                        className='btn btn-outline-primary'
                                                        htmlFor='btnradio2'
                                                >
                                                        Carnet de santé
                                                </label>

                                                <input
                                                        type='radio'
                                                        className='btn-check'
                                                        name='btnradio'
                                                        id='btnradio3'
                                                        autoComplete='off'
                                                        onClick={() =>
                                                                setFiche(
                                                                        'habitat'
                                                                )
                                                        }
                                                        defaultChecked={
                                                                fiche ===
                                                                'habitat'
                                                        }
                                                />
                                                <label
                                                        className='btn btn-outline-primary'
                                                        htmlFor='btnradio3'
                                                >
                                                        Habitat
                                                </label>
                                        </div>
                                        <div className='container text-center mt-3'>
                                                <button
                                                        className='btn btn-primary'
                                                        type='submit'
                                                >
                                                        Enregistrer
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
