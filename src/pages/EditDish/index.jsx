import { 
  Container, 
  PageContainer, 
  Title, 
  LinkToGoBack, 
  Form, 
  Textarea,
  Paragraph, 
  DishItemContainer,
  Text,
  ButtonContainer 
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { DishItem } from "../../components/DishItem";

import { PiCaretLeft, PiUploadSimpleFill, PiCaretDownBold } from "react-icons/pi";

export function EditDish() {
  return(
    <Container>
      <PageContainer>
        <Header />
        <LinkToGoBack>
          <PiCaretLeft />
          voltar
        </LinkToGoBack>
        <Title>
          Editar prato
        </Title>
        <Form>
          <Input 
            icon={PiUploadSimpleFill} 
            placeholder="Selecione imagem para alterá-la" 
            labelPlaceholder="Imagem do prato" 
            type="file"
          />
          <Input 
            placeholder="Salada Ceasar" 
            labelPlaceholder="Nome" 
            type="text"
          />
          <Input 
            placeholder="Refeição" 
            labelPlaceholder="Categoria" 
            type="text"
            icon={PiCaretDownBold} 
          />
          <Text>
            Ingredientes
          </Text>
          <DishItemContainer>
            <DishItem  />
            <DishItem placeholder="Adicionar" isNew />
          </DishItemContainer>
          <Paragraph>
            Descrição
          </Paragraph>
          <Input 
            labelPlaceholder="Preço"
            placeholder="R$ 00,00"
            type="text"
          />
          <Textarea 
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
          <ButtonContainer>
          <Button title="Excluir prato" />  
          <Button title="Salvar" />
          </ButtonContainer>
        </Form>
        <Footer />
      </PageContainer>
    </Container>
  );
}