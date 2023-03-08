import { useEffect, useState } from 'react';
import { TCompte } from '../../types/compte.type';
import { UpdateUser } from './update_user';
import './compte_user.css';
import { DeleteUser } from './Delete_user';

const urlUser = 'http://localhost:8000/users/profil';
export default function Compte_users({ token, setPage, setUser }: any) {
	const [compte, setCompte]: any = useState([]);

	const [preview, setPreview] = useState<string>(
		'./default-avatar-user.jpg'
	);
	const options = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};
	useEffect(() => {
		fetch(urlUser, options)
			.then((response) => response.json())
			.then((donnee) => setCompte(donnee))
			.catch((erreur) => `${erreur}`);
	}, [token]);
	console.log(compte[0]);

	let affichageAnimal;
	let affichageUser;
	if (compte[0]) {
		setUser(compte[0]);
		affichageUser = compte.map((data: TCompte, i: number) => (
			<div className='container-fluid text-center'>
				<div className='container'>
					<div className='row '>
						<div className='col-sm-12 col-lg-2 bg-warning rounded pe-2'>
							<div className=''>
								<img
									src={
										preview
									}
									alt='example placeholder'
									className='img-thumbnail mt-3 mb-2'
									style={{
										height: 150,
										width: 150,
										borderRadius: 100,
									}}
								/>
							</div>
							<div>
								Pseudo :{' '}
								{data.pseudo}
							</div>
							<div>
								Nom : {data.nom}
							</div>
							<div>
								Prénom :{' '}
								{data.prenom}
							</div>
							<div>
								Adresse :{' '}
								{data.adresse}
							</div>
							<div>
								Code Postal :{' '}
								{
									data.codepostal
								}
								<br />
								Ville :{' '}
								{data.ville}
							</div>
							<div>
								Département :{' '}
								{
									data.departement
								}
							</div>{' '}
							<div className='mt-3 p-2 row'>
								<DeleteUser
									className=' col-4 text-light'
									href='#'
									token={
										token
									}
								/>

								<UpdateUser
									className=' col-4 text-light'
									token={
										token
									}
									user={
										compte
									}
									updateUser={
										setCompte
									}
									setPage={
										setPage
									}
								/>
							</div>
						</div>

						<div className='container col-sm-12 col-lg-9 '>
							<div>
								{data.animal?.map(
									(
										data
									) => (
										<div
											key={
												i
											}
										>
											<div className='bg-warning sm rounded lg rounded mt-2'>
												<strong>
													nom
													:{' '}
												</strong>
												{
													data.nom
												}
												{
													'   '
												}
												<strong>
													race
													:{' '}
												</strong>{' '}
												{
													data.race
												}
												{
													'   '
												}
												<strong>
													espèce
													:{' '}
												</strong>
												{
													'   '
												}
												{
													data.espece
												}
												{
													'   '
												}
												<strong>
													{' '}
													genre
													:{' '}
												</strong>
												{
													'   '
												}
												{
													data.genre
												}
												{
													'   '
												}
												<strong>
													date
													de
													naissance
													:
												</strong>
												{
													'   '
												}
												{
													data.date_de_naissance
												}
												{
													'   '
												}
												<strong>
													habitat
													:
												</strong>
												{
													'   '
												}
												{
													data.habitat
												}
												{
													'   '
												}
												<strong>
													{' '}
													carnet
													de
													sante
													:
												</strong>
												{
													'   '
												}
												{
													data.carnetDeSante
												}
											</div>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		));
	}

	return (
		<div className='container-fluid'>
			<div className='container '>{affichageUser}</div>
			<div className='container '>{affichageAnimal}</div>
		</div>
	);
}
