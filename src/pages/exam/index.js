// material-ui
import { Typography, Button, Divider, Box } from "@mui/material";

//
import { useParams, Link as RouterLink } from "react-router-dom";
// project import
import MainCard from "../../components/MainCard";

// ==============================|| Exam Instructions Page ||============================== //

const ExamQuiz = () => {
  const { id, name } = useParams();
  return (
    <MainCard title={name}>
      <Typography variant="body2">
        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion
        tempos incident ut laborers et doolie magna alissa. Ut enif ad minim
        venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea
        commons construal. Duos aube grue dolor in reprehended in voltage veil
        esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate
        non president, sunk in culpa qui officiate descent molls anim id est
        labours.
      </Typography>
      <Divider />
      <Box textAlign="center">
        <Button
          component={RouterLink}
          to={`/examdetail/${id}`}
          sx={{
            my: 2
          }}
          variant="contained"
          align="justify"
        >
          TakeQuiz
        </Button>
      </Box>
    </MainCard>
  );
};

export default ExamQuiz;
