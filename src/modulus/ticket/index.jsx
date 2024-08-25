import React, { useState, useContext } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Paper,
  Button,
} from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { ResponseContext } from "../../context/ResponseContext"; // Update with the correct path
import Navigation from "../../common/component/navigation/index";

const TicketPage = () => {
  const [isEpicSelected, setIsEpicSelected] = useState(false);
  const [selectedTicketIndex, setSelectedTicketIndex] = useState(null);
  const { response } = useContext(ResponseContext);

  const jsonMatch = response.message.match(/\{.*\}/s)[0];
  const textBeforeDelimiter = jsonMatch.split("```")[0];

  let jsonObject = null;

  if (jsonMatch) {
    try {
      jsonObject = JSON.parse(textBeforeDelimiter);
      console.log(jsonObject);
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  } else {
    console.error("No JSON found in the text.");
  }

  const epic = jsonObject?.epic || {};
  const tickets = jsonObject?.epic?.tickets || jsonObject?.tickets;

  const handleEpicClick = () => {
    setIsEpicSelected(!isEpicSelected);
    setSelectedTicketIndex(null); // Reset selected ticket when epic changes
  };

  const handleTicketClick = (index) => {
    setSelectedTicketIndex(selectedTicketIndex === index ? null : index);
  };

  // Define custom styles
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#fce4ec", // Light pink background similar to the UserProfile component
    },
    paper: {
      padding: "20px",
      width: "100%",
      maxWidth: 1200,
      backgroundColor: "#ffffff", // White background for the main content
    },
    heading: {
      marginTop: 20,
      color: "#f50057", // Red color for headings
      fontSize: "1.5rem",
    },
    divider: {
      margin: "20px 0",
    },
    card: {
      marginLeft: "40px",
      marginTop: "10px",
      backgroundColor: "#f4f4f4", // Light grey background for cards
      marginBottom: "15px",
    },
    epicTitle: {
      cursor: "pointer",
      color: "#3f51b5", // Primary color for the epic title
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontWeight: "bold",
    },
    ticketTitle: {
      paddingLeft: "32px",
      cursor: "pointer",
      color: "#333", // Dark color for ticket titles
    },
    cardContent: {
      padding: "16px",
    },
    button: {
      marginTop: "16px",
      backgroundColor: "#e91e63", // Matching the epic title color
      color: "white",
    },
    epicButton: {
      marginLeft: "10px",
      backgroundColor: "#e91e63",
      color: "white",
    },
    epicDescription: {
      maxWidth: "80%",
      textAlign: "justify",
    },
  };

  return (
    <>
      <Navigation />
      <Container style={styles.container} component="main">
        <Paper elevation={3} style={styles.paper}>
          <Typography variant="h4" style={styles.heading} gutterBottom>
            Tickets
          </Typography>
          <ListItem button onClick={handleEpicClick} style={styles.epicTitle}>
            <ListItemText
              primary={`EPIC Ticket Title: ${epic.title}`}
              secondary={epic.description}
              style={styles.epicDescription}
            />
            <Button
              variant="contained"
              style={styles.epicButton}
              onClick={() => {
                /* Future Jira Ticket logic for epic */
              }}
            >
              Create Jira Ticket
            </Button>
            {isEpicSelected ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isEpicSelected} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {tickets &&
                tickets.map((ticket, index) => (
                  <div key={index}>
                    <ListItem
                      button
                      onClick={() => handleTicketClick(index)}
                      style={styles.ticketTitle}
                    >
                      <ListItemText primary={ticket.title} />
                    </ListItem>
                    <Collapse
                      in={selectedTicketIndex === index}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Card variant="outlined" style={styles.card}>
                        <CardContent style={styles.cardContent}>
                          <Typography variant="body1">
                            <strong>Description:</strong> {ticket.description}
                          </Typography>
                          <Typography variant="body1">
                            <strong>Potential Solution:</strong>{" "}
                            {ticket["potential solutions"].join(", ")}
                          </Typography>
                          <Typography variant="body1">
                            <strong>Time Required:</strong>{" "}
                            {ticket.time_required}
                          </Typography>
                          <Typography variant="body1">
                            <strong>Responsible Party:</strong>{" "}
                            {ticket.responsible_party}
                          </Typography>
                          <Button
                            variant="contained"
                            style={styles.button}
                            onClick={() => {
                              /* Future Jira Ticket logic here */
                            }}
                          >
                            Create Jira Ticket
                          </Button>
                        </CardContent>
                      </Card>
                    </Collapse>
                    <Divider />
                  </div>
                ))}
            </List>
          </Collapse>
        </Paper>
      </Container>
    </>
  );
};

export default TicketPage;
