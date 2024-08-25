import React, {useContext} from "react";
import { useHistory  } from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Box, Button } from "@material-ui/core";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Navigation from "../../common/component/navigation/index";
import { ResponseContext } from "../../context/ResponseContext";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


function Dashboard() {
  const [message,setMessages] = React.useState(`Subject: Urgent Request: Update Website for New Product Launch Email 1: From Client (John Doe) To: Project Manager CC: Design Team, Development Team Date: August 25, 2024 Time: 9:15 AM Hi [Project Manager], I hope you're doing well. We have an urgent request from the marketing team that needs to be addressed as soon as possible. We're launching a new product next week, and we need to make several updates to the website in preparation. Here’s a list of tasks that need to be completed: Homepage Banner Update: Replace the current banner with the new product launch banner (design attached). Product Page Creation: Create a new product page for the "X200 Series" with the specifications and images provided by the design team. SEO Optimization: Ensure the new product page is optimized for search engines with the keywords provided. Newsletter Signup: Add a new signup form on the homepage for the upcoming newsletter related to the new product. We’re aiming to have these changes live by end of day Friday, August 29th. Could you confirm that this timeline is feasible? Please coordinate with the design and development teams to get these changes implemented. If there are any concerns or if more resources are needed, let me know as soon as possible. Best regards, John Doe Marketing Manager, ABC Corp.`)

  const { setResponse } = useContext(ResponseContext);
  const history = useHistory();
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async()=>{
    try {
      setLoading(true);
      const response = await axios.post(
        'https://ibm-hackathon-backend-production.up.railway.app/api/message',
        {
          message: message + `Based on this description, create one epic ticket with a title, then give several tickets under it, each ticket should have title description, potential solutions, time required to complete. Please give data in JSON format.`
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
        setResponse(response.data)
        history.push("/ticket");
    } catch (err) {
      console.error('Error in getting response:', err);
    }    
  }

  return (
    <>
      <Navigation />
      <Box  style={{margin: "20px",marginLeft:"200px",marginRight:"200px"}}>
        <TextField
          id="outlined-multiline-static"
          label="Describe your task for AI-Powered Workflow"
          multiline
          fullWidth
          rows={20}
          disabled={loading}
          variant="outlined"
          onChange={(e)=>{
            setMessages(e.target.value)
          }}
        />
        <br/>
        <br/>
        <Button variant="contained" color="primary" onClick={onSubmit} disabled={loading}>
          Submit
        </Button>
        <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      </Box>
    </>
  );
}

export default Dashboard;
