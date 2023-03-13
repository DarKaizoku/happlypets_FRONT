import React, { useEffect, useState } from 'react';
import './App.css';
import Compte_users from './components/compte_user/compte_user';
import { DataUsertoUpdate } from './components/compte_user/dataUsertoUpdate';
import CarnetSante from './components/formulaire_animal/carnet_sante';
import { FormulaireAnimal } from './components/formulaire_animal/formulaire';
import { FormulaireUser } from './components/formulaire_user/formulaire_user';
import Login from './components/Login';
import Navbar from './components/navbar/navbar';

import { TUser } from './types/user.type';

const baseUrl = 'http://localhost:8000/users/users';
function App() {
	const [data, setData]: any = useState([]);
	const [dataUser, setDataUser]: any = useState();

	const [page, setPage]: any = useState('');

	const [token, setToken] = useState('');

	const options = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};

	useEffect(() => {
		fetch(baseUrl, options)
			.then((response) => response.json())
			.then((donnee) => setData(donnee))
			.catch((erreur) => `${erreur}`);
	}, [token]);
	console.log('token', token);

	let affichage;

	if (data[0]) {
		affichage = data.map((data: TUser, i: number) => (
			<div key={i}>
				nom : {data.nom}
				<br />
				prénom : {data.prenom}
				<br />
				pseudo : {data.pseudo}
				<br />
				adresse : {data.adresse}
				<br />
				code postal : {data.codepostal}
				<br />
				ville : {data.ville}
				<br />
				departement : {data.departement}
				<br />
				animal :
				<br />
				<br />
			</div>
		));
	}

	return (
		<div>
			<Navbar
				setToken={setToken}
				token={token}
				setPage={setPage}
			/>
			{page === 'compte' && (
				<Compte_users
					token={token}
					setPage={setPage}
					setUser={setDataUser}
				/>
			)}
			{page === 'update' && (
				<DataUsertoUpdate
					token={token}
					user={dataUser}
					updateUser={setDataUser}
				/>
			)}
			{page === 'carnetDeSante' && <CarnetSante />}
			{page === 'formulaire_user' && <FormulaireUser />}
			{page === 'animal' && <FormulaireAnimal />}
			{page === 'erreur401' && (
				<div
					className='container mx-auto alert alert-warning m-auto alert-dismissible fade show'
					role='alert'
				>
					<strong>ERREUR!</strong> Compte
					inexistant !?!
					<button
						type='button'
						className='btn-close'
						data-bs-dismiss='alert'
						aria-label='Close'
						onClick={(e) =>
							setPage('login')
						}
					></button>
				</div>
			)}
			{page === 'login' && <Login />}
			{/*     <FormulaireAnimal />
            <FormulaireUser token={token} /> 
                        <div className='text-center'>{affichage}</div>;*/}
		</div>
	);
}

export default App;
