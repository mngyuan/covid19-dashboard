import React from "react";
import styled from "styled-components";

import { Label } from "./form-styles";

interface Props {
  value?: string;
  children: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectContainer = styled.div`
  position: relative;
  font-family: "Poppins", sans-serif;
  flex-grow: 1;
  margin-right: 8px;
  margin-bottom: 24px;
`;

const SelectInput = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  border: none;
  padding: 16px;
  background: #e0e4e4;
  outline: 0 solid transparent;
  margin-top: 8px;
  border-radius: 2px;
  font-size: 16px;
  color: #00413e;
`;

const Select: React.FC<Props> = (props) => {
  return (
    <SelectContainer>
      <Label>{props.label}</Label>
      <SelectInput onChange={props.onChange} value={props.value}>
        {props.children}
      </SelectInput>
    </SelectContainer>
  );
};

export default Select;
