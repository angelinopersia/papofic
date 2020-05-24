import React from "react";
import styled from "styled-components";
import { Card, Icon } from "@blueprintjs/core";

const Metadata = () => (
  <MetadataBlock>
    <Card>
      <Submeta>
        <SubmetaIcon icon="issue" iconSize={18} />
        <h3>Disclaimer</h3>
      </Submeta>
      <p>
        We are not responsible for any of the results originating from this
        free, public service. All user-generated content is not within our
        responsibility. Any offensive/illegal end met through content created by
        users remains entirely part of aforementioned users' responsibility.
      </p>
      <Submeta>
        <SubmetaIcon icon="git-repo" iconSize={18} />
        <h3>Github repository</h3>
      </Submeta>
      Papofic is an open-source service and can be found
      <a href="https://github.com/angelinopersia/papofic"> on github.</a>
    </Card>
  </MetadataBlock>
);

const MetadataBlock = styled.div`
  opacity: 0.3;
  transition: 0.5s;
  &:hover {
    opacity: 1;
  }
`;

const Submeta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
`;

const SubmetaIcon = styled(Icon)`
  padding-right: 10px;
`;

export default Metadata;
