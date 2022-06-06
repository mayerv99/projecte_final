import React, { useRef } from "react";

//Styled
import {
  Header,
  Wrapper,
  FormContainer,
  InputWrapper,
  FormFooter,
} from "./styled";

//Unform
import { Form } from "@unform/web";

//Components
import Input from "../components/Input";

//Services
import { createUser } from "../../../services/users";

//Context
import useEnterprise from "../../../Hooks/useEnterprise";

function UsersForm({ handleCloseUsersModal }) {
  const formRef = useRef(null);

  const { selectedEnterprise, setUsersList } = useEnterprise();

  const handleSubmit = async (data) => {
    await createUser(selectedEnterprise.id, data);
    handleCloseUsersModal();
  };

  return (
    <Wrapper>
      <Header>
        <button onClick={handleCloseUsersModal}>&#10006;</button>
      </Header>
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              name="userIdentification"
              label="CPF/CNPJ do usuário: *"
              placeholder="Insira o valor"
              width="20%"
            />
            <Input
              name="userName"
              label="Nome do usuário: *"
              placeholder="Insira o nome"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="phonePrefix"
              label="DDD: *"
              placeholder="Ex.: 83"
              width="8%"
            />
            <Input
              name="phoneNumber"
              label="Número: *"
              placeholder="Ex.: 98888-8888"
              width="25%"
            />
            <Input
              name="email"
              label="E-mal: *"
              placeholder="Insira seu email"
              width="70%"
            />
          </InputWrapper>
          <Input
            name="localAddress"
            label="Logradouro: *"
            placeholder="Insira o logradouro"
          />
          <Input
            name="complement"
            label="Complemento: *"
            placeholder="Insira o complemento"
          />
          <Input
            name="addressNumber"
            label="Número: *"
            placeholder="Insira o número"
          />
          <Input
            name="district"
            label="Bairro: *"
            placeholder="Insira o bairro"
          />
          <Input
            name="city"
            label="Município: *"
            placeholder="Insira o município"
          />

          <Input name="uf" label="UF: *" placeholder="Insira a UF" />
          <Input name="cep" label="CEP: *" placeholder="Insira o CEP" />
          <Input
            name="postalCode"
            label="Código postal: *"
            placeholder="Insira o código postal"
          />
          <Input
            name="plantInOtherEnterprises"
            label="Cultiva em outros empreendimentos? *"
            placeholder="Costuma plantar culturas irrigadas em outros empreendimentos?"
          />
          <FormFooter>
            <button type="submit">Salvar</button>
          </FormFooter>
        </Form>
      </FormContainer>
    </Wrapper>
  );
}

export default UsersForm;
