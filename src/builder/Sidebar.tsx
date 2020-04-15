import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import { useOvermind } from "../store";

const Sidebar = () => {
  const { state, actions } = useOvermind();

  return (
    <Container>
      {/* SENDER INFO */}
      <Category>
        <Card title="Prénom" style={{ width: 230 }}>
          <form>
            <input
              onChange={(e) => {
                actions.changeValue({
                  key: "firstName",
                  value: e.target.value,
                });
              }}
            />
          </form>
        </Card>
        <Card title="Nom" style={{ width: 230 }}>
          <form>
            <input
              onChange={(e) => {
                actions.changeValue({
                  key: "lastName",
                  value: e.target.value,
                });
              }}
            />
          </form>
        </Card>
        <Card title="Adresse" style={{ width: 230 }}>
          <form>
            <input
              onChange={(e) => {
                actions.changeValue({
                  key: "address",
                  value: e.target.value,
                });
              }}
            />
          </form>
        </Card>
        <Card title="Code Postal" style={{ width: 230 }}>
          <form>
            <input
              onChange={(e) => {
                actions.changeValue({
                  key: "postcode",
                  value: e.target.value,
                });
              }}
            />
          </form>
        </Card>
        <Card title="Ville" style={{ width: 230 }}>
          <form>
            <input
              onChange={(e) => {
                actions.changeValue({
                  key: "city",
                  value: e.target.value,
                });
              }}
            />
          </form>
        </Card>
        <Card title="Numéro de téléphone" style={{ width: 230 }}>
          <form>
            <input
              onChange={(e) => {
                actions.changeValue({
                  key: "phone",
                  value: e.target.value,
                });
              }}
            />
          </form>
        </Card>
        <Card title="Adresse email" style={{ width: 230 }}>
          <form>
            <input
              onChange={(e) => {
                actions.changeValue({
                  key: "email",
                  value: e.target.value,
                });
              }}
            />
          </form>
        </Card>
      </Category>
      {/* DESTINATION INFO */}
      <Category>
        <Card title="Destinataire" style={{ width: 230 }}>
          <form>
            <input
              onChange={(e) => {
                actions.changeValue({
                  key: "firstName",
                  value: e.target.value,
                });
              }}
            />
          </form>
        </Card>
        <Card title="Adresse" style={{ width: 230 }}>
          <form>
            <input
              onChange={(e) => {
                actions.changeValue({
                  key: "lastName",
                  value: e.target.value,
                });
              }}
            />
          </form>
        </Card>
        <Card title="Code Postal" style={{ width: 230 }}>
          <form>
            <input
              onChange={(e) => {
                actions.changeValue({
                  key: "address",
                  value: e.target.value,
                });
              }}
            />
          </form>
        </Card>
        <Card title="Ville" style={{ width: 230 }}>
          <form>
            <input
              onChange={(e) => {
                actions.changeValue({
                  key: "postcode",
                  value: e.target.value,
                });
              }}
            />
          </form>
        </Card>
      </Category>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px;
  width: 1000px;
  height: auto;
  box-shadow: 0px 0px 20px 1px #888888;
  border: 1px black solid;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Sidebar;
