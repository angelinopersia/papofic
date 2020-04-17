import React from "react";
import styled from "styled-components";
import { Affix } from "antd";

type CancelVType = {
  firstName: string;
};

export const CancelB = [
  // SENDER
  { title: "Prénom", name: "sFirstName" },
  { title: "Nom", name: "sLastName" },
  { title: "Adresse", name: "sAddress" },
  { title: "Code Postal", name: "sPostcode" },
  { title: "Ville", name: "sCity" },
  { title: "Numéro de téléphone", name: "sPhone" },
  { title: "Adresse email", name: "sEmail" },
  // DESTINATION
  { title: "Destinataire", name: "dName" },
  { title: "Adresse du destinataire", name: "dAddress" },
  { title: "Code postal du destinataire", name: "dPostcode" },
  { title: "Ville du destinataire", name: "dCity" },
  // MISC
  { title: "Faite à (Ville)", name: "mCity" },
  { title: "Faite le (Date)", name: "mDate" },
  { title: "Objet", name: "mObjet" },
  // CONTENT
  { title: "Nature du contrat/abonnement", name: "cFile" },
  { title: "Date de début", name: "cStartDate" },
  { title: "Date de fin", name: "cEndDate" },
  { title: "Numéro de contrat/abonnement", name: "cFileNumber" },
  { title: "Raison de la décision", name: "cReason" },
];

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
}: any) => (
  // <Affix>
  <Div>
    <File>
      <div className="outer-header" />
      <div className="container">
        <div className="inner-header" />
        <div className="sender-info">
          <span>
            {sFirstName}, {sLastName}
          </span>
          <span>{sAddress}</span>
          <span>
            {sPostcode} - {sCity}
          </span>
          <span>{sPhone}</span>
          <span>{sEmail}</span>
        </div>
        <div className="destin-info">
          <span>{dName}</span>
          <span>{dAddress}</span>
          <span>
            {dPostcode} - {dCity}
          </span>
        </div>
        <div className="done-at">
          <span>
            Faite à {mCity}, le {mDate}
          </span>
        </div>
        <div className="object-info">
          <span>Object: {mObjet}</span>
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
            opté pour le prélèvement automatique, je vous demande de bien
            vouloir interrompre les prélèvements dès que la résiliation sera
            effective.
          </p>
          <br />
          <p>
            Veuillez agréer, Madame, Monsieur, l'expression de mes salutations
            distinguées.
          </p>
        </div>
        <div className="signature">
          <p>Signature</p>
        </div>
        <div className="inner-footing" />
      </div>
      <div className="outer-footing" />
    </File>
  </Div>
  // </Affix>
);

const Div = styled.div`
  background: white;
  ${(p: any) => p.theme};
`;

const File = styled.div`
  margin: 50px 50px 0 50px;
  width: 794px;
  height: 1123px;
  box-shadow: 0px 0px 20px 0px #888888;
  background-color: white;
`;
