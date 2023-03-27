import { useEffect, useState } from 'react';
import './App.css';
import { CompteAnimal } from './components/compteAnimal/compteAnimal';
import { Soin } from './components/compteAnimal/soin';
import { CompteUsers } from './components/compteUser/compteUser';
import { DataUsertoUpdate } from './components/compteUser/dataUsertoUpdate';
import { UpdateAnimal } from './components/formulaireAnimal/animalUpdate';
import CarnetSante from './components/formulaireAnimal/carnetSante';
import { FormulaireAnimal } from './components/formulaireAnimal/formulaire';
import { FormulaireUser } from './components/formulaireUser/formulaireUser';
import Navbar from './components/navbar/navbar';

import { TokenContext } from './Context/tokenContext';
import { UpdateAnimalContext } from './Context/updateAnimalContext';
import { UserInit, UserContext } from './Context/userContext';
import { TUser } from './types/user.type';

const baseUrl = 'http://localhost:8000/users/profil';

function App() {
	const [user, setUser] = useState<TUser>({} as TUser);
	const [page, setPage] = useState('');
	const [idAnimal, setIdAnimal] = useState('');
	const [token, setToken] = useState('');

	useEffect(() => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};
		fetch(baseUrl, options)
			.then((response) => response.json())
			.then((donnee) => setUser(donnee))
			.catch((erreur) => `${erreur}`);
	}, [token]);
	const logout = () => {
		setToken('');
		setUser(UserInit);
		window.location.reload();
	};

	return (
		<div>
			<UserContext.Provider value={{ user, setUser }}>
				<TokenContext.Provider
					value={{ token, setToken }}
				>
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
								setPage={
									setPage
								}
								logout={logout}
							/>
						)}
						{page === 'soin' && (
							<Soin
								setPage={
									setPage
								}
							/>
						)}
						{page === 'update' && (
							<DataUsertoUpdate />
						)}
						{page === 'animalUpdate' && (
							<UpdateAnimal
								setPage={
									setPage
								}
							/>
						)}
						{page === 'compteanimal' && (
							<CompteAnimal
								setPage={
									setPage
								}
								page={page}
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
								<strong>
									ERREUR!
								</strong>{' '}
								Compte
								inexistant !?!
								<button
									type='button'
									className='btn-close'
									data-bs-dismiss='alert'
									aria-label='Close'
									onClick={(
										e
									) =>
										setPage(
											'login'
										)
									}
								></button>
							</div>
						)}
					</UpdateAnimalContext.Provider>
				</TokenContext.Provider>
			</UserContext.Provider>
		</div>
	);
}

export default App;
