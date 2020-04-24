import React from "react";
import styled from "styled-components";

type CancelVType = {
  firstName: string;
};

const sender = {
  title: "Emetteur",
  id: "sender",
  items: [
    { title: "Prénom", name: "sFirstName", icon: "person" },
    { title: "Nom", name: "sLastName", icon: "person" },
    { title: "Adresse", name: "sAddress", icon: "home", fullRow: true },
    {
      title: "Code Postal",
      name: "sPostcode",
      icon: "map-marker",
    },
    { title: "Ville", name: "sCity", icon: "map-marker" },
    {
      title: "Numéro de téléphone",
      name: "sPhone",
      icon: "phone",
    },
    { title: "Adresse email", name: "sEmail", icon: "envelope" },
  ],
};
const destination = {
  title: "Destinataire",
  id: "destination",
  items: [
    { title: "Destinataire", name: "dName", icon: "person", fullRow: true },
    {
      title: "Adresse",
      name: "dAddress",
      icon: "home",
      fullRow: true,
    },
    {
      title: "Code postal",
      name: "dPostcode",
      icon: "map-marker",
    },
    {
      title: "Ville",
      name: "dCity",
      icon: "map-marker",
    },
  ],
};
const misc = {
  title: "Divers",
  id: "misc",
  items: [
    {
      title: "Faite à (Ville)",
      name: "mCity",
      icon: "map-marker",
    },
    {
      title: "Faite le (Date)",
      name: "mDate",
      icon: "calendar",
      type: "date",
    },
    { title: "Objet", name: "mObjet", icon: "edit", fullRow: true },
  ],
};
const content = {
  title: "Contenu",
  id: "content",
  items: [
    {
      title: "Nature du contrat/abonnement",
      name: "cFile",
      icon: "edit",
      fullRow: true,
    },
    // {
    //   title: "Date de début",
    //   name: "cStartDate",
    //   icon: "timeline-events",
    //   fullRow: true,
    //   type: "textArea",
    // },
    {
      title: "Date de début",
      name: "cStartDate",
      icon: "timeline-events",
    },
    {
      title: "Date de fin",
      name: "cEndDate",
      icon: "timeline-events",
    },
    {
      title: "Numéro de contrat/abonnement",
      name: "cFileNumber",
      icon: "numerical",
      fullRow: true,
    },
    {
      title: "Raison de la décision",
      name: "cReason",
      icon: "comment",
      fullRow: true,
      type: "textArea",
    },
  ],
};

export const CancelB = [sender, destination, misc, content];
export const CancelL = {
  sender: true,
  destination: true,
  misc: true,
  content: true,
};

export const CancelV = ({
  // SENDER
  sFirstName = "Prénom",
  sLastName = "Nom",
  sAddress = "Adresse",
  sPostcode = "Code Postal",
  sCity = "Ville",
  sPhone = "Numéro de téléphone",
  sEmail = "Adresse email",
  // DESTINATION
  dName = "Destinataire",
  dAddress = "Adresse",
  dPostcode = "Code Postal",
  dCity = "Ville",
  // MISC
  mCity = "(Ville)",
  mDate = "(Date)",
  mObjet = "Résiliation de contrat",
  // CONTENT
  cFile = "(contrat/abonnement)",
  cStartDate = "(date de début)",
  cEndDate = "(date de fin)",
  cFileNumber = "(numéro du contrat/abonnement)",
  cReason = "(raison de la décision)",
  ref,
}: any) => (
  <Div>
    <div className="top" />
    <div className="left" />
    <div className="right" />

    <div className="container">
      <div className="head">
        <ul className="sender">
          <li>
            {sFirstName} {sLastName}
          </li>
          <li>{sAddress}</li>
          <li>{sPostcode}</li>
          <li>{sCity}</li>
          <li>{sPhone}</li>
          <li>{sEmail}</li>
        </ul>

        <ul className="destin">
          <li>{dName}</li>
          <li>{dAddress}</li>
          <li>{dPostcode}</li>
          <li>{dCity}</li>
        </ul>

        <span className="done-at">
          Fait à {mCity}, le {mDate}
        </span>

        <span className="object-info">Objet: {mObjet}</span>
      </div>

      <div className="content">
        <p>Madame, Monsieur,</p>
        <p>
          Par la présente, je vous fais part de ma volonté de résilier mon{" "}
          {cFile} souscrit le {cStartDate} auprès de vos services, sous le
          numéro {cFileNumber}.
        </p>
        <p>Je souhaite résilier pour la raison suivante : {cReason}</p>
        <p>
          Aussi, je vous demande de bien vouloir mettre fin à ce contrat/cet
          abonnement à compter du {cEndDate}.
        </p>
        <p>
          Si le règlement se fait par prélèvement automatique préciser : Ayant
          opté pour le prélèvement automatique, je vous demande de bien vouloir
          interrompre les prélèvements dès que la résiliation sera effective.
        </p>
        <br />
        <p>
          Veuillez agréer, Madame, Monsieur, l'expression de mes salutations
          distinguées.
        </p>
      </div>

      <p className="signature">Signature</p>
    </div>
    <div className="bottom" />
  </Div>
);

const Div = styled.div`
  background: white;
  ${(p: any) => p.theme};
`;
