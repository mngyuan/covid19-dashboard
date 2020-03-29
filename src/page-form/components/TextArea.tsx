import React from "react";
import styled from "styled-components";

import { Label } from "./form-styles";

interface Props {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaInput = styled.textarea`
  margin-top: 8px;
  border: none;
  outline: none;
  padding: 16px;
  background: #e0e4e4;
  border-radius: 2px;
  font-size: 16px;
  color: #00413e;
  resize: none;
  font-family: "Poppins", sans-serif;
`;
const TextAreaContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

const TextArea: React.FC<Props> = (props) => {
  return (
    <TextAreaContainer>
      <Label>{props.label}</Label>
      <TextAreaInput
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        name={props.label}
      />
    </TextAreaContainer>
  );
};

export default TextArea;
