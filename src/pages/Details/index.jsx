import { 
  Container, 
  WayBack, 
  DishName, 
  DishDescription, 
  DishContainer, 
  DishData,
  IngredientsContainer, 
  AddOrRemoveContainer,
  ButtonToAddItem 
} from "./styles";

import { PiReceiptBold } from "react-icons/pi";

import { Header } from "../../components/Header";
import { Ingredients } from "../../components/Ingredients";
import { AddItem } from "../../components/AddItem";
import { Footer } from "../../components/Footer";

import Ravanello from "../../assets/Ravanello.png";

import { PiCaretLeft } from "react-icons/pi";

export function Details() {
  return(
    <Container>
      <Header />
      <DishContainer>
        <WayBack>
          <PiCaretLeft />
          voltar
        </WayBack>
        <img src={Ravanello} alt="Foto de um prato de salada Ravanello" />
        <DishData>
          <DishName>
            Salada Ravanello
          </DishName>
          <DishDescription>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </DishDescription>
          <IngredientsContainer>
            <Ingredients title="alface"/> 
            <Ingredients title="cebola"/> 
            <Ingredients title="pão naan"/>
          </IngredientsContainer>
          <IngredientsContainer>
            <Ingredients title="pepino"/> 
            <Ingredients title="rabanete"/> 
            <Ingredients title="tomate"/>  
          </IngredientsContainer>
        </DishData>
        <AddOrRemoveContainer>
          <AddItem />
          <ButtonToAddItem>
            <PiReceiptBold />
            pedir ∙ R$ 25,00
          </ButtonToAddItem>
        </AddOrRemoveContainer>
      </DishContainer>
      <Footer />
    </Container>
  );
}