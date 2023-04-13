import styled from 'styled-components';
import { Field, Form } from 'formik';

export const InputStyled = styled(Field)`
  height: 28px;
  border-radius: 6px;
  padding: 4 10px;
  outline: none;
  padding: 0 10px;
  border: 1px solid grey;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

export const SelectStyled = styled.select`
  height: 28px;
  border-radius: 6px;
  padding: 4 10px;
  outline: none;
  padding: 0 10px;
  border: 1px solid grey;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleGoods = styled.h3`
  font-size: 18px;
  font-style: italic;
  margin-bottom: 20px;
`;

export const ErrMsg = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -10px;
`;

export const TotalPrice = styled(Field)`
  width: 100px;
  border-radius: 10px;
  background-color: black;
  border: none;
  color: white;

  margin-left: 20px;
`;
