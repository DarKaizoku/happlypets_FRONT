import { useState, useEffect, useContext } from 'react';
import { Habitat } from './habitat';
import { InputAnimal } from './inputAnimal';
import './formulaireAnimal.css';
import { Animal } from '../../types/animal.type';
import { UserContext } from '../../Context/userContext';
import { Habitats } from '../../types/habitat.type';
import { TCarnetDeSante } from '../../types/carnetDeSsante.type';
import { UpdateAnimalContext } from '../../Context/updateAnimalContext';
import CarnetSante from './carnetSante';
export function FormulaireAnimal(props: {
	TOKEN: string;
	setPage: (value: string) => void;
}) {
	const { user } = useContext(UserContext);

	//Enregistrement d'un nouvel animal
	const newAnimal: Animal = {
		id: 0,
		nom: '',
		date_de_naissance: '',
		espece: '',
		race: '',
		genre: '',
		lof: true,
		habitat: '',
		carnetdesante: [],
		soin: [],
		photo: [],
	};
	const [animal, setAnimal] = useState(newAnimal);
	const [idOK, setIdOK] = useState<string>('No');
	const { idAnimal, setIdAnimal } = useContext(UpdateAnimalContext);
	const urlAddAnimal = 'http://localhost:8000/animal';

	const newPet = (e: React.BaseSyntheticEvent) => {
		e.preventDefault();

		async function fetchData() {
			const response = await fetch(urlAddAnimal, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					Authorization: `Bearer ${props.TOKEN}`,
				},

				body: JSON.stringify(animal),
			});
			const responseJson = await response.json();
			user.animal?.push(responseJson.data);

			setIdAnimal(responseJson.data.id);
			setIdOK('ok');
		}

		fetchData();
	};

	//Enregistrement d'un nouvel habitat
	const newHabitat: Habitats = {
		habitats: '',
	};

	const [habitat, setHabitat] = useState(newHabitat);
	const urlAddHabitat = 'http://localhost:8000/habitats';
	const newHome = (e: React.BaseSyntheticEvent) => {
		e.preventDefault();

		async function fetchData() {
			await fetch(urlAddHabitat, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					Authorization: `Bearer ${props.TOKEN}`,
				},

				body: JSON.stringify(habitat),
			});
		}

		fetchData();
	};

	//Enregistrement des données santé

	const newSante: TCarnetDeSante = {
		animalId: 0,
		poids: 0,
		steriliser: '',
		vaccin: '',
		date_vaccin: '',
	};

	const [carnetSante, setCarnetSante] =
		useState<TCarnetDeSante>(newSante);

	const urlAddSante = 'http://localhost:8000/carnet';

	if (idOK === 'ok') {
		async function fetchData() {
			carnetSante.animalId = +idAnimal;

			await fetch(urlAddSante, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					Authorization: `Bearer ${props.TOKEN}`,
				},
				body: JSON.stringify(carnetSante),
			});
			setIdOK('No');
			alert('Votre Animal a bien été créé !!');
			props.setPage('compteanimal');
		}

		fetchData();
	}

	const [fiche] = useState('animal');

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

	return (
		<div className='container-fluid'>
			<div className='container card bg-warning mx-auto'>
				<div className='card-body'>
					<h5 className='card-title text-center fs-2 mb-4'>
						Nouvel Animal
					</h5>
					{/* Ajouter une photo avec le brosser */}
					<div>
						<div className='mb-4 d-flex justify-content-center'>
							<img
								src={preview}
								alt='example placeholder'
								className='img-thumbnail bleu'
								style={{
									height: 200,
									width: 200,
									borderRadius: 100,
								}}
							/>
						</div>
						<div className='d-flex justify-content-center'>
							<div className='btn bg-warning btn-rounded ms-2'>
								<label
									className='form-label text-center'
									htmlFor='customFile1'
								>
									<img
										src='addphoto64.png'
										alt=''
									/>
								</label>
								<input
									type='file'
									className='form-control d-none'
									id='customFile1'
									onChange={
										onSelectFile
									}
								/>
							</div>
						</div>
					</div>
				</div>
				{fiche === 'animal' && (
					<InputAnimal
						animal={animal}
						setAnimal={setAnimal}
						habitat={habitat}
						setHabitat={setHabitat}
						carnetSante={carnetSante}
						setCarnetSante={setCarnetSante}
					/>
				)}
				{fiche === 'carnetDeSante' && <CarnetSante />}
				{fiche === 'habitat' && <Habitat></Habitat>}
				<div className='col-12 mt-3'>
					<div className='form-check'>
						<input
							className='form-check-input'
							type='checkbox'
							value=''
							id='publicCheck'
							name='profil_public'
							required
						/>
						<label
							className='form-check-label'
							htmlFor='publicCheck'
						>
							J'accepte que les
							données de mon animal
							soient publiques sur le
							site (optionnel)
						</label>
					</div>
				</div>
				<div className='col-12 mt-3'>
					<div className='form-check'>
						<input
							className='form-check-input'
							type='checkbox'
							value=''
							id='okCheck'
							required
						/>
						<label
							className='form-check-label'
							htmlFor='okCheck'
						>
							Je suis d'accord avec
							les termes et conditions
							du site
						</label>
						<div className='invalid-feedback'>
							You must agree before
							submitting.
						</div>
					</div>
				</div>
				{/* 
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
            onClick={() => setFiche("animal")}
            defaultChecked={fiche === "animal"}
          />
          <label className="btn btn-outline-warning" htmlFor="btnradio1">
            Fiche animal
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
            onClick={() => setFiche("carnetDeSante")}
            defaultChecked={fiche === "carnetDeSante"}
          />
          <label className="btn btn-outline-warning" htmlFor="btnradio2">
            Carnet de santé
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            autoComplete="off"
            onClick={() => setFiche("habitat")}
            defaultChecked={fiche === "habitat"}
          />
          <label className="btn btn-outline-warning" htmlFor="btnradio3">
            Habitat
          </label>
        </div> */}
				<div className='container text-center mt-3'>
					<button
						onClick={(e) => {
							newPet(e);
							newHome(e);
						}}
						className='btn bleu text-light btn-outline-primary'
						type='submit'
					>
						Enregistrer
					</button>
				</div>
			</div>
		</div>
	);
}
