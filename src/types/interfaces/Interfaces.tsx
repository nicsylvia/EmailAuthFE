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
}

export interface iInput {
  InputTittle: string;
  InputTittle1?: string;
  InputTittle2?: string;
  request: boolean;
  sign: boolean;
}
