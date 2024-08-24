import { Button,Box } from "@material-ui/core";
import Navigation from "../../common/component/navigation/index";
import apphistory from "../../../apphistory";

function Homepage() {
  return (
    <Box>
      <Navigation />
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "300px",
        }}
      >
        <Box style={{ fontSize: "36px", maxWidth: "60%" }}>
          Unlock Peak Productivity: Harness the Power of AI to Seamlessly Manage
          Your Tasks!
          <br />
          <Button variant="contained" color="primary" onClick={()=>{
            apphistory.push('/dashboard')
          }}>
            Get Started Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Homepage;

// 1. Homepage
// on getting started go to page where user have input the Data
// on adding bussiness idea api will be called to create document

// show to ticket list estimated time
