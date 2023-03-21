import { Bourse } from "./bourse.model";
import { Document } from "./document.model";
import { Etudiant } from "./etudiant.model";

export interface Candidature {
    _id: string;
    etudiant: Etudiant;
    bourse: Bourse;
    dateDepot: Date;
    etat: 'en cours' | 'en attente' | 'acceptée' | 'refusée';
    resultat_selection: boolean;
    commentaire_selection: string;
    documents: Document[];
  }