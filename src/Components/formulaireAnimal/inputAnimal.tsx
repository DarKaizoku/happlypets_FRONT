export function InputAnimal({
  animal,
  setAnimal,
  habitat,
  setHabitat,
  carnetSante,
  setCarnetSante,
}: any) {
  const inputChange = (e: React.BaseSyntheticEvent) => {
    let { name, value } = e.target;

    if (name === "lof") {
      console.log(value);

      if (value === "on" && animal.lof === true) {
        return setAnimal({ ...animal, [name]: (value = false) });
      }
      return setAnimal({ ...animal, [name]: (value = true) });
    }

    setAnimal({ ...animal, [name]: value });
  };

  const inputHomeChange = (e: React.BaseSyntheticEvent) => {
    const { name, value } = e.target;

    if (name === "habitats") {
      return setHabitat({ ...habitat, [name]: value });
    }
  };

  const inputSante = (e: React.BaseSyntheticEvent) => {
    const { name, value } = e.target;
    if (name === "poids") {
      return setCarnetSante({ ...carnetSante, [name]: +value });
    } else {
      setCarnetSante({ ...carnetSante, [name]: value });
    }
  };

  return (
    <div className="container-fluid">
      <h3>Informations sur l'animal</h3>
      <form className="container-fluid row g-3 needs-validation" noValidate>
        <div className="col-md-4">
          <label htmlFor="validationCustomNom" className="form-label">
            Nom
          </label>
          <input
            onChange={(e) => inputChange(e)}
            type="text"
            className="form-control"
            id="validationCustomNom"
            name="nom"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomEspece" className="form-label">
            Espèce
          </label>
          <input
            onChange={(e) => inputChange(e)}
            type="text"
            className="form-control"
            id="validationCustomEspece"
            name="espece"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomRace" className="form-label">
            Race
          </label>
          <div className="input-group has-validation">
            <input
              onChange={(e) => inputChange(e)}
              type="text"
              className="form-control"
              id="validationCustomRace"
              aria-describedby="inputGroupPrepend"
              name="race"
              required
            />
            <div className="invalid-feedback">Choisissez une race svp.</div>
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomAnniversaire" className="form-label">
            Anniversaire
          </label>
          <input
            onChange={(e) => inputChange(e)}
            placeholder="jj/mm/aaaa"
            type="date"
            className="form-control"
            id="validationCustomAnniversaire"
            name="date_de_naissance"
            required
          />
          <div className="invalid-feedback">
            Renseignez une date valide svp.
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomGenre" className="form-label">
            Genre
          </label>
          <select
            onChange={(e) => inputChange(e)}
            className="form-select"
            id="validationCustomGenre"
            name="genre"
            required
          >
            <option defaultValue="choix...">Choix...</option>
            <option value="Femelle">Femelle</option>
            <option value="Mâle">Mâle</option>
          </select>
          <div className="invalid-feedback">
            Selectionnez un genre valide svp.
          </div>
        </div>
        <div className="col-md-4 row align-items-end">
          <div className="form-check">
            <label className="form-check-label ms-3" htmlFor="lofCheck">
              Pedigree inscrit (LOF, LOOF,etc...)
            </label>
            <input
              onChange={(e) => inputChange(e)}
              className="form-check-input ms-3"
              type="checkbox"
              id="lofCheck"
              name="lof"
              required
            />
          </div>
        </div>
        <h3>Type d'habitat</h3>
        <div className="col-md-4">
          <input
            type="text"
            onChange={(e) => inputHomeChange(e)}
            name="habitats"
            className="form-control"
            id="typeHabitat"
            placeholder="Box, champ, parc, niche, etc..."
          />
        </div>
        <h3>Informations du carnet de santé</h3>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Poids
          </label>
          <input
            type="text"
            onChange={(e) => inputSante(e)}
            name="poids"
            className="form-control"
            id="validationCustom02"
            placeholder="Kg..."
          />{" "}
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustom04" className="form-label">
            Stérilisé
          </label>
          <select
            className="form-select"
            id="validationCustom04"
            onChange={(e) => inputSante(e)}
            name="steriliser"
            required
          >
            <option defaultValue="choix">Choix...</option>
            <option value="oui">oui</option>
            <option value="non">non</option>
          </select>
          <div className="invalid-feedback">Selectionner la valeur.</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            Vaccin
          </label>
          <input
            type="text"
            onChange={(e) => inputSante(e)}
            name="vaccin"
            className="form-control"
            id="validationCustom01"
            placeholder="Nom..."
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom05" className="form-label">
            Date du vaccin
          </label>
          <input
            type="date"
            className="form-control"
            id="validationCustom05"
            onChange={(e) => inputSante(e)}
            name="date_vaccin"
          />
        </div>
        <div className="valid-feedback">Looks good!</div>
      </form>
    </div>
  );
}
