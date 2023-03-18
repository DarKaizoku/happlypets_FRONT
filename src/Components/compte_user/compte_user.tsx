import { useContext, useState } from 'react';
import { UpdateUser } from './update_user';
import './compte_user.css';
import { DeleteUser } from './Delete_user';
import { UserContext } from '../../Context/userContext';
import { TUser } from '../../types/user.type';
import { updateAnimalContext } from '../../Context/updateAnimalContext';
import { title } from 'process';

export default function Compte_users({ token, setPage, logout }: any) {
    const { user } = useContext(UserContext);

    const { idAnimal, setIdAnimal } = useContext(updateAnimalContext);
    const [preview] = useState<string>('./default-avatar-user.jpg');
    const [preview_animal] = useState<string>('./animal.jpg');
    const comptani = (e: React.BaseSyntheticEvent) => {
        const { title } = e.currentTarget;
        console.log(title);
        setIdAnimal(title);
    };
    console.log(idAnimal);

    let affichageUser;

    if (user !== null) {
        affichageUser = [user].map((data: TUser, i: number) => (
            <div className="container-fluid text-center">
                <div className="container">
                    <div className="row ">
                        <div className="col-sm-12 col-lg-2 bg-warning rounded pe-2">
                            <div className="">
                                <img
                                    src={preview}
                                    alt="example placeholder"
                                    className="img-thumbnail mt-3 mb-2"
                                    style={{
                                        height: 150,
                                        width: 150,
                                        borderRadius: 100,
                                    }}
                                />
                            </div>
                            <div>Pseudo : {data.pseudo}</div>
                            <div>Nom : {data.nom}</div>
                            <div>Prénom : {data.prenom}</div>
                            <div>Adresse : {data.adresse}</div>
                            <div>
                                Code Postal : {data.codepostal}
                                <br />
                                Ville : {data.ville}
                            </div>
                            <div>Département : {data.departement}</div>{' '}
                            <div className="mt-3  p-2 row">
                                <DeleteUser
                                    className=" col text-light me-2"
                                    href="#"
                                    token={token}
                                />

                                <UpdateUser
                                    className=" col text-light ms-2 "
                                    setPage={setPage}
                                />
                            </div>
                            <button
                                onClick={(e) => logout()}
                                className="btn couleur  btn-sm  mt-3 ms-2 me-3 mb-2 border border-primary col text-light"
                            >
                                Déconnexion
                            </button>
                        </div>

                        <div className="container-fluid col-sm-12 col-lg-9 ">
                            <div className="text-start text-light">
                                Mes animaux
                            </div>
                            <div className="container-fluid col-sm-12">
                                {' '}
                                <div
                                    className="container col-12 text-light text-center couleur sm rounded lg rounded mt-4  ms-4 row justify-content-start"
                                    style={{
                                        height: 45,
                                    }}
                                >
                                    <div className="col-2  ms-5">Nom</div>
                                    <div className="col-2 ">Espèce</div>
                                    <div className="col-2 ">Genre</div>
                                    <div className=" col-3 ">
                                        Date de naissance
                                    </div>
                                </div>
                                <div
                                    className="container row justify-content-start text-center text-light overflow-y-scroll inner"
                                    style={{ height: 150 }}
                                >
                                    {data.animal?.map((data) => (
                                        <div>
                                            <div
                                                defaultValue={data.id}
                                                title={data.id.toString()}
                                                id="animal"
                                                onClick={(e) => {
                                                    comptani(e);
                                                    setIdAnimal(
                                                        data.id.toString(),
                                                    );
                                                    setPage('compteanimal');
                                                }}
                                                key={i}
                                                className="compte row justify-content-start text-dark m-0"
                                            >
                                                <div
                                                    className=" container text-dark text-center bg-warning sm rounded lg rounded mt-2 mb-2 ms-4 row justify-content-start"
                                                    style={{
                                                        height: 45,
                                                    }}
                                                >
                                                    <img
                                                        src={preview_animal}
                                                        className="rounded-circle float-start mt-1 mb-2 col-1 border border-0"
                                                        style={{
                                                            height: 35,
                                                        }}
                                                        alt="patpat"
                                                    />
                                                    <div className="col-2 p-0">
                                                        {data.nom}
                                                    </div>
                                                    <div className="col-2 p-0">
                                                        {data.espece}
                                                    </div>
                                                    <div className="col-2 p-0">
                                                        {data.genre}
                                                    </div>
                                                    <div className="col-3 p-0">
                                                        {`${data.date_de_naissance}`}
                                                    </div>
                                                    {/*   <div className="col-2">
                                                    <button className="couleur border border-0 rounded mt-2 me-2">
                                                        <i className="bi bi-x-lg"></i>
                                                    </button>
                                                    <button className="couleur border border-0 rounded mt-2">
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </button>
                                                </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-start text-light mt-5">
                                Mon calendrier
                            </p>
                            <div className="bg-warning sm rounded lg rounded mt-2">
                                Calendrier
                            </div>
                        </div>
                    </div>{' '}
                </div>
                <div className="">
                    <button
                        onClick={() => {
                            setPage('animal');
                        }}
                        className="bg-warning sm rounded lg rounded mt-2 me-5"
                    >
                        Ajouter un animal
                    </button>
                    <button className="bg-warning sm rounded lg rounded mt-2 me-5">
                        Ajouter un événement
                    </button>
                    <button className="bg-warning sm rounded lg rounded mt-2">
                        Agenda
                    </button>
                </div>
            </div>
        ));
    }

    return (
        <div className="container-fluid">
            <div className="container ">{affichageUser}</div>
        </div>
    );
}
