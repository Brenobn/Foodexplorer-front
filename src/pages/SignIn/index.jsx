import { 
  Container, 
  Logo, 
  LinkToCreateAccount, 
  PageContainer, 
  FormContainer 
} from "./styles";

import Polygon from "../../assets/Polygon1.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return(
    <Container>
      <PageContainer>
        <Logo>
          <img src={Polygon} alt="Logo do app" />
          food explorer
        </Logo>
        <FormContainer>
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
            title="Entrar" 
            type="submit"
          />
        </FormContainer>
        <LinkToCreateAccount>
          Criar uma conta
        </LinkToCreateAccount>
      </PageContainer>
    </Container>
  );
}