import { useEffect, useState } from 'react';
const urlUser = 'http://localhost:8000/users';

export function DeleteUser({ token }: any) {
	const [supp, setSupp]: any = useState([]);
	const options = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};
	const delett = (e: React.BaseSyntheticEvent) => {
		e.preventDefault();
		async function fetchData() {
			const response = await fetch(urlUser, options);

			const responseJson = await response.json();
			console.log(responseJson);

			setSupp(responseJson);
		}
		fetchData();
	};

	return (
		<button
			onClick={(e) => delett(e)}
			type='button'
			className='btn couleur  btn-sm me-3 border border-primary col-6'
		>
			Supprimer
		</button>
	);
}
