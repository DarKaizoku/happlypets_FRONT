import { useContext, useState } from 'react';
import { UpdateUser } from './update_user';
import './compte_user.css';
import { DeleteUser } from './Delete_user';
import { UserContext } from '../../Context/userContext';
import { TUser } from '../../types/user.type';
import { UpdateAnimalContext } from '../../Context/updateAnimalContext';

export default function Compte_users({ token, setPage, logout }: any) {
	const { user } = useContext(UserContext);

	//permet de recuperer l'url enregistrer dans localstorage
	const photo: any = localStorage.getItem('photoprofil');
	const test = photo?.slice('5');

	const { idAnimal, setIdAnimal } = useContext(UpdateAnimalContext);
	const [preview] = useState<string>('./default-avatar-user.jpg');
	const [preview_animal] = useState<string>('./animal.jpg');
	const inputChange = (e: React.BaseSyntheticEvent) => {
		const { title } = e.currentTarget;
		const values = { title };
		console.log(values.title);

		setIdAnimal(values.title);
	};

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
										test
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
							</div>
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
							<button
								onClick={(e) =>
									logout()
								}
								className='btn couleur  btn-sm  mt-3 ms-2 me-3 mb-2 border border-primary col text-light'
							>
								Déconnexion
							</button>
						</div>

						<div className='container-fluid col-sm-12 col-lg-9 '>
							<div className='text-start text-light mb-3'>
								Mes animaux
							</div>
							<div
								className=' table-responsive bg-warning rounded overflow-y-scroll inner'
								style={{
									height: 150,
								}}
							>
								<table className='table'>
									<thead>
										<tr>
											<th scope='col'>
												Photo
											</th>
											<th scope='col'>
												Nom
											</th>
											<th scope='col'>
												Espèce
											</th>
											<th scope='col'>
												Genre
											</th>
											<th scope='col'>
												Date
												de
												naissance
											</th>
										</tr>
									</thead>
									<tbody className=' overflow-y-scroll inner'>
										{data.animal?.map(
											(
												data
											) => (
												<tr
													defaultValue={
														data.id
													}
													title={data.id.toString()}
													id='animal'
													aria-hidden='false'
													onClick={(
														e
													) => {
														inputChange(
															e
														);

														setPage(
															'compteanimal'
														);
													}}
												>
													<th scope='row'>
														<div className='avatar'>
															<img
																src={
																	preview_animal
																}
																className='avatar-img avatar-md rounded-circle   '
																alt='patpat'
															/>
														</div>
													</th>
													<td>
														{
															data.nom
														}
													</td>
													<td>
														{
															data.espece
														}
													</td>
													<td>
														{
															data.genre
														}
													</td>
													<td>{`${data.date_de_naissance}`}</td>
												</tr>
											)
										)}
									</tbody>
								</table>
							</div>

							<p className='text-start text-light mt-5'>
								Mon calendrier
							</p>
							<div className=' table-responsive bg-warning sm rounded lg rounded mt-2'>
								<table className='table'>
									<thead>
										<caption>
											<strong>
												AVRIL
											</strong>
										</caption>
										<tr>
											<th scope='col'>
												1/04
											</th>
											<th scope='col'>
												15/04
											</th>
											<th scope='col'>
												20/04
											</th>
											<th scope='col'>
												30/04
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope='row'>
												Concours
												national
											</th>
											<td>
												Rappel
												fongique
											</td>
											<td>
												toilettage
											</td>
											<td>
												collier
												anti-puce
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className='mb-3 mt-3'>
					<button
						onClick={() => {
							setPage('animal');
						}}
						className='bg-warning sm rounded lg rounded mt-2 me-5'
					>
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
		</div>
	);
}
