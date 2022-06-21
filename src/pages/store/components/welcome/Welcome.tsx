/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from "react";
import Container from "../../../../components/container/Container";
// eslint-disable-next-line import/no-unresolved
import Message from "../../../../components/message/Message";

function Welcome() {
  return <Container>
    <Message title="Bienvenue sur la plateforme de vente" subtitle="Effectuez vos achats en toute sécutité" />
  </Container>
}

export default Welcome;
