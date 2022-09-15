import { colors } from "../../utils/colors";

export const colourStyles = {
  container: (styles, state) => ({
    ...styles,
    marginTop: 10,
    marginBottom: 10
  }),
  control: (styles, state) => ({
    ...styles,
    border: state.isFocused
      ? "1px solid #1B164E"
      : "0.5px solid rgba(0, 0, 0, 0.1)",
    outline: null,
    boxShadow: state.isFocused ? null : null,
    padding: "5px 5px",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #1B164E",
    },
    "&:focus": {
      border: "1px solid #1B164E",
      outline: "1px solid #1B164E",
    },
  }),
};
