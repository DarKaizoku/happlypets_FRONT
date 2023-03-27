export default function SosPhoto() {
  return (
    <div className="container-fluid text-center mt-3">
      <img
        src="https://i.postimg.cc/hG2tRsNG/shutterstock-1698643315.jpg"
        alt="profil animal"
        title="photo de profil animal"
        className="img-thumbnail"
        style={{ height: 200, width: 200, borderRadius: 100 }}
      />
      <div>
        <button
          type="button"
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#ajoutPhoto"
          name="addPhoto"
        >
          <img src="addphoto32.png" alt="" />
        </button>
      </div>
      <div
        className="modal fade"
        id="ajoutPhoto"
        tabIndex={-1}
        aria-labelledby="photoProfilLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered bleu">
          <div className="modal-content">
            <div className="modal-header bg-warning">
              <h1 className="modal-title fs-5" id="photoProfilLabel bg-warning">
                Photo de profil de votre animal
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body shadow bg-warning">
              <ul>
                <li>
                  Rendez vous sur le site{" "}
                  <a
                    href="https://postimages.org/fr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    postimages
                  </a>
                </li>
                <li>
                  Selectionnez votre image avec le bouton "Choisissez votre
                  image"
                </li>
                <li>
                  Une fois validée, copiez le "lien direct" et le coller ici :
                </li>
              </ul>
              <form>
                <div className="mb-3">
                  <label htmlFor="urlPhoto" className="col-form-label">
                    Lien de l'image
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="urlPhoto"
                    name="photoUrl"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer bg-warning">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
              <button type="button" className="btn bleu text-light">
                Sauvegarder photo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
