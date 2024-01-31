import { Container, FooterLogo, FooterParagraph } from "./styles";

import Polygon from "../../assets/PolygonDark.svg";

export function Footer() {
  return(
    <Container>
      <FooterLogo>
        <img src={Polygon} alt="Logo do app" />
        food explorer
      </FooterLogo>
      <FooterParagraph>
        © 2023 - Todos os direitos reservados.
      </FooterParagraph>
    </Container>
  );
}