import React, { useCallback, useRef } from 'react';

import Toast from 'react-native-simple-toast';

import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/auth';

import Header from '../../components/Header';
import Input from '../../components/InputAccount';

import {
  Container,
  Label,
  FormBox,
  BoxButton,
  ButtonSave,
  ButtonLogOut,
  TextButton,
  TextButtonLogOut,
  BorderButtomLogOut,
  BorderButtomSave,
} from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  zipcode: string;
}

const Account: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { updateUser, signOut, user } = useAuth();

  const handleSaveUser = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('This field is required.'),
          email: Yup.string()
            .email('Insert an valid email')
            .required('This field is required.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.put('/profile', data);

        updateUser(response.data);

        Toast.show('Perfil atualizado!');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [updateUser],
  );

  return (
    <>
      <Header>Sua Conta</Header>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <FormBox>
              <Form
                ref={formRef}
                onSubmit={handleSaveUser}
                initialData={{
                  name: user?.name,
                  email: user?.email,
                  password: user?.password,
                }}
              >

                <Label>Nome</Label>
                <Input autoCorrect={false} name="name" placeholder="Nome" />

                <Label>Email</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  name="email"
                  placeholder="exemplo@email.com"
                />

                <Label>Senha</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  secureTextEntry
                  name="password"
                  placeholder="********"
                />
                <BoxButton>
                  <BorderButtomSave>
                    <ButtonSave
                      onPress={() => {
                        formRef.current?.submitForm();
                      }}
                    >
                      <TextButton>Salvar Alterações</TextButton>
                    </ButtonSave>
                  </BorderButtomSave>
                  <BorderButtomLogOut>
                    <ButtonLogOut
                      onPress={() => {
                        signOut();
                      }}
                    >
                      <TextButtonLogOut>Sair</TextButtonLogOut>
                    </ButtonLogOut>
                  </BorderButtomLogOut>
                </BoxButton>
              </Form>
            </FormBox>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Account;
