/**
 * This file imports the FAST Foundation TextField class and TextField HTML template
 * which provides the unstyled behavior and structure of a generic text field.
 *
 * The customElement and css utility functions are also imported from FAST Element so that
 * custom styles can be added to the TextField. All the pieces (i.e. TextField class, TextField
 * template, and custom styles) are combined to create the custom StorybookTextField element.
 */

import { customElement, css } from "@microsoft/fast-element";
import {
  TextFieldTemplate as template,
  TextField,
} from "@microsoft/fast-foundation";

const styles = css`
  .control {
    border: 1px solid black;
    color: black;
    padding: 5px 10px;
  }
`;

@customElement({
  name: "storybook-text-field",
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true,
  },
})
export class StorybookTextField extends TextField {}
