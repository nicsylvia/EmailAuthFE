export interface iButton {
  Buttontittle: string;
  bg: string;
  cc: string;
  onClick: () => void;
}

export interface iCard {
  tittle: string;
  Buttontittle: string;
  onClick: () => void;
  InputTittle: string;
  InputTittle1?: string;
  InputTittle2?: string;
  request: boolean;
  sign: boolean;
  route: string;
  text: string;
  path: string;
  route1?: string;
  text1?: string;
  path1?: string;
  call?: boolean;
}

export interface iInput {
  InputTittle: string;
  InputTittle1?: string;
  InputTittle2?: string;
  request: boolean;
  sign: boolean;
  email?: string;
  password?: string;
  userName?: string;

  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  setPassword?: React.Dispatch<React.SetStateAction<string>>;
  setUserName?: React.Dispatch<React.SetStateAction<string>>;
}
