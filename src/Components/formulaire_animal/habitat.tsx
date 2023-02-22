export function Habitat() {
  return (
    <div>
      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-4">
          <label htmlFor="typeHabitat" className="form-label">
            Type d'habitat
          </label>
          <input
            type="text"
            className="form-control"
            id="typeHabitat"
            placeholder="Box, champ, parc, niche, etc..."
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="adresseInput" className="form-label">
            Adresse
          </label>
          <input
            type="text"
            className="form-control"
            id="adressInput"
            placeholder="N°, Voie"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="cpInput" className="form-label">
            Code postal
          </label>
          <input
            type="number"
            className="form-control"
            id="cpInput"
            placeholder="00000"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="villeInput" className="form-label">
            Ville
          </label>
          <input
            type="text"
            className="form-control"
            id="villeInput"
            placeholder="Ville"
          />
        </div>
      </form>
    </div>
  );
}
