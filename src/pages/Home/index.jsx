import { Container, Outdoor, OutdoorTitle, OutdoorParagraph } from "./styles";

import { Header } from "../../components/Header";

import CockiesImg from "../../assets/Cockies.png";

export function Home() {
  return(
    <Container>
      <Header />
      <Outdoor>
        <img src={CockiesImg} alt="Foto de macorons com frutas"/>
        <OutdoorTitle>
          Sabores inigualáveis
        </OutdoorTitle>
        <OutdoorParagraph>
          Sinta o cuidado do preparo com ingredientes selecionados.
        </OutdoorParagraph>
      </Outdoor>
    </Container>
  );
}