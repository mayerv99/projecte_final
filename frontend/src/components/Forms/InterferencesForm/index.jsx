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
import { createNewInterference } from "../../../services/users";

//Context
import useEnterprise from "../../../Hooks/useEnterprise";

function InterferencesForm({ handleCloseInterferencesModal }) {
  const formRef = useRef(null);

  const { selectedUser, selectedEnterprise } = useEnterprise();

  const handleData = (data) => {
    const {
      actNumber,
      aquacultureTanks,
      animalsNumber,
      animalsNumber2,
      peopleNumber,
    } = data;

    return {
      ...data,
      actNumber: parseInt(actNumber),
      aquacultureTanks: parseInt(aquacultureTanks),
      animalsNumber: parseInt(animalsNumber),
      animalsNumber2: parseInt(animalsNumber2),
      peopleNumber: parseInt(peopleNumber),
      authorizationInitialDate: new Date(authorizationInitialDate),
      authorizationDate: new Date(authorizationDate),
      userId: selectedUser.userId,
      enterpriseId: selectedEnterprise.id,
    };
  };

  const handleSubmit = async (data) => {
    await createNewInterference(handleData(data));
    handleCloseInterferencesModal();
    fetchInterferences();
  };

  return (
    <Wrapper>
      <Header>
        <button onClick={handleCloseInterferencesModal}>&#10006;</button>
      </Header>
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              name="interferenceCode"
              label="Código da interferência: *"
              placeholder="Insira o código"
              width="25%"
            />
            <Input
              name="consumerUnity"
              label="Unidade consumidora: *"
              placeholder="Insira a unidade"
              width="25%"
            />
            <Input
              name="reglaId"
              label="Id REGLA: *"
              placeholder="Insira o ID"
              width="25%"
            />
            <Input
              name="cnarhId"
              label="Id CNARH: *"
              placeholder="Insira o ID"
              width="25%"
            />
          </InputWrapper>
          <Input
            name="pointDenomination"
            label="Ponto: *"
            placeholder="Insira o ponto"
          />
          <InputWrapper>
            <Input
              name="type"
              label="Tipo: *"
              placeholder="Insira o tipo"
              width="50%"
            />
            <Input
              name="subType"
              label="Subtipo: *"
              placeholder="Insira o subtipo"
              width="50%"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="waterBodyName"
              label="Nome corpo de água: *"
              placeholder="Insira o nome do corpo de água"
              width="50%"
            />
            <Input
              name="waterBodyType"
              label="Tipo corpo de água: *"
              placeholder="Insira o tipo"
              width="50%"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="latitude"
              label="Latitude: *"
              placeholder="Insira a latitude"
              width="50%"
            />
            <Input
              name="longitude"
              label="Longitude *"
              placeholder="Insira a longitude"
              width="50%"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="uf"
              label="UF: *"
              placeholder="Insira a UF"
              width="20%"
            />
            <Input
              name="city"
              label="Cidade: *"
              placeholder="Insira a cidade"
              width="80%"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="domain"
              label="Domínio: *"
              placeholder="Insira o domínio"
              width="50%"
            />
            <Input
              name="source"
              label="Fonte: *"
              placeholder="Insira a fonte "
              width="50%"
            />
          </InputWrapper>

          <InputWrapper>
            <Input
              name="regularSituation"
              label="Situação da regularização: *"
              placeholder="Insira a situação"
              width="50%"
            />
            <Input
              name="interferenceSituation"
              label="Situação da interferência: *"
              placeholder="Insira a situação"
              width="50%"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="authorizationType"
              label="Tipo da autorização: *"
              placeholder="Insira o tipo"
              width="33%"
            />
            <Input
              name="actType"
              label="Tipo do ato: *"
              placeholder="Insira o tipo"
              width="33%"
            />
            <Input
              name="actNumber"
              label="Número do ato: *"
              placeholder="Insira o número"
              width="33%"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="date"
              name="authorizationInitialDate"
              label="Data inicial da autorização: *"
              placeholder="Insira"
              width="2O%"
            />
            <Input
              type="date"
              name="authorizationEndDate"
              label="Data final da autorização: *"
              placeholder="Insira a data"
              width="20%"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="mainUtility"
              label="Utilidade principal: *"
              placeholder="Insira a utilidade"
              width="33%"
            />
            <Input
              name="secondaryUtility"
              label="Utilidade secundária: *"
              placeholder="Insira a utilidade"
              width="33%"
            />
            <Input
              name="thirdUtility"
              label="Utilidade terciária: *"
              placeholder="Insira a utilidade"
              width="33%"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="irrigationSystemFinality"
              label="Finalidade do sistema de irrigação 1: *"
              placeholder="Insira a finalidade"
              width="33%"
            />
            <Input
              name="irrigationAreaSystemFynality"
              label="Finalidade da área irrigada 1: *"
              placeholder="Insira a finalidade"
              width="33%"
            />
            <Input
              name="irrigableCultureMoreFrequently"
              label="Cultura irrigada mais frequente 1: *"
              placeholder="Insira a data"
              width="33%"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="irrigationSystemFinality2"
              label="Finalidade do sistema de irrigação 2: *"
              placeholder="Insira a finalidade"
              width="33%"
            />
            <Input
              name="irrigationAreaSystemFynality2"
              label="Finalidade da área irrigada 2: *"
              placeholder="Insira a finalidade"
              width="33%"
            />
            <Input
              name="irrigableCultureMoreFrequently2"
              label="Cultura irrigada mais frequente : *"
              placeholder="Insira a data"
              width="33%"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="irrigationSystemFinality3"
              label="Finalidade do sistema de irrigação 3: *"
              placeholder="Insira a finalidade"
              width="33%"
            />
            <Input
              name="irrigationAreaSystemFynality3"
              label="Finalidade da área irrigada 3: *"
              placeholder="Insira a finalidade"
              width="33%"
            />
            <Input
              name="irrigableCultureMoreFrequently3"
              label="Cultura irrigada mais frequente 3: *"
              placeholder="Insira a data"
              width="33%"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="number"
              name="aquacultureTanks"
              label="Número de tanques aquicultura: *"
              placeholder="Insira o número"
              width="33%"
            />
            <Input
              name="aquacultureTanksDepth"
              label="Profundidade tanques aquicultura: *"
              placeholder="Ex.: 10.5"
              width="33%"
            />
            <Input
              name="aquacultureTanksTotalArea"
              label="Área total dos taques de aquicultura: *"
              placeholder="Ex.: 10.5"
              width="33%"
            />
          </InputWrapper>
          <Input
            name="aquacultureCultivation"
            label="Aquicultura finalidade cultivo: *"
            placeholder="Insira a finalidade"
          />

          <InputWrapper>
            <Input
              name="speciesCreation"
              label="Espécie criação animal finalidade: *"
              placeholder="Insira a espécie"
              width="33%"
            />
            <Input
              name="systemCreation"
              label="Sistema criação animal: *"
              placeholder="Insira o sistema"
              width="33%"
            />
            <Input
              type="number"
              name="animalsNumber"
              label="Número de cabeças criação animal: *"
              placeholder="Ex.: 10"
              width="33%"
            />
          </InputWrapper>

          <InputWrapper>
            <Input
              name="speciesCreation2"
              label="Espécie criação animal finalidade 2: *"
              placeholder="Insira a espécie"
              width="33%"
            />
            <Input
              name="systemCreation2"
              label="Sistema criação animal 2: *"
              placeholder="Insira o sistema"
              width="33%"
            />
            <Input
              type="number"
              name="animalsNumber2"
              label="Número de cabeças criação animal 2: *"
              placeholder="Ex.: 10"
              width="33%"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="number"
              name="peopleNumber"
              label="Número de pessoas consumo humano: *"
              placeholder="Insira o número"
              width="20%"
            />
            <Input
              name="observation"
              label="Observação:"
              placeholder="Insira uma observação"
              width="80%"
            />
          </InputWrapper>
          <FormFooter>
            <button type="submit">Salvar</button>
          </FormFooter>
        </Form>
      </FormContainer>
    </Wrapper>
  );
}

export default InterferencesForm;
