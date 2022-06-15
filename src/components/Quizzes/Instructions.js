import React from "react";
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
  CardActions
} from "@mui/material";

const Instructions = () => {
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
          <CardHeader title="Sample Quiz Declarations" align="center" />
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
              <Button variant="contained" color="secondary">
                Start Quiz
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default Instructions;
