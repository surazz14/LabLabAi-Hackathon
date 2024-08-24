import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Collapse, List, ListItem, ListItemText, Divider, Box, Paper } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';

const TicketPage = () => {
    const [isEpicSelected, setIsEpicSelected] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);

    const epic = {
        id: 1,
        title: "Epic 1",
        tickets: [
            {
                id: 101,
                title: "Ticket 1",
                description: "Description of Ticket 1",
                potentialSolution: "Solution for Ticket 1",
                timeRequired: "2 hours",
            },
            {
                id: 102,
                title: "Ticket 2",
                description: "Description of Ticket 2",
                potentialSolution: "Solution for Ticket 2",
                timeRequired: "3 hours",
            },
        ],
    };

    const handleEpicClick = () => {
        setIsEpicSelected(!isEpicSelected);
        setSelectedTicket(null); // Reset selected ticket when epic changes
    };

    const handleTicketClick = (ticketId) => {
        setSelectedTicket(selectedTicket === ticketId ? null : ticketId);
    };

    // Define custom styles
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#fce4ec', // Light pink background similar to the UserProfile component
        },
        paper: {
            padding: '20px',
            width: '100%',
            maxWidth: 800,
            backgroundColor: '#ffffff', // White background for the main content
        },
        heading: {
            marginTop: 20,
            color: '#f50057', // Red color for headings
        },
        divider: {
            margin: '20px 0',
        },
        card: {
            marginLeft: '40px',
            marginTop: '10px',
            backgroundColor: '#f4f4f4', // Light grey background for cards
        },
        epicTitle: {
            cursor: 'pointer',
            color: '#3f51b5', // Primary color for the epic title
        },
        ticketTitle: {
            paddingLeft: '32px',
            cursor: 'pointer',
            color: '#333', // Dark color for ticket titles
        },
        cardContent: {
            padding: '16px',
        }
    };

    return (
        <Container style={styles.container} component="main">
            <Paper elevation={3} style={styles.paper}>
                <Typography variant="h4" style={styles.heading} gutterBottom>
                    Ticket Page
                </Typography>
                <ListItem button onClick={handleEpicClick} style={styles.epicTitle}>
                    <ListItemText primary={epic.title} />
                    {isEpicSelected ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={isEpicSelected} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {epic.tickets.map((ticket) => (
                            <div key={ticket.id}>
                                <ListItem button onClick={() => handleTicketClick(ticket.id)} style={styles.ticketTitle}>
                                    <ListItemText primary={ticket.title} />
                                </ListItem>
                                <Collapse in={selectedTicket === ticket.id} timeout="auto" unmountOnExit>
                                    <Card variant="outlined" style={styles.card}>
                                        <CardContent style={styles.cardContent}>
                                            <Typography variant="body1"><strong>Description:</strong> {ticket.description}</Typography>
                                            <Typography variant="body1"><strong>Potential Solution:</strong> {ticket.potentialSolution}</Typography>
                                            <Typography variant="body1"><strong>Time Required:</strong> {ticket.timeRequired}</Typography>
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
    );
};

export default TicketPage;