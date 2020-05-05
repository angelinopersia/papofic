import React from "react";
import styled from "styled-components";

const icon = () => (
  <Container>
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="381.000000pt"
      height="431.000000pt"
      viewBox="0 0 381.000000 431.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,431.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M0 2155 l0 -2155 1905 0 1905 0 0 1858 0 1857 -298 298 -297 297
-1608 0 -1607 0 0 -2155z m2750 1445 l0 -350 350 0 350 0 0 -1445 0 -1445
-1545 0 -1545 0 0 1795 0 1795 1195 0 1195 0 0 -350z m530 175 l165 -165 -168
0 -167 0 0 165 c0 91 1 165 3 165 1 0 76 -74 167 -165z"
        />
        <path
          d="M620 2145 l0 -1545 215 0 215 0 0 619 0 619 393 5 c412 5 453 8 607
58 226 72 392 210 485 403 122 255 122 667 0 921 -91 191 -250 324 -475 399
-184 61 -249 66 -879 66 l-561 0 0 -1545z m1153 1176 c110 -29 188 -73 256
-147 104 -111 142 -220 142 -409 0 -189 -38 -298 -142 -409 -68 -74 -146 -118
-256 -147 -68 -18 -117 -22 -400 -26 l-323 -6 0 588 0 588 323 -6 c283 -4 332
-8 400 -26z"
        />
        <path d="M1500 1510 l0 -110 855 0 855 0 0 110 0 110 -855 0 -855 0 0 -110z" />
        <path d="M1500 1110 l0 -110 855 0 855 0 0 110 0 110 -855 0 -855 0 0 -110z" />
        <path d="M1500 710 l0 -110 855 0 855 0 0 110 0 110 -855 0 -855 0 0 -110z" />
      </g>
    </svg>
    <Title>PAPOFIC</Title>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  top: 50%;
  opacity: 0.15;
  filter: invert(24%) sepia(10%) saturate(1168%) hue-rotate(165deg)
    brightness(93%) contrast(95%);
`;

const Title = styled.span`
  padding-top: 0px;
  font-size: 120px;
  font-weight: 800;
  color: black;
`;

export default icon;
