import React, { useRef } from "react";

//Styled
import { Header, Wrapper, FormContainer, InputWrapper } from "./styled";

//Unform
import { Form } from "@unform/web";

//Components
import Input from "../components/Input";

//Services
import { createNewEnterprise } from "../../../services/enterprise";

function EnterprisesForm({ handleCloseEnterprisesModal }) {
  const formRef = useRef(null);

  const handleSubmit = async (data) => {
    const res = await createNewEnterprise(data);
    handleCloseEnterprisesModal();
  };

  return (
    <Wrapper>
      <Header>
        <button onClick={handleCloseEnterprisesModal}>&#10006;</button>
      </Header>
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              name="enterpriseCode"
              label="Código do empreendimento: *"
              placeholder="Insira o código"
              width="20%"
            />
            <Input
              name="enterpriseName"
              label="Nome do empreendimento: *"
              placeholder="Insira o nome do empreendimento"
            />
          </InputWrapper>

          <Input
            name="ownerName"
            label="Nome do proprietário: *"
            placeholder="Insira o nome do proprietário"
          />
          <InputWrapper>
            <Input
              name="ownerIdentification"
              label="CPF / CNPJ do proprietário: *"
              placeholder="CPF/CNPJ"
            />
            <Input
              name="registerDate"
              label="Data cadastro georreferenciado: *"
              placeholder="Escolha a data"
              type="date"
            />
          </InputWrapper>
          <Input
            name="localAddress"
            label="Endereço do local: *"
            placeholder="Insira o endereço"
          />
          <Input
            name="complement"
            label="Complemento: *"
            placeholder="Insira o complemento"
          />
          <Input
            name="referencePoint"
            label="Referência: *"
            placeholder="Insira uma referência"
          />
          <InputWrapper>
            <Input
              name="irrigableArea"
              label="Área irrigável (hectares): *"
              placeholder="Ex.: 10,2"
              width="20%"
            />
          </InputWrapper>
          <button type="submit">Carlos</button>
        </Form>
      </FormContainer>
    </Wrapper>
  );
}

export default EnterprisesForm;
