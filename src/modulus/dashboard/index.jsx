import React from "react";
// import { AssistantV1 } from 'ibm-watson/assistant/v1';
// import { IamAuthenticator } from 'ibm-watson/auth';
import Navigation from "../../common/component/navigation/index";
import TextField from "@material-ui/core/TextField";
import { Box, Button } from "@material-ui/core";

function Dashboard() {
  const [message,setMessages] = React.useState("")
  const [response, setResponse] = React.useState('');
  const [budget, setBudget] = React.useState('');


console.log("this is assistant",assistant)

  const onSubmit = ()=>{
    console.log("this is message",message)
  
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
          variant="outlined"
          onChange={(e)=>{
            setMessages(e.target.value)
          }}
        />
        <br/>
        <br/>
        <TextField
          id="outlined-multiline-static"
          label="Add your budget"
          type="number"
          fullWidth
          variant="outlined"
          onChange={(e)=>{
            setBudget(e.target.value)
          }}
        />
        <br>
        </br>
        <br/>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
}

export default Dashboard;
