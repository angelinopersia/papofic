import React from "react";
import styled from "styled-components";

type CancelVType = {
  firstName: string;
};

export const CancelB = [
  { title: "Prénom", name: "firstName" },
  { title: "Nom", name: "lastName" },
  { title: "Adresse", name: "address" },
];

export const CancelV = ({
  firstName,
  lastName,
  address,
  postcode,
  city,
  phone,
  email,
}: any) => (
  <Div>
    <div className="container">
      <span>
        {firstName}, {lastName}
      </span>
      <span>{address}</span>
      <span>
        {postcode} - {city}
      </span>
      <span>{phone}</span>
      <span>{email}</span>
    </div>
  </Div>
);

const Div = styled.div`
  ${(p: any) => p.theme}
`;

// STYLE
// const SenderInfo = styled.div`
// display: flex;
// flex-direction: column;
// `;

// const DestinInfo = styled.div`
// display: flex;
// flex-direction: column;
// text-align-last: right;
// `;

// const ObjectInfo = styled.div`
// padding: 20px 0 20px 0;
// font-weight: bold;
// `;

// const Text = styled.div``;

// const Signature = styled.div`
// font-style: italic;
// `;

// const File = styled.div`
// display: flex;
// flex-direction: column;
// margin: 0 50px 0 50px;
// padding: 25px;
// width: 794px;
// height: 1123px;
// background-color: white;
// box-shadow: 0px 0px 20px 0px #888888;
// border: 1px black solid;
// color: black;
// `;

/* <div>
        <span>{props.name}</span>
        <span>{props.address}</span>
        <span>
          {props.postcode} - {props.city}
        </span>
        <br />
        <span>
          Faite à {props.atCity}, le {props.atDate}
        </span>
      </div>
      <div>
        <span>Object: {props.object}</span>
      </div>
      <div>
        <p>Madame, Monsieur,</p>
        <p>
          Par la présente, je vous fais part de ma volonté de résilier mon
          {props.file} souscrit le {props.startDate} auprès de vos services,
          sous le numéro {props.fileNumber}.
        </p>
        <p>Je souhaite résilier pour la raison suivante : {props.reason}</p>
        <p>
          Aussi, je vous demande de bien vouloir mettre fin à ce propsrat/cet
          abonnement à compter du {props.endDate}.
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
      <div>
        <br />
        <p>Signature</p>
      </div> */
