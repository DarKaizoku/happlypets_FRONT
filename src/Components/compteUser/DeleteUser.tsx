import React from 'react';
import { useState } from 'react';

const urlUser = 'http://localhost:8000/users';

export function DeleteUser(props: { TOKEN: string }) {
	const [supp, setSupp]: any = useState([]);
	const options = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${props.TOKEN}`,
		},
	};
	const delett = (e: React.BaseSyntheticEvent) => {
		e.preventDefault();
		async function fetchData() {
			const response = await fetch(urlUser, options);
			if (response.status === 404) {
				return alert('Votre compte est déjà supprimé');
			}

			const responseJson = await response.json();
			setSupp(responseJson);
			if (supp) {
				return alert(`${responseJson.message}`);
			}
		}
		fetchData();
	};

	return (
		<button
			onClick={(e) => delett(e)}
			type='button'
			className='btn couleur  btn-sm ms-2 me-3 border border-primary col text-light'
		>
			Supprimer
		</button>
	);
}
