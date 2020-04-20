import React from "react";
import styled from "styled-components";

type TestVType = {
  test: string;
};

export const TestB = [{ title: "Test", name: "test" }];

export const TestV = ({ test }: any) => (
  <div>ok</div>
  // <Div>
  //   <File>
  //     <div className="outer-header" />
  //     <div className="container">
  //       <div className="inner-header" />
  //       <div className="sender-info">
  //         <div className="a" />
  //         <div className="b" />
  //         <div className="c" />
  //         <div className="d" />
  //         <div className="e" />
  //         <div className="a" />
  //         <span>
  //           {sFirstName}, {sLastName}
  //         </span>
  //         <span>{sAddress}</span>
  //         <span>
  //           {sPostcode} - {sCity}
  //         </span>
  //         <span>{sPhone}</span>
  //         <span>{sEmail}</span>
  //       </div>
  //       <div className="destin-info">
  //         <span>{dName}</span>
  //         <span>{dAddress}</span>
  //         <span>
  //           {dPostcode} - {dCity}
  //         </span>
  //       </div>
  //       <div className="done-at">
  //         <span>
  //           Faite à {mCity}, le {mDate}
  //         </span>
  //       </div>
  //       <div className="object-info">
  //         <span>Object: {mObjet}</span>
  //       </div>
  //       <div className="content">
  //         <p>Madame, Monsieur,</p>
  //         <p>
  //           Par la présente, je vous fais part de ma volonté de résilier mon{" "}
  //           {cFile} souscrit le {cStartDate} auprès de vos services, sous le
  //           numéro {cFileNumber}.
  //         </p>
  //         <p>Je souhaite résilier pour la raison suivante : {cReason}</p>
  //         <p>
  //           Aussi, je vous demande de bien vouloir mettre fin à ce contrat/cet
  //           abonnement à compter du {cEndDate}.
  //         </p>
  //         <p>
  //           Si le règlement se fait par prélèvement automatique préciser : Ayant
  //           opté pour le prélèvement automatique, je vous demande de bien
  //           vouloir interrompre les prélèvements dès que la résiliation sera
  //           effective.
  //         </p>
  //         <br />
  //         <p>
  //           Veuillez agréer, Madame, Monsieur, l'expression de mes salutations
  //           distinguées.
  //         </p>
  //       </div>
  //       <div className="signature">
  //         <p>Signature</p>
  //       </div>
  //       <div className="inner-footing" />
  //     </div>
  //     <div className="outer-footing" />
  //   </File>
  // </Div>
);

const Div = styled.div`
  ${(p: any) => p.theme}
`;
