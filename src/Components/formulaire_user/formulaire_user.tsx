import { useState } from "react";
import { TUser } from "../../types/user.type";
import { InputUser } from "./input_user";

export function FormulaireUser({ token }: any) {
  const newUser: TUser = {
    prenom: "",
    nom: "",
    pseudo: "",
    email: "",
    password: "",
    passwordConfirmed: "",
    adresse: "",
    ville: "",
    codepostal: "",
    departement: "",
  };

  const [user, setUser] = useState(newUser);

  const urlAddUser = "http://localhost:3000/users/register";

  const login = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    if (user.password !== user.passwordConfirmed) {
      return alert("Merci de vérifier votre mot de passe !!");
    }
    async function fetchData() {
      const response = await fetch(urlAddUser, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const responseJson = await response.json();
      if (responseJson.statusCode !== 201) {
        return alert(responseJson.message.map((data: any) => data + `\n`));
      }
      alert(responseJson.message);
    }
    fetchData();
  };

  return (
    <div className="container-fluid">
      <div className="container-fluid card bg-warning mx-auto">
        <div className="card-body">
          <h5 className="card-title text-center">Inscription</h5>

          <div className="row">
            <div className="col-md-8">
              <InputUser user={user} setUser={setUser}></InputUser>
            </div>

            {/* <div className='col-12 mt-3'>
                                                <div className='form-check'>
                                                        <input
                                                                className='form-check-input'
                                                                type='checkbox'
                                                                value=''
                                                                id='invalidCheck'
                                                                required
                                                        />
                                                        <label
                                                                className='form-check-label'
                                                                htmlFor='invalidCheck'
                                                        >
                                                                J'accepte que
                                                                les données de
                                                                mon profil soit
                                                                publique sur ce
                                                                site
                                                        </label>
                                                </div>
                                        </div>
                                        <div className='col-12 mt-3'>
                                                <div className='form-check'>
                                                        <input
                                                                className='form-check-input'
                                                                type='checkbox'
                                                                value=''
                                                                id='invalidCheck'
                                                                required
                                                        />
                                                        <label
                                                                className='form-check-label'
                                                                htmlFor='invalidCheck'
                                                        >
                                                                Je suis d'accord
                                                                avec les termes
                                                                et conditions du
                                                                site
                                                        </label>
                                                        <div className='invalid-feedback'>
                                                                You must agree
                                                                before
                                                                submitting.
                                                        </div>
                                                </div>
                                        </div> */}
            <div className="col-md-4 row custom-line">
              <div className="container-fluid text-center mt-3 col align-self-center">
                <img
                  src="default-avatar-user.jpg"
                  alt="profil inconnu"
                  title="photo de profil utilisateur"
                  className="img-thumbnail bg-black"
                  style={{
                    height: 200,
                    width: 200,
                  }}
                />
                .
              </div>

              <div className="container text-center mt-3">
                <button
                  onClick={(e) => login(e)}
                  className="btn bleu text-light btn-outline-primary"
                  type="submit"
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
