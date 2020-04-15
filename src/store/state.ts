export type StateType = {
  data: {
    content: {
      file: string;
      startDate: string;
      fileNumber: string;
      reason: string;
      endDate: string;
    };
    destination: {
      name: string;
      address: string;
      postcode: string;
      city: string;
    };
    sender: {
      firstName: string;
      lastName: string;
      address: string;
      postcode: string;
      city: string;
      phone: string;
      email: string;
    };
    atCity: string;
    atDate: string;
    object: string;
  };
};

export const state: StateType = {
  data: {
    content: {
      file: "contrat",
      startDate: "15 décembre",
      fileNumber: "12345",
      reason:
        "Mon Contrat/abonnement arrive à échéance et je ne souhaite pas le renouveler",
      endDate: "30 décembre",
    },
    destination: {
      name: "Destinataire",
      address: "Adresse",
      postcode: "Code Postal",
      city: "Ville",
    },
    sender: {
      firstName: "Anthony",
      lastName: "Deniro",
      address: "14 rue des oliviers",
      postcode: "83200",
      city: "Toulon",
      phone: "Numéro de téléphone",
      email: "Adresse email",
    },
    atCity: "(Ville)",
    atDate: "(Date)",
    object: "lettre de résiliation",
  },
};
