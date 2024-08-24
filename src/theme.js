import { createMuiTheme } from "@material-ui/core/styles";

const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;

export const pxToRem = (size) => {
  return `${(size / htmlFontSize) * coef}rem`;
};

const theme = createMuiTheme({
  palette: {
    background: {
      default: "rgb(250, 242, 240)",
    },
    primary: {
      main: "#e91e63",
    },
  },
});

export default theme