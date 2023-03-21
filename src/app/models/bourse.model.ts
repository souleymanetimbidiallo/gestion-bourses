import { Domaine } from "./domaine.model";
import { Niveau } from "./niveau.model";

export interface Bourse {
    _id: string;
    nom: string;
    description: string;
    montant: number;
    niveaux: Niveau[];
    domaines: Domaine[];
    dateLimite: Date;
    paysDestination: string;
    universiteDestination: string;
}