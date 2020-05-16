import React from "react";
import styled from "styled-components";
import { BuilderType } from "../../types/index";

const Builder: BuilderType[] = [
  {
    title: "Sender",
    id: "sender",
    items: [
      { title: "First name", name: "sFirstName", icon: "person" },
      { title: "Last Name", name: "sLastName", icon: "person" },
      { title: "Address", name: "sAddress", icon: "home", fullRow: true },
      {
        title: "Post Code",
        name: "sPostCode",
        icon: "map-marker",
      },
      { title: "City", name: "sCity", icon: "map-marker" },
      {
        title: "Phone number",
        name: "sPhone",
        icon: "phone",
      },
      { title: "Email address", name: "sEmail", icon: "envelope" },
    ],
  },
  {
    title: "Destination",
    id: "destination",
    items: [
      { title: "Recipient", name: "dName", icon: "person", fullRow: true },
      {
        title: "Address",
        name: "dAddress",
        icon: "home",
        fullRow: true,
      },
      {
        title: "Post Code",
        name: "dPostCode",
        icon: "map-marker",
      },
      {
        title: "City",
        name: "dCity",
        icon: "map-marker",
      },
    ],
  },
  {
    title: "Misc",
    id: "misc",
    items: [
      {
        title: "Done at (City)",
        name: "mCity",
        icon: "map-marker",
      },
      {
        title: "Done the (Date)",
        name: "mDate",
        icon: "calendar",
        type: "date",
      },
      { title: "Object", name: "mObjet", icon: "edit", fullRow: true },
    ],
  },
  {
    title: "Content",
    id: "content",
    items: [
      {
        title: "Contract/Subscription/...",
        name: "cFile",
        icon: "edit",
        fullRow: true,
      },
      {
        title: "Start date and End date",
        name: "cDate",
        icon: "timeline-events",
        fullRow: true,
        type: "rangeDate",
      },
      {
        title: "Contract/Subscription/... number",
        name: "cFileNumber",
        icon: "numerical",
        fullRow: true,
      },
      {
        title: "Reason of the decision",
        name: "cReason",
        icon: "comment",
        fullRow: true,
        type: "textArea",
      },
    ],
  },
];

const View = ({
  // SENDER
  sFirstName = "First name",
  sLastName = "Last Name",
  sAddress = "Address",
  sPostCode = "Post Code",
  sCity = "City",
  sPhone = "Phone number",
  sEmail = "Email address",
  // DESTINATION
  dName = "Recipient",
  dAddress = "Address",
  dPostCode = "Post Code",
  dCity = "City",
  // MISC
  mCity = "(City)",
  mDate = "(Date)",
  mObjet = "Object",
  // CONTENT
  cFile = "(contract/subscription/...)",
  cDate = ["(start date)", "(end date)"],
  cFileNumber = "(contract/subscription/... number)",
  cReason = "(reason of the decision)",
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
          <li>{sPostCode}</li>
          <li>{sCity}</li>
          <li>{sPhone}</li>
          <li>{sEmail}</li>
        </ul>
        <br />
        <ul className="destin">
          <li>{dName}</li>
          <li>{dAddress}</li>
          <li>{dPostCode}</li>
          <li>{dCity}</li>
        </ul>

        <span className="done-at">
          {mCity}, {mDate}
        </span>

        <span className="object-info">Objet: {mObjet}</span>
      </div>

      <div className="content">
        <p>Dear Sir or Madam</p>
        <p>
          As of {mDate}, I would like to cancel my {cFile} for your service
          which began on {cDate[0]}, under the {cFile} number {cFileNumber}.
        </p>
        <p>I am cancelling the service for the following reason: {cReason}</p>
        <p>
          I would like you to please end this {cFile} by {cDate[1]}.
        </p>
        <p>
          Please send me a written confirmation of the cancellation within 30
          days and ensure that no more payments are applied to my account
          starting from today.
        </p>
        <br />
        <p>Thank you for your attention.</p>
        <p>Sincerly,</p>
      </div>

      <p className="signature">Signature</p>
    </div>
    <div className="bottom" />
  </Div>
);

const Naming = {
  id: ["LCAN002"],
  title: ["Cancellation letter 2"],
};

export const LCAN002 = { Builder, View, Naming };

const Div = styled.div`
  background: white;
  ${(p: any) => p.theme};
`;
