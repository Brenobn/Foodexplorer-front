import { Container, Outdoor, OutdoorTitle, OutdoorParagraph, Section, DishesContainer } from "./styles";

import { Header } from "../../components/Header";
import { Dishes } from "../../components/Dishes";
import { Footer } from "../../components/Footer";

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
      <Section>
        Refeições
      </Section>
      <DishesContainer>
        <Dishes />
        <Dishes />
      </DishesContainer>
      <Section>
        Sobremesas
      </Section>
      <DishesContainer>
        <Dishes />
        <Dishes />
      </DishesContainer>
      <Section>
        Bebidas
      </Section>
      <DishesContainer>
        <Dishes />
        <Dishes />
      </DishesContainer>
      <Footer />
    </Container>
  );
}