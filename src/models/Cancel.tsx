import React from "react";
import styled from "styled-components";

type CancelVType = {
  firstName: string;
};

const sender = {
  title: "Emetteur",
  items: [
    { title: "Prénom", name: "sFirstName" },
    { title: "Nom", name: "sLastName" },
    { title: "Adresse", name: "sAddress" },
    { title: "Code Postal", name: "sPostcode" },
    { title: "Ville", name: "sCity" },
    { title: "Numéro de téléphone", name: "sPhone" },
    { title: "Adresse email", name: "sEmail" },
  ],
};
const destination = {
  title: "Destinataire",
  items: [
    { title: "Destinataire", name: "dName" },
    { title: "Adresse du destinataire", name: "dAddress" },
    { title: "Code postal du destinataire", name: "dPostcode" },
    { title: "Ville du destinataire", name: "dCity" },
  ],
};
const misc = {
  title: "Divers",
  items: [
    { title: "Faite à (Ville)", name: "mCity" },
    { title: "Faite le (Date)", name: "mDate" },
    { title: "Objet", name: "mObjet" },
  ],
};
const content = {
  title: "Contenu",
  items: [
    { title: "Nature du contrat/abonnement", name: "cFile" },
    { title: "Date de début", name: "cStartDate" },
    { title: "Date de fin", name: "cEndDate" },
    { title: "Numéro de contrat/abonnement", name: "cFileNumber" },
    { title: "Raison de la décision", name: "cReason" },
  ],
};

export const CancelB = [sender, destination, misc, content];

export const CancelV = ({
  // SENDER
  sFirstName,
  sLastName,
  sAddress,
  sPostcode,
  sCity,
  sPhone,
  sEmail,
  // DESTINATION
  dName,
  dAddress,
  dPostcode,
  dCity,
  // MISC
  mCity,
  mDate,
  mObjet,
  // CONTENT
  cFile,
  cStartDate,
  cEndDate,
  cFileNumber,
  cReason,
  ref,
}: any) => (
  <Div>
    <div className="outer-header x" />
    <div className="container x">
      <div className="inner-header x" />

      <div className="photo x" />
      <div className="sender-names x" ref={ref}>
        <span className="sender-first-name x">{sFirstName}</span>
        <span> </span>
        <span className="sender-last-name x">{sLastName}</span>
      </div>
      <span className="sender-address x">{sAddress}</span>
      <span className="sender-postcode x">{sPostcode}</span>
      <span className="sender-city x">{sCity}</span>
      <span className="sender-phone x">{sPhone}</span>
      <span className="sender-email x">{sEmail}</span>

      <span className="destin-name x">{dName}</span>
      <span className="destin-address x">{dAddress}</span>
      <span className="destin-postcode x">{dPostcode}</span>
      <span className="destin-city x">{dCity}</span>

      <span className="done-at x">
        Faite à {mCity}, le {mDate}
      </span>

      <span className="object-info x">Object: {mObjet}</span>

      <div className="content x">
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

      <p className="signature x">Signature</p>

      <div className="inner-footing x" />
    </div>
    <div className="outer-footing x" />
  </Div>
);

const Div = styled.div`
  background: white;
  ${(p: any) => p.theme};
`;
