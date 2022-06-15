import React from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Homepage from "./components/Layouts/Homepage";
import SignUp from "./components/Registrations/SignUp";
import SignIn from "./components/Registrations/SignIn";
import Aboutus from "./components/Others/Aboutus";
import Contactus from "./components/Others/Contactus";
import { Route, Routes } from "react-router-dom";
import QuizDesc from "./components/Layouts/QuizDesc";
import { Box } from "@mui/material";
import Instructions from "./components/Quizzes/Instructions";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Box sx={{ pt: "8vh", pb: "12vh" }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<SignUp />} exact />
            <Route path="/signin" element={<SignIn />} exact />
            <Route path="/aboutus" element={<Aboutus />} exact />
            <Route path="/contactus" element={<Contactus />} exact />
            <Route path="/quiztype/:id" element={<QuizDesc />} exact />
            <Route
              path="/quiz/:id/samplequiz"
              element={<Instructions />}
              exact
            />
          </Routes>
        </Box>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
