export default function CarnetId() {
    return (
        <div className="container-fluid">
            <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">
                        Vaccin
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        placeholder="Rage"
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">
                        Poids
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="validationCustom02"
                        placeholder="12kg"
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="validationCustom04" className="form-label">
                        Stérilisé
                    </label>
                    <select
                        className="form-select"
                        id="validationCustom04"
                        required
                    >
                        <option defaultValue="choix">Choix...</option>
                        <option value="oui">oui</option>
                        <option value="non">non</option>
                    </select>
                    <div className="invalid-feedback">
                        Selectionner la valeur.
                    </div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="validationCustom05" className="form-label">
                        Date de rappel
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="validationCustom05"
                        required
                    />
                </div>
            </form>
        </div>
    );
}
