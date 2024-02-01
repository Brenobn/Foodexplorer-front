import { Container, IngredientsName } from "./styles";

export function Ingredients({ title, ...rest }) {
  return(
    <Container>
      <IngredientsName
        {...rest}
      >
        {title}
      </IngredientsName>
    </Container>
  );
}