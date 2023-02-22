export function InputUser() {
        return (
                <div className='row'>
                        <form
                                className='container-fluid row g-3 needs-validation'
                                noValidate
                        >
                                <div className='col-md-6'>
                                        <label
                                                form='validationCustomNom'
                                                className='form-label'
                                        >
                                                Nom
                                        </label>
                                        <input
                                                type='text'
                                                className='form-control'
                                                id='validationCustomNom'
                                                required
                                        />
                                        <div className='valid-feedback'>
                                                Looks good!
                                        </div>
                                </div>
                                <div className='col-md-6'>
                                        <label
                                                form='validationCustomPrenom'
                                                className='form-label'
                                        >
                                                Prénom
                                        </label>
                                        <input
                                                type='text'
                                                className='form-control'
                                                id='validationCustomPrenom'
                                                required
                                        />
                                        <div className='valid-feedback'>
                                                Looks good!
                                        </div>
                                </div>
                                <div className='col-md-6'>
                                        <label
                                                form='validationCustomEmail'
                                                className='form-label'
                                        >
                                                E-mail
                                        </label>
                                        <div className='input-group has-validation'>
                                                <input
                                                        type='email'
                                                        className='form-control'
                                                        id='validationEmail'
                                                        aria-describedby='inputGroupPrepend'
                                                        required
                                                />
                                                <div className='invalid-feedback'>
                                                        Merci, de saisir votre
                                                        E-mail
                                                </div>
                                        </div>
                                </div>
                                <div className='col-md-6'>
                                        <label
                                                form='validationCustomAnniversaire'
                                                className='form-label'
                                        >
                                                Date de Naissance
                                        </label>
                                        <input
                                                placeholder='jj/mm/aaaa'
                                                type='date'
                                                className='form-control'
                                                id='validationCustomAnniversaire'
                                                required
                                        />
                                        <div className='invalid-feedback'>
                                                Renseignez une date valide svp.
                                        </div>
                                </div>
                                <div className='col-md-6'>
                                        <label
                                                form='validationCustomPseudo'
                                                className='form-label'
                                        >
                                                Pseudo
                                        </label>
                                        <input
                                                type='text'
                                                className='form-control'
                                                id='validationCustomPseudo'
                                                required
                                        />
                                        <div className='invalid-feedback'>
                                                Renseignez un pseudo valide,
                                                svp.
                                        </div>
                                </div>
                                <div className='col-md-6'>
                                        <label
                                                form='validationCustomPassword'
                                                className='form-label'
                                        >
                                                Mot de Passe
                                        </label>
                                        <input
                                                placeholder='132 caractère minimum'
                                                type='password'
                                                className='form-control'
                                                id='validationCustomPassword'
                                                required
                                        />
                                        <div className='invalid-feedback'>
                                                Renseignez un mot de passe
                                                correct, svp.
                                        </div>
                                </div>
                                <div className='col-md-12'>
                                        <label
                                                form='validationCustomPasswordConfirmation'
                                                className='form-label'
                                        >
                                                Confirmation du Mot de Passe
                                        </label>
                                        <input
                                                placeholder='132 caractère minimum, again !!'
                                                type='password'
                                                className='form-control'
                                                id='validationCustomPasswordConfirmation'
                                                required
                                        />
                                        <div className='invalid-feedback'>
                                                Renseignez un mot de passe
                                                correct, svp.
                                        </div>
                                </div>
                                <div className='col-md-12'>
                                        <label
                                                form='validationCustomAdresse'
                                                className='form-label'
                                        >
                                                Adresse
                                        </label>
                                        <input
                                                placeholder='N°, type de rue, nom de rue'
                                                type='text'
                                                className='form-control'
                                                id='validationCustomAdresse'
                                                required
                                        />
                                        <div className='invalid-feedback'>
                                                Renseignez un mot de passe
                                                correct, svp.
                                        </div>
                                </div>
                                <div className='col-md-6'>
                                        <label
                                                form='validationCustomVille'
                                                className='form-label'
                                        >
                                                Ville
                                        </label>
                                        <input
                                                placeholder='132 caractère minimum'
                                                type='text'
                                                className='form-control'
                                                id='validationCustomVille'
                                                required
                                        />
                                        <div className='invalid-feedback'>
                                                Renseignez votre ville, svp.
                                        </div>
                                </div>
                                <div className='col-md-6'>
                                        <label
                                                form='validationCustomCodePostal'
                                                className='form-label'
                                        >
                                                Code Postal
                                        </label>
                                        <input
                                                placeholder='132 caractère minimum'
                                                type='text'
                                                className='form-control'
                                                id='validationCustomCodePostal'
                                                required
                                        />
                                        <div className='invalid-feedback'>
                                                Renseignez votre code postal,
                                                svp.
                                        </div>
                                </div>
                                <div className='col-md-6'>
                                        <label
                                                form='validationCustomDepartement'
                                                className='form-label'
                                        >
                                                Département
                                        </label>
                                        <input
                                                placeholder='132 caractère minimum'
                                                type='text'
                                                className='form-control'
                                                id='validationCustomDepartement'
                                                required
                                        />
                                        <div className='invalid-feedback'>
                                                Renseignez votre département
                                                correct, svp.
                                        </div>
                                </div>
                        </form>
                </div>
        );
}
