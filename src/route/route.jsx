import { Route, Switch, Router as BrowserRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";

import routes from ".";
import apphistory from "../../apphistory";
import { ResponseProvider } from "../context/ResponseContext"; // Import ResponseProvider


function RouterSwitch() {
  return (
    <Switch>
      {routes.map(({ ...rest }, index) => {
          return <Route key={index} {...rest} />;
      })}
    </Switch>
  );
}

const Router = () => {
  return (
    <BrowserRouter history={apphistory}>
      <ResponseProvider>
      <Box>
        <RouterSwitch />
      </Box>
      </ResponseProvider>
    </BrowserRouter>
  );
};

export default Router
