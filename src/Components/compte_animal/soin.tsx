import { useContext, useState } from 'react';
import { UpdateAnimalContext } from '../../Context/updateAnimalContext';

const urlAddSoin = 'http://localhost:8000/soin';

export function Soin(props: { setPage: any; TOKEN: string }) {
	const { idAnimal } = useContext(UpdateAnimalContext);

	const animalId = parseInt(idAnimal);

	const [activite, setActivite] = useState('');
	const [date, setDate] = useState<Date>();
	const [envoi, setEnvoi] = useState();

	const inputSoin = (e: React.BaseSyntheticEvent) => {
		const { value } = e.currentTarget;
		setActivite(value);
	};

	const inputDate = (e: React.BaseSyntheticEvent) => {
		const { value } = e.target;
		setDate(value);
	};

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${props.TOKEN}`,
		},
		body: JSON.stringify({ activite, date, animalId }),
	};

	const postSoin = (e: React.BaseSyntheticEvent) => {
		e.preventDefault();
		fetch(urlAddSoin, options)
			.then((response) => response.json())

			.then((response) => setEnvoi(response))

			.catch((err) => console.error(err));
	};

	const buttonRetour = (e: React.BaseSyntheticEvent) => {
		postSoin(e);
		alert('Soin saisie');
		props.setPage('compteanimal');
	};

	return (
		<div>
			<div className='container border mt-2 bg-warning rounded'>
				<form>
					<div className='d-flex justify-content-end mt-2'>
						<button
							type='button'
							className='btn-close '
							data-bs-dismiss='form'
							aria-label='Close'
							onClick={(e) =>
								buttonRetour(e)
							}
						></button>
					</div>
					<div className='mb-3 text-start'>
						<label
							form='validationCustomNom'
							className='form-label'
						>
							Soin
						</label>
						<input
							onChange={(e) =>
								inputSoin(e)
							}
							type='text'
							className='form-control'
							required
						/>
					</div>
					<div className='mb-3 text-start'>
						<label className='form-label'>
							Date
						</label>
						<input
							onChange={(e) =>
								inputDate(e)
							}
							name='date'
							type='date'
							className='form-control'
							required
						/>
					</div>
					<div className='text-start'>
						<button
							onClick={(e) =>
								buttonRetour(e)
							}
							type='submit'
							className='btn couleur text-light  mb-2'
						>
							Ajouter
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
