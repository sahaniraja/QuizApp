// material-ui
import {
  Typography,
  Button,
  Divider,
  Box,
  Stack,
  FormControl,
  Grid,
  FormHelperText,
  InputLabel,
  OutlinedInput
} from "@mui/material";
//import Params from router dom
import { useParams, Link as RouterLink } from "react-router-dom";
// project import
import MainCard from "../../components/MainCard";
//for Building Form in react
import { Formik } from "formik";
//for form value and its validation
import * as Yup from "yup";
import AnimateButton from "../../components/@extended/AnimateButton";

// ==============================|| Exam Detail Form ||============================== //

const ExamDetailForm = () => {
  const { id, name } = useParams();
  return (
    <MainCard title="Fill up the form to continue!!!">
      <Grid item xs={12}>
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            mobileno: "",
            examtyp: "",
            noofquest: "",
            submit: null
          }}
          validationSchema={Yup.object().shape({
            fullname: Yup.string().max(255).required("Full Name is required"),
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            mobileno: Yup.string().max(255).required("Mobile No. is required"),
            examtyp: Yup.string().max(255).required("Exam Type is required"),
            noofquest: Yup.string()
              .max(255)
              .required("No of Questions is required")
          })}
          onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
            try {
              setStatus({ success: false });
              setSubmitting(false);
            } catch (err) {
              console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values
          }) => (
            <Grid container spacing={3}>
              <form noValidate onSubmit={handleSubmit}>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="fullname-examform">
                      Full Name*
                    </InputLabel>
                    <OutlinedInput
                      id="fullname-examform"
                      type="fullname"
                      value={values.fullname}
                      name="fullname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullWidth
                      error={Boolean(touched.fullname && errors.fullname)}
                      inputProps={{}}
                    />
                    {touched.firstname && errors.firstname && (
                      <FormHelperText error id="helper-text-firstname-signup">
                        {errors.firstname}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="email-examform">Email Id*</InputLabel>
                    <OutlinedInput
                      type="email"
                      id="email-examform"
                      name="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullWidth
                      error={Boolean(touched.email && errors.email)}
                      inputProps={{}}
                    />
                    {touched.email && errors.email && (
                      <FormHelperText error id="helper-text-email-signup">
                        {errors.email}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="mobileno-examform">
                      Mobile No*
                    </InputLabel>
                    <OutlinedInput
                      type="text"
                      id="mobileno-examform"
                      name="mobileno"
                      value={values.mobileno}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullWidth
                      error={Boolean(touched.mobileno && errors.mobileno)}
                      inputProps={{}}
                    />
                    {touched.mobileno && errors.email && (
                      <FormHelperText error id="helper-text-mobileno">
                        {errors.mobileno}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="examtyp-examform">
                      Exam Type*
                    </InputLabel>
                    <OutlinedInput
                      type="text"
                      id="examtyp-examform"
                      name="examtyp"
                      value={values.examtyp}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullWidth
                      error={Boolean(touched.examtyp && errors.examtyp)}
                      inputProps={{}}
                    />
                    {touched.examtyp && errors.examtyp && (
                      <FormHelperText error id="helper-text-examtyp">
                        {errors.examtyp}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="noofquest-examform">
                      No Of Questions. *
                    </InputLabel>
                    <OutlinedInput
                      type="text"
                      id="noofquest-examform"
                      name="noofquest"
                      value=""
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullWidth
                      error={Boolean(touched.noofquest && errors.noofquest)}
                      inputProps={{}}
                    />
                    {touched.noofquest && errors.noofquest && (
                      <FormHelperText error id="helper-text-noofquest">
                        {errors.noofquest}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
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
                  </AnimateButton>
                </Grid>
              </form>
            </Grid>
          )}
        </Formik>
      </Grid>
    </MainCard>
  );
};

export default ExamDetailForm;
