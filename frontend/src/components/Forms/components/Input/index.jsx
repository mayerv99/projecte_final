import React, { useEffect, useRef } from "react";

import { useField } from "@unform/core";

import { TextInput, Wrapper, ErrorMessage } from "./styled";

function Input({ name, label, width, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
    <Wrapper width={width}>
      <label htmlFor={fieldName}>{label}</label>
      <TextInput error={error} ref={inputRef} {...rest} />
      {/* <ErrorMessage>Mensagem de erro</ErrorMessage> */}
    </Wrapper>
  );
}

export default Input;
