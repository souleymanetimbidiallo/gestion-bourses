export interface Document {
    nom: string;
    description?: string;
    format: string;
    chemin: string;
    dateSoumission?: Date;
    etat?: 'en attente' | 'validé' | 'rejeté';
  }