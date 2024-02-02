import { 
  Container, 
  PageContainer, 
  Title, 
  LinkToGoBack, 
  Form, 
  Textarea,
  Paragraph, 
  DishItemContainer,
  Text 
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { DishItem } from "../../components/DishItem";

import { PiCaretLeft, PiUploadSimpleFill, PiCaretDownBold } from "react-icons/pi";

export function NewDish() {
  return(
    <Container>
      <PageContainer>
        <Header />
        <LinkToGoBack>
          <PiCaretLeft />
          voltar
        </LinkToGoBack>
        <Title>
          Novo prato
        </Title>
        <Form>
          <Input 
            icon={PiUploadSimpleFill} 
            placeholder="Selecione imagem" 
            labelPlaceholder="Imagem do prato" 
            type="file"
          />
          <Input 
            placeholder="Ex.: Salada Ceasar" 
            labelPlaceholder="Nome" 
            type="text"
          />
          <Input 
            icon={PiCaretDownBold} 
            placeholder="Refeição" 
            labelPlaceholder="Categoria" 
            type="text"
          />
          <Input 
            labelPlaceholder="Preço"
            placeholder="R$ 00,00"
            type="text"
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

          <Textarea 
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
          <Button title="Salvar alterações" />
        </Form>
        <Footer />
      </PageContainer>
    </Container>
  );
}