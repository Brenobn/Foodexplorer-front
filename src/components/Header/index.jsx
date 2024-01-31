import { PiReceiptBold, PiListBold } from "react-icons/pi";

import { Container, LogoContainer, Logo, LogoText } from "./styles";

import Polygon from "../../assets/Polygon1.svg";

export function Header() {
  return(
    <Container>
      <LogoContainer>
        <PiListBold />
        <Logo>
          <LogoText>
            <img src={Polygon} alt="Logo do app"/>
            Food explorer
          </LogoText>
        </Logo>
        <PiReceiptBold />
      </LogoContainer>
    </Container>
  );
}