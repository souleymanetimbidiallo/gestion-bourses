export interface Etudiant {
    nom: string;
    prenom: string;
    INE: string;
    dateNaissance: Date;
    lieuNaissance: string;
    email: string;
    motPasse: string;
    telephone: string;
    niveau: string;
    domaine: string;
    documents?: string[];
    created: Date;  
}