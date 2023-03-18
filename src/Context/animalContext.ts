import React from "react";
import { Animal } from "../types/animal.type";

export const AnimalContext = React.createContext({
  animal: {
    nom: "",
    date_de_naissance: new Date(),
    espece: "",
    race: "",
    genre: "",
    lof: true,
    habitat: "",
    carnetDeSante: "",
  } as Animal,
  setUser: (value: Animal) => {},
});