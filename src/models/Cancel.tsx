import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import styled from "styled-components";

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
  ref,
}: any) => (
  <Div>
    <div className="outer-header" />
    <div className="container">
      <div className="inner-header" />

      <div className="photo" />
      <div className="sender-names" ref={ref}>
        <span className="sender-first-name">{sFirstName}</span>
        <span> </span>
        <span className="sender-last-name">{sLastName}</span>
      </div>
      <span className="sender-address">{sAddress}</span>
      <span className="sender-postcode">{sPostcode}</span>
      <span className="sender-city">{sCity}</span>
      <span className="sender-phone">{sPhone}</span>
      <span className="sender-email">{sEmail}</span>

      <span className="destin-name">{dName}</span>
      <span className="destin-address">{dAddress}</span>
      <span className="destin-postcode">{dPostcode}</span>
      <span className="destin-city">{dCity}</span>

      <span className="done-at">
        Faite à {mCity}, le {mDate}
      </span>

      <span className="object-info">Object: {mObjet}</span>

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

      <div className="inner-footing" />
    </div>
    <div className="outer-footing" />
  </Div>
);

const Example = () => {
  const componentRef: any = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <CancelV ref={componentRef} />
    </div>
  );
};

export default Example;

const Div = styled.div`
  background: white;
  ${(p: any) => p.theme};
`;
