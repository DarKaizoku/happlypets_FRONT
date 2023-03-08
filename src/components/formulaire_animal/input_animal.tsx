export function InputAnimal() {
	return (
		<div className='container-fluid'>
			<form
				className='container-fluid row g-3 needs-validation'
				noValidate
			>
				<div className='col-md-4'>
					<label
						htmlFor='validationCustomNom'
						className='form-label'
					>
						Nom
					</label>
					<input
						type='text'
						className='form-control'
						id='validationCustomNom'
						name='nom'
						required
					/>
					<div className='valid-feedback'>
						Looks good!
					</div>
				</div>
				<div className='col-md-4'>
					<label
						htmlFor='validationCustomEspece'
						className='form-label'
					>
						Espèce
					</label>
					<input
						type='text'
						className='form-control'
						id='validationCustomEspece'
						name='espece'
						required
					/>
					<div className='valid-feedback'>
						Looks good!
					</div>
				</div>
				<div className='col-md-4'>
					<label
						htmlFor='validationCustomRace'
						className='form-label'
					>
						Race
					</label>
					<div className='input-group has-validation'>
						<input
							type='text'
							className='form-control'
							id='validationCustomRace'
							aria-describedby='inputGroupPrepend'
							name='race'
							required
						/>
						<div className='invalid-feedback'>
							Choisissez une race svp.
						</div>
					</div>
				</div>
				<div className='col-md-4'>
					<label
						htmlFor='validationCustomAnniversaire'
						className='form-label'
					>
						Anniversaire
					</label>
					<input
						placeholder='jj/mm/aaaa'
						type='date'
						className='form-control'
						id='validationCustomAnniversaire'
						name='date_de_naissance'
						required
					/>
					<div className='invalid-feedback'>
						Renseignez une date valide svp.
					</div>
				</div>
				<div className='col-md-4'>
					<label
						htmlFor='validationCustomGenre'
						className='form-label'
					>
						Genre
					</label>
					<select
						className='form-select'
						id='validationCustomGenre'
						name='genre'
						required
					>
						<option defaultValue='choix...'>
							Choix...
						</option>
						<option value='Femelle'>
							Femelle
						</option>
						<option value='Mâle'>
							Mâle
						</option>
					</select>
					<div className='invalid-feedback'>
						Selectionnez un genre valide
						svp.
					</div>
				</div>
				<div className='col-md-4 row align-items-end'>
					<div className='form-check'>
						<label
							className='form-check-label ms-3'
							htmlFor='lofCheck'
						>
							Pedigree inscrit (LOF,
							LOOF,etc...)
						</label>
						<input
							className='form-check-input ms-3'
							type='checkbox'
							value=''
							id='lofCheck'
							name='lof'
							required
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
