export function InputUser({ user, setUser }: any) {
        const inputChange = (e: React.BaseSyntheticEvent) => {
                const { name, value } = e.target;

                setUser({ ...user, [name]: value });
        };

        /*   const submitUser = (e: React.BaseSyntheticEvent) => {
                e.preventDefault();
                const newTarget: any[] = e.target[e.target.length - 2];
                 const test = e.target!.map((data: any) =>
                        setUser({ ...user, [data.name]: data.value })
                        console.log(data.name)
                );
                console.log(typeof e.target);
        };  */

        return (
                <div className='row'>
                        <form
                                //onSubmit={(e) => submitUser(e)}
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
                                                onChange={(e) => inputChange(e)}
                                                name='nom'
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
                                                onChange={(e) => inputChange(e)}
                                                name='prenom'
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
                                                        onChange={(e) =>
                                                                inputChange(e)
                                                        }
                                                        name='email'
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
                                                form='validationCustomPseudo'
                                                className='form-label'
                                        >
                                                Pseudo
                                        </label>
                                        <input
                                                onChange={(e) => inputChange(e)}
                                                name='pseudo'
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
                                                onChange={(e) => inputChange(e)}
                                                placeholder='132 caractère minimum'
                                                name='password'
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
                                <div className='col-md-6'>
                                        <label
                                                form='validationCustomPasswordConfirmation'
                                                className='form-label'
                                        >
                                                Confirmation du Mot de Passe
                                        </label>
                                        <input
                                                onChange={(e) => inputChange(e)}
                                                placeholder='132 caractère minimum, again !!'
                                                name='passwordConfirmed'
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
                                                onChange={(e) => inputChange(e)}
                                                placeholder='N°, type de rue, nom de rue'
                                                name='adresse'
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
                                                onChange={(e) => inputChange(e)}
                                                type='text'
                                                name='ville'
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
                                                onChange={(e) => inputChange(e)}
                                                type='text'
                                                name='codepostal'
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
                                                onChange={(e) => inputChange(e)}
                                                type='text'
                                                name='departement'
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
