import React from "react";
import Header from "./components/Layouts/Header";
import Homepage from "./components/Layouts/Homepage";
import SignUp from "./components/Registrations/SignUp";
import SignIn from "./components/Registrations/SignIn";
import Aboutus from "./components/Others/Aboutus";
import Contactus from "./components/Others/Contactus";
import { Route, Routes } from "react-router-dom";
import QuizDesc from "./components/Layouts/QuizDesc";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} exact />
          <Route path="/signin" element={<SignIn />} exact />
          <Route path="/aboutus" element={<Aboutus />} exact />
          <Route path="/contactus" element={<Contactus />} exact />
          <Route path="/quiztype/:title" element={<QuizDesc />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
