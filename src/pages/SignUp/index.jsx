import { 
  Container, 
  Logo, 
  LinkToCreateAccount, 
  Main, 
  FormContainer,
  Title 
} from "./styles";

import Polygon from "../../assets/Polygon1.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return(
    <Container>
      <Main>
        <Logo>
          <img src={Polygon} alt="Logo do app" />
          food explorer
        </Logo>
        <FormContainer>
          <Title>
            Crie sua conta
          </Title>
          <Input 
            placeholder="Exemplo: Maria da Silva"
            labelPlaceholder="Seu nome"
            type="text"
          />
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br" 
            labelPlaceholder="Email" 
            type="Email"
          />
          <Input 
            placeholder="No mínimo 6 caracteres" 
            labelPlaceholder="Senha" 
            type="Password"
          />
          <Button 
            title="Criar conta" 
            type="submit"
          />
          <LinkToCreateAccount>
            Já tenho uma conta
          </LinkToCreateAccount>
        </FormContainer>
      </Main>
    </Container>
  );
}