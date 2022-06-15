import React from "react";
import {
  Container,
  CssBaseline,
  Typography,
  Box,
  Stack,
  Button
} from "@mui/material";
import { useParams, NavLink } from "react-router-dom";

const QuizDesc = () => {
  const { id } = useParams();
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6
      }}
    >
      <Container>
        <CssBaseline />
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {id}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          align="center"
          paragraph
        >
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained">Sample Quiz</Button>
          <Button variant="contained">Pay</Button>
          <Button variant="contained">Attempt Quiz</Button>
          <Button variant="contained">Go Back</Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default QuizDesc;
