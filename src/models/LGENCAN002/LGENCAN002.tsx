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
        title: "Done the (Date)",
        name: "mDate",
        icon: "calendar",
        type: "date",
        fullRow: true,
      },
      // Fullrow date won't take the full row
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
  mDate = "(Date)",
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
        <br />
      </div>
      <br />

      <div className="content">
        <p>Dear {dName}</p>
        <br />
        <p>
          Effective {mDate}, I inform you that I no longer require your
          services.
        </p>
        <p>
          I thank you for your services until now, however I must request that
          you cancel the {cFile} which began on {cDate[0]}, number {cFileNumber}
          , because {cReason}
        </p>
        <p>
          Please proceed to the official cancellation of the {cFile} by{" "}
          {cDate[1]} and also ensure that any form of payment linked to the{" "}
          {cFile} are ceased as well. I must also request that you send me an
          official confirmation of the cancellation by email and/or through a
          letter.
        </p>
        <br />
        <p>Thank you for your time.</p>
        <p>Sincerely,</p>
      </div>

      <p className="signature">Signature</p>
    </div>
    <div className="bottom" />
  </Div>
);

const Naming = {
  id: ["LGENCAN002"],
  title: ["Generic Cancellation letter 2"],
};

export const LGENCAN002 = { Builder, View, Naming };

const Div = styled.div`
  background: white;
  ${(p: any) => p.theme};
`;
