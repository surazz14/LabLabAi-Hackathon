import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import './index.css'

function WrapThemeProvider(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WrapThemeProvider>
      <App />
    </WrapThemeProvider>,  </StrictMode>,
)
