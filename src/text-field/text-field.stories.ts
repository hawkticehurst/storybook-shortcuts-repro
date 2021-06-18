import { createTextField, TextFieldArgs } from "./createTextField";

export default {
  title: "Library/Text Field",
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
  },
};

const Template = ({ ...args }: TextFieldArgs) => {
  return createTextField({ ...args });
};

export const Default: any = Template.bind({});
Default.args = {
  value: "",
  placeholder: "",
};

export const WithPlaceholder: any = Template.bind({});
WithPlaceholder.args = {
  ...Default.args,
  placeholder: "Placeholder Text",
};
