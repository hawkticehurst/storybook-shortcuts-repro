import { StorybookTextField } from "./index";

export type TextFieldArgs = {
  placeholder?: string;
  value?: string;
};

export function createTextField({ placeholder, value }: TextFieldArgs) {
  const textField = new StorybookTextField();

  if (placeholder) {
    textField.setAttribute("placeholder", placeholder);
  }
  if (value) {
    textField.value = value;
  }

  return textField;
}
