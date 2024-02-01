import { Container, HeaderContainer, MenuContainer, HeaderText, LinkContainer, WayToGoOut } from "./styles";

import { FiX, FiSearch } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";

export function Menu() {
  return(
    <Container>
      <HeaderContainer>
        <HeaderText>
          <FiX />
          Menu
        </HeaderText>
      </HeaderContainer>
      <MenuContainer>
        <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
        <LinkContainer>
          <WayToGoOut>
            Sair
          </WayToGoOut>
        </LinkContainer>
      </MenuContainer>
      <Footer />
    </Container>
  );
}