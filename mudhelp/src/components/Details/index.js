import React, { Component } from "react";

import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  ResquestButtonText
} from "./styles";

import uberx from "../../../assets/uberx.png";

export default class Details extends Component {
  render() {
    return (
      <Container>
        <TypeTitle> Popular </TypeTitle>
        <TypeDescription> Viagens baratas para o transporte do seus objetos do dia a dia </TypeDescription>
        <TypeImage source={uberx} />
        <TypeTitle>MudHelpX By Wagner</TypeTitle>
        <TypeDescription>R$6,00 </TypeDescription>

        <RequestButton onPress={() => {}}>
          <ResquestButtonText>Solicitar MudHelp</ResquestButtonText>
        </RequestButton>
      </Container>
    );
  }
}
