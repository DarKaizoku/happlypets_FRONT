import { useContext, useEffect, useState } from 'react';
import { TCompte } from '../../types/compte.type';
import { UpdateUser } from './update_user';
import './compte_user.css';
import { DeleteUser } from './Delete_user';
import React from 'react';
import { UserContext } from '../../Context/userContext';
import { TUser } from '../../types/user.type';

export default function Compte_users({ token, setPage }: any) {
	const { user } = useContext(UserContext);
	console.log(user);

	const [preview, setPreview] = useState<string>(
		'./default-avatar-user.jpg'
	);

	let affichageAnimal;
	let affichageUser;
	if (user !== null) {
		affichageUser = [user].map((data: TUser, i: number) => (
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
							<div className='mt-3  p-2 row'>
								<DeleteUser
									className=' col text-light me-2'
									href='#'
									token={
										token
									}
								/>

								<UpdateUser
									className=' col text-light ms-2 '
									setPage={
										setPage
									}
								/>
							</div>
							<button className='text-start text-light mt-3 mb-2 mx-auto couleur rounded'>
								Déconnexion
							</button>
						</div>

						<div className='container col-sm-12 col-lg-9 '>
							<div>
								<p className='text-start text-light'>
									Mes
									animaux
								</p>

								{data.animal?.map(
									(
										data
									) => (
										<div
											key={
												i
											}
										>
											<div
												className='bg-warning sm rounded lg rounded mt-2 ms-5'
												style={{
													height: 45,
												}}
											>
												<img
													src='reindeer.png'
													className='rounded-pill float-start ms-5 border border-light'
													style={{
														height: 40,
													}}
													alt='patpat'
												/>
												<p>
													{`nom :   ${data.nom}  
                                        espèce :  ${data.espece}
                                         genre :   ${data.genre}
                                         date de naissance :    ${data.date_de_naissance}`}
												</p>
											</div>
										</div>
									)
								)}
							</div>
							<p className='text-start text-light'>
								Mon calendrier
							</p>
							<div className='bg-warning sm rounded lg rounded mt-2'>
								Calendrier
							</div>
						</div>
					</div>
				</div>
				<div className=''>
					<button className='bg-warning sm rounded lg rounded mt-2 me-5'>
						Ajouter un animal
					</button>
					<button className='bg-warning sm rounded lg rounded mt-2 me-5'>
						Ajouter un événement
					</button>
					<button className='bg-warning sm rounded lg rounded mt-2'>
						Agenda
					</button>
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
