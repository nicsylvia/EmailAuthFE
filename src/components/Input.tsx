import React, { useState } from "react";
import styled from "styled-components";
import { iInput } from "../types/interfaces/Interfaces";

const InputData: React.FC<iInput> = ({
  InputTittle,
  InputTittle1,
  InputTittle2,
  sign,
  request,
  password,
  userName,
  setUserName,
  setPassword,
  onChange,
}) => {
  const [email, setEmail] = useState("");
  return (
    <div>
      <Field>
        <Form>
          <Input
            placeholder={InputTittle}
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
          {sign ? (
            <Input
              placeholder={InputTittle1}
              value={password}
              onChange={onChange}
            />
          ) : null}
          {request ? (
            <Input
              placeholder={InputTittle2}
              value={userName}
              onChange={onChange}
            />
          ) : null}
        </Form>
      </Field>
    </div>
  );
};

export default InputData;

const Field = styled.div`
  display: flex;

  flex-direction: column;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  border-radius: 4px;
  border: 1px solid grey;
  height: 50px;
  width: 300px;
  padding-left: 10px;
  margin: 5px 0;
`;
