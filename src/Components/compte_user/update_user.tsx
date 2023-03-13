export function UpdateUser({ setPage }: any) {
	const eraser = (e: React.BaseSyntheticEvent) => {
		setPage('update');
	};

	return (
		<button
			className='btn couleur btn-sm me-3 border border-primary text-light col'
			onClick={(e) => eraser(e)}
			type='button'
		>
			Modifier
		</button>
	);
}
