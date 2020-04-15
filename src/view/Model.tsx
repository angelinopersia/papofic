import React from "react";
import styled from "styled-components";
import { useOvermind } from "../store";

const Model = () => {
  const { state, actions } = useOvermind();

  const cont = state.data.content;
  const dest = state.data.destination;
  const misc = state.data;
  const send = state.data.sender;

  return (
    <File>
      <SenderInfo>
        <span>
          {send.firstName}, {send.lastName}
        </span>
        <span>{send.address}</span>
        <span>
          {send.postcode} - {send.city}
        </span>
        <span>{send.phone}</span>
        <span>{send.email}</span>
      </SenderInfo>
      <DestinInfo>
        <span>{dest.name}</span>
        <span>{dest.address}</span>
        <span>
          {dest.postcode} - {dest.city}
        </span>
        <br />
        <span>
          Faite à {misc.atCity}, le {misc.atDate}
        </span>
      </DestinInfo>
      <ObjectInfo>
        <span>Object: {misc.object}</span>
      </ObjectInfo>
      <Text>
        <p>Madame, Monsieur,</p>
        <p>
          Par la présente, je vous fais part de ma volonté de résilier mon{" "}
          {cont.file} souscrit le {cont.startDate} auprès de vos services, sous
          le numéro {cont.fileNumber}.
        </p>
        <p>Je souhaite résilier pour la raison suivante : {cont.reason}</p>
        <p>
          Aussi, je vous demande de bien vouloir mettre fin à ce contrat/cet
          abonnement à compter du {cont.endDate}.
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
      </Text>
      <Signature>
        <br />
        <p>Signature</p>
      </Signature>
    </File>
  );
};

const SenderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DestinInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align-last: right;
`;

const ObjectInfo = styled.div`
  padding: 20px 0 20px 0;
  font-weight: bold;
`;

const Text = styled.div``;

const Signature = styled.div`
  font-style: italic;
`;

const File = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px 0 50px;
  padding: 25px;
  width: 794px;
  height: 1123px;
  background-color: white;
  box-shadow: 0px 0px 20px 0px #888888;
  border: 1px black solid;
  color: black;
`;

export default Model;
