import React from 'react';
import { Container, Typography, Grid, Paper, Avatar, Divider, TextField, Box } from '@material-ui/core';

const UserProfile = () => {
  // Define custom styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#fce4ec', // Light pink background
    },
    paper: {
      padding: '20px',
      width: '100%',
      maxWidth: 600,
      backgroundColor: '#ffffff', // White background for the profile card
    },
    avatar: {
      width: 100,
      height: 100,
      margin: 'auto',
    },
    heading: {
      marginTop: 20,
      color: '#f50057', // Red color for headings
    },
    divider: {
      margin: '20px 0',
    },
    textField: {
      marginBottom: 20,
    },
    textFieldLabel: {
      color: '#f50057', // Red color for labels
    },
    textFieldInput: {
      color: '#333', // Dark color for text input
    },
  };

  return (
    <Container style={styles.container} component="main" maxWidth="xs">
      <Paper elevation={3} style={styles.paper}>
        <Avatar
          alt="User Avatar"
          src="/path/to/avatar.jpg"  // Replace with your avatar image path
          style={styles.avatar}
        />
        <Typography variant="h5" component="h1" style={styles.heading}>
          John Doe
        </Typography>
        <Typography variant="body1" color="textSecondary">
          johndoe@example.com
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Age: 30
        </Typography>
        <Divider style={styles.divider} />
        
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Interests"
              variant="outlined"
              fullWidth
              defaultValue="Programming, Reading"
              InputProps={{
                readOnly: true,
                style: styles.textFieldInput,
              }}
              InputLabelProps={{
                style: styles.textFieldLabel,
              }}
              style={styles.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Hobbies"
              variant="outlined"
              fullWidth
              defaultValue="Cycling, Photography"
              InputProps={{
                readOnly: true,
                style: styles.textFieldInput,
              }}
              InputLabelProps={{
                style: styles.textFieldLabel,
              }}
              style={styles.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Preferences"
              variant="outlined"
              fullWidth
              defaultValue="Outdoor activities, Tech"
              InputProps={{
                readOnly: true,
                style: styles.textFieldInput,
              }}
              InputLabelProps={{
                style: styles.textFieldLabel,
              }}
              style={styles.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Interested In"
              variant="outlined"
              fullWidth
              defaultValue="AI, Machine Learning"
              InputProps={{
                readOnly: true,
                style: styles.textFieldInput,
              }}
              InputLabelProps={{
                style: styles.textFieldLabel,
              }}
              style={styles.textField}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default UserProfile;
