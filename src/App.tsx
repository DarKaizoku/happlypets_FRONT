import { useEffect, useState } from 'react';

import './App.css';
import { CompteAnimal } from './components/compte_animal/compteAnimal';
import { Soin } from './components/compte_animal/soin';
import Compte_users from './components/compte_user/compte_user';
import { DataUsertoUpdate } from './components/compte_user/dataUsertoUpdate';
import { UpdateAnimal } from './components/formulaire_animal/animalUpdate';
import CarnetSante from './components/formulaire_animal/carnet_sante';
import { FormulaireAnimal } from './components/formulaire_animal/formulaire';
import { FormulaireUser } from './components/formulaire_user/formulaire_user';
import Navbar from './components/navbar/navbar';

import { UpdateAnimalContext } from './Context/updateAnimalContext';
import { UserContext, UserInit } from './Context/userContext';
import { TUser } from './types/user.type';

const baseUrl = 'http://localhost:8000/users/profil';
const token = localStorage.getItem('token');

function App() {
	const [user, setUser] = useState<TUser>({} as TUser);
	//const [dataUser, setDataUser]: any = useState();
	const [page, setPage] = useState('');
	const [idAnimal, setIdAnimal] = useState('');
	const TOKEN: string = token!;
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
	};
	useEffect(() => {
		fetch(baseUrl, options)
			.then((response) => response.json())
			.then((donnee) => setUser(donnee))
			.catch((erreur) => `${erreur}`);
	}, [TOKEN]);
	console.log(TOKEN);

	const logout = () => {
		localStorage.clear();
		setUser(UserInit);
		window.location.reload();
	};
	return (
		<div>
			<UserContext.Provider value={{ user, setUser }}>
				<UpdateAnimalContext.Provider
					value={{
						idAnimal,
						setIdAnimal,
					}}
				>
					<Navbar
						setPage={setPage}
						logout={logout}
					/>
					{page === 'compte' && (
						<Compte_users
							setPage={setPage}
							logout={logout}
							TOKEN={TOKEN}
						/>
					)}
					{page === 'soin' && (
						<Soin
							setPage={setPage}
							TOKEN={TOKEN}
						/>
					)}
					{page === 'update' && (
						<DataUsertoUpdate />
					)}
					{page === 'animalUpdate' && (
						<UpdateAnimal />
					)}
					{page === 'compteanimal' && (
						<CompteAnimal
							setPage={setPage}
							page={page}
							TOKEN={TOKEN}
						/>
					)}
					{page === 'carnetDeSante' && (
						<CarnetSante />
					)}
					{page === 'formulaire_user' && (
						<FormulaireUser />
					)}
					{page === 'animal' && (
						<FormulaireAnimal />
					)}
					{page === 'erreur401' && (
						<div
							className='container mx-auto alert alert-warning m-auto alert-dismissible fade show'
							role='alert'
						>
							<strong>ERREUR!</strong>{' '}
							Compte inexistant !?!
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='alert'
								aria-label='Close'
								onClick={(e) =>
									setPage(
										'login'
									)
								}
							></button>
						</div>
					)}
				</UpdateAnimalContext.Provider>
			</UserContext.Provider>
		</div>
	);
}

export default App;
