import React, { useState } from "react";
import {
  CssBaseline,
  Button,
  Card,
  CardContent,
  Container,
  Box,
  Typography,
  CardHeader,
  Stack,
  CardActions,
  Divider,
  Grid,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions
} from "@mui/material";
import { ErrorMessage } from "../Notifications/ErrorMessage";
import { useNavigate } from "react-router-dom";

const Instructions = () => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  //const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    //fetchUsrDetail(fullname, email);
    navigate(`/sample/startquiz`);
    // if (!fullname || !email) {
    //   setError(true);
    //   return;
    // } else {
    //   setError(false);
    //   navigate(`/`);
    // }
  };

  const clickBtn = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 3
        }}
      >
        <Card>
          <CardHeader title="Sample Quiz" align="center" />
          <Divider variant="middle" />
          <Stack
            sx={{ pt: 1 }}
            direction="row"
            spacing={5}
            justifyContent="center"
          >
            <Typography>
              <Paper elevation="0">
                <b>Date:</b> 16-06-2022
              </Paper>
            </Typography>
            <Typography>
              <Paper elevation="0">
                <b>Score:</b> 50{" "}
              </Paper>
            </Typography>
            <Typography>
              <Paper elevation="0">
                <b>Questions:</b> 25{" "}
              </Paper>
            </Typography>
            <Typography>
              <Paper elevation="0">
                <b>Duration:</b> 20 minutes{" "}
              </Paper>
            </Typography>
          </Stack>
          <Divider variant="middle" />
          <CardContent>
            <Typography variant="h6" align="center">
              Instructions Page
            </Typography>
            <Typography variant="body2">
              This sample quiz is to detemine your understanding of the
              Declaration of Independence. Write what you think each section or
              statement means. You have 1 attempt and 60 minutes to complete the
              quiz.
            </Typography>
          </CardContent>
          <CardActions>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" color="secondary" onClick={clickBtn}>
                Proceed
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sample Quiz</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To start with sample quiz fill with this form to start the quiz,
            please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          {/* {error && (
            <ErrorMessage>Please fill the required details.</ErrorMessage>
          )} */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            name="name"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Start Quiz</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Instructions;
