import React from 'react';
import {FormWrapper, FormTitle, Formulario} from './styles';

export default function Form({children, onSubmit, title}) {

  return (
    <FormWrapper>
      <FormTitle>{title}</FormTitle>
      <Formulario onSubmit={onSubmit}>
        {children}
      </Formulario>
    </FormWrapper>
  );
}
