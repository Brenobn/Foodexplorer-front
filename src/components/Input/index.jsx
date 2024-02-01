import { Container, BoxInput } from "./styles";

export function Input({icon: Icon, labelPlaceholder, children, ...rest}) {
  return(
    <Container>
      {labelPlaceholder && <label>{labelPlaceholder}</label>}

      <BoxInput>
        {Icon && <Icon size={24} />}
        <input {...rest}/>
        {children}
      </BoxInput>
    </Container>
  );
}