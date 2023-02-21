export default function CarnetId() {
    return (
        <div>
            <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Vaccin</label>
                    <input type="text" className="form-control" id="validationCustom01" value="Rage" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Poids</label>
                    <input type="text" className="form-control" id="validationCustom02" value="12kg" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">Stérilisé</label>
                    <select className="form-select" id="validationCustom04" required >
                        <option selected disabled value="">Choix...</option>
                        <option>oui</option>
                        <option>non</option>
                    </select>
                    <div className="invalid-feedback">
                        Selectionner la valeur.
                    </div>
                </div>

                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Date de rappel</label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Enregistrez</button>
                </div>
            </form>
        </div>
    )
}
