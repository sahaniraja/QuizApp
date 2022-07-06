import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

// material-ui
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project import
import AnimateButton from "../../../components/@extended/AnimateButton";

import MainCard from "../../../components/MainCard";
// ============================|| CATEGORY ||============================ //
const columns = [
  { id: "catname", label: "Category Name", minWidth: 170 },
  { id: "isrecclsd", label: "IsRecClsd", minWidth: 100 },
  { id: "action", label: "Action", minWidth: 100 }
];

function createData(catname, isrecclsd) {
  return { catname, isrecclsd };
}

const rows = [
  createData("India", "IN"),
  createData("China", "CN"),
  createData("Italy", "IT"),
  createData("United States", "US"),
  createData("Canada", "CA"),
  createData("Australia", "AU"),
  createData("Germany", "DE"),
  createData("Ireland", "IE"),
  createData("Mexico", "MX"),
  createData("Japan", "JP"),
  createData("France", "FR"),
  createData("United Kingdom", "GB"),
  createData("Russia", "RU"),
  createData("Nigeria", "NG"),
  createData("Brazil", "BR")
];

const Category = () => {
  const [catname, setCatname] = React.useState("");
  const [catdesc, setCatdesc] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [allcategories, setallCategories] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //Get a All Categories
  const getAllCategories = async () => {
    await axios
      .get("https://nodejsquizapi.herokuapp.com/getcategory")
      .then((res) => {
        setallCategories(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <MainCard title="Category">
        <Typography variant="body2">
          <Formik
            initialValues={{
              catname: "",
              catdesc: "",
              isrecclsd: false,
              submit: null
            }}
            validationSchema={Yup.object().shape({
              catname: Yup.string().max(255).required("Category is required")
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              try {
                setStatus({ success: false });
                setSubmitting(false);
              } catch (err) {
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
              <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="cat-name">Category Name</InputLabel>
                      <OutlinedInput
                        id="cat-name"
                        type="text"
                        value={values.category}
                        name="category"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter category name"
                        fullWidth
                        error={Boolean(touched.catname && errors.catname)}
                      />
                      {touched.catname && errors.catname && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-cat-name"
                        >
                          {errors.catname}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="cat-desc">
                        Category Description
                      </InputLabel>
                      <OutlinedInput
                        id="cat-desc"
                        type="text"
                        value={values.catdesc}
                        name="catdesc"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter category description"
                        fullWidth
                      />
                    </Stack>
                  </Grid>

                  <Grid item xs={12} sx={{ mt: -1 }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked}
                            onChange={(event) =>
                              setChecked(event.target.checked)
                            }
                            name="checked"
                            color="primary"
                            size="small"
                          />
                        }
                        label={<Typography variant="h6">IsRecClsd</Typography>}
                      />
                    </Stack>
                  </Grid>
                  {errors.submit && (
                    <Grid item xs={12}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <AnimateButton>
                      <Button
                        disableElevation
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        Add Category
                      </Button>
                    </AnimateButton>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider>
                      <Typography variant="caption">Categories</Typography>
                    </Divider>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper sx={{ width: "100%", overflow: "hidden" }}>
                      <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                          <TableHead>
                            <TableRow>
                              {columns.map((column) => (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{ minWidth: column.minWidth }}
                                >
                                  {column.label}
                                </TableCell>
                              ))}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {allcategories
                              .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                              )
                              .map((row) => {
                                return (
                                  <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.isrecclsd}
                                  >
                                    {columns.map((column) => {
                                      const value = row[column.id];
                                      return (
                                        <TableCell
                                          key={column.id}
                                          align={column.align}
                                        >
                                          {column.format &&
                                          typeof value === "number"
                                            ? column.format(value)
                                            : value}
                                        </TableCell>
                                      );
                                    })}
                                  </TableRow>
                                );
                              })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Typography>
      </MainCard>
    </>
  );
};

export default Category;
