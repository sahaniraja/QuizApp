import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Container,
  CssBaseline
} from "@mui/material";

const Contactus = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: ""
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    state;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Container style={{ padding: "50px" }}>
      <CssBaseline />
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h3" align="center">
            Contact Us
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="body2"
            component="p"
          >
            Fill up the form and our team will get back to you within 24 hours.
          </Typography>
          <form onSubmit={handleOnSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="Enter your first name"
                  variant="outlined"
                  name="firstname"
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="Enter your first name"
                  variant="outlined"
                  name="lastname"
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  variant="outlined"
                  name="email"
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Type your message here"
                  variant="outlined"
                  name="message"
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Contactus;
