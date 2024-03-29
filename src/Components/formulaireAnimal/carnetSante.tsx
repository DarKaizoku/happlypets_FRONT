export default function CarnetSante({ compte }: any) {
    return (
        <div className="container-fluid">
            <div className="container bg-warning mx-auto mb-3 rounded">
                <form className="row g-3 needs-validation" noValidate>
                    <div className="col-md-4">
                        <label
                            htmlFor="validationCustom01"
                            className="form-label"
                        >
                            Animal concerné
                        </label>
                        <select
                            className="form-select"
                            id="validationCustom04"
                            required
                        >
                            <option defaultValue="choix">Choix...</option>
                            <option value="oui">{compte}</option>
                            <option value="non">non</option>
                        </select>
                        <label
                            htmlFor="validationCustom01"
                            className="form-label"
                        >
                            Vaccin
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="Nom..."
                        />
                        <div className="valid-feedback">Looks good!</div>
                    </div>

                    <div className="col-md-4">
                        <label
                            htmlFor="validationCustom02"
                            className="form-label"
                        >
                            Poids
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom02"
                            placeholder="Kg..."
                        />{' '}
                        <label
                            htmlFor="validationCustom05"
                            className="form-label"
                        >
                            Date de rappel
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="validationCustom05"
                        />
                        <div className="valid-feedback">Looks good!</div>
                    </div>

                    <div className="col-md-4">
                        <label
                            htmlFor="validationCustom04"
                            className="form-label"
                        >
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
                </form>
            </div>
        </div>
    );
}
