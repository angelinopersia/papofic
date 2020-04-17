export type StateType = {
  model: string;
  data: any;
};

export const state: any = {
  model: "cancel",
  theme: "default",
  data: {
    // SENDER
    sFirstName: "Prénom",
    sLastName: "Nom",
    sAddress: "Adresse",
    sPostcode: "Code Postal",
    sCity: "Ville",
    sPhone: "Numéro de téléphone",
    sEmail: "Adresse email",
    // DESTINATION
    dName: "Destinataire",
    dAddress: "Adresse",
    dPostcode: "Code Postal",
    dCity: "Ville",
    // MISC
    mCity: "(Ville)",
    mDate: "(Date)",
    mObjet: "Résiliation de contrat",
    // CONTENT
    cFile: "(contrat/abonnement)",
    cStartDate: "(date de début)",
    cEndDate: "(date de fin)",
    cFileNumber: "(numéro du contrat/abonnement)",
    cReason: "(raison de la décision)",
  },
};
