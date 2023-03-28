import { useEffect, useState } from 'react';
import './App.css';
import { CompteAnimal } from './components/compteAnimal/compteAnimal';
import Soin from './components/compteAnimal/soin';
import CompteUsers from './components/compteUser/compteUser';
import { DataUsertoUpdate } from './components/compteUser/dataUsertoUpdate';
import { UpdateAnimal } from './components/formulaireAnimal/animalUpdate';
import CarnetSante from './components/formulaireAnimal/carnetSante';
import { FormulaireAnimal } from './components/formulaireAnimal/formulaire';
import { FormulaireUser } from './components/formulaireUser/formulaireUser';
import Navbar from './components/navbar/navbar';

import { UpdateAnimalContext } from './Context/updateAnimalContext';
import { UserInit, UserContext } from './Context/userContext';
import { TUser } from './types/user.type';

const baseUrl = 'http://localhost:8000/users/profil';

function App() {
	const TOKEN = localStorage.getItem('token')!;

	const [user, setUser] = useState<TUser>({} as TUser);
	const [page, setPage] = useState<string>('');
	const [idAnimal, setIdAnimal] = useState<string>('');

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
	}, [page]);

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
						<CompteUsers
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
						<FormulaireAnimal
							TOKEN={TOKEN}
							setPage={setPage}
						/>
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
