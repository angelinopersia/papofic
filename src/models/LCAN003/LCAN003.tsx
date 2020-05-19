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
      { title: "Subject", name: "mSubject", icon: "edit", fullRow: true },
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
  mSubject = "Subject",
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
        <span>Date: {mDate}</span>
        <br />

        <span className="subject-info">Subject: {mSubject}</span>
      </div>

      <div className="content">
        <p>Dear Sir or Madam,</p>
        <br />
        <p>
          This letter is a request for the cancellation of my membership. The
          reason why I must unfortunately ask for the cancellation of my
          membership is because {cReason}
        </p>
        <p>
          My membership began on {cDate[0]}, and must now end by {cDate[1]}. My
          membership number is {cFileNumber}.
        </p>
        <p>
          Despite the cancellation, I still thank you for your service during
          the time that my membership was active.
        </p>
        <br />
        <p>Sincerely,</p>
      </div>

      <p className="signature">Signature</p>
    </div>
    <div className="bottom" />
  </Div>
);

const Naming = {
  id: ["LCAN003"],
  title: ["Gym Membership Cancellation letter"],
};

export const LCAN003 = { Builder, View, Naming };

const Div = styled.div`
  background: white;
  ${(p: any) => p.theme};
`;
