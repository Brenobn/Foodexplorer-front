import { DishesCard, DishesParagraph, DishesPrice } from "./styles";

import { AddItem } from "../AddItem";
import { Button } from "../Button";

import { FiHeart } from "react-icons/fi";

import RanelloImg from "../../assets/Ravanello.png";

export function Dishes() {
  return(
      <DishesCard>
        <FiHeart />
        <img src={RanelloImg} alt="Foto de um prato de salada Ravanello" />
        <DishesParagraph>
          Salada Ravanello
        </DishesParagraph>
        <DishesPrice>
          R$ 49,97
        </DishesPrice>
        <AddItem />
        <Button title="incluir" />
      </DishesCard>
  );
}