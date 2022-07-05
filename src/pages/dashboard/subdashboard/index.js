// material-ui
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Stack, Typography, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from "react-router-dom";

// project import
import ComponentSkeleton from "../../components-overview/ComponentSkeleton";
import MainCard from "../../../components/MainCard";

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

const SubDashboard = () => {
  const { id, name } = useParams();
  const [subCategory, setsubCategory] = useState([]);

  const getsubCategoryData = () => {
    axios
      .get("https://nodejsquizapi.herokuapp.com/getsubcategory/" + id)
      .then((res) => {
        setsubCategory(res.data);
      });
  };

  useEffect(() => {
    getsubCategoryData();
  }, []);

  // const subCategories = [
  //   {
  //     subcatid: 1,
  //     catid: 1,
  //     subcatname: "CSE",
  //     subcatdesc: "Civil Services Examination",
  //     isrecclsd: 0
  //   },
  //   {
  //     subcatid: 2,
  //     catid: 1,
  //     subcatname: "IBPS",
  //     subcatdesc: "Civil Services Examination",
  //     isrecclsd: 0
  //   },
  //   {
  //     subcatid: 3,
  //     catid: 1,
  //     subcatname: "SBI PO",
  //     subcatdesc: "State Bank of India Probationary Officer",
  //     isrecclsd: 0
  //   },
  //   {
  //     subcatid: 4,
  //     catid: 1,
  //     subcatname: "RRB",
  //     subcatdesc: "Railway Recruitment Board",
  //     isrecclsd: 0
  //   },
  //   {
  //     subcatid: 5,
  //     catid: 2,
  //     subcatname: "RBI",
  //     subcatdesc: "Resevere Bank of India",
  //     isrecclsd: 0
  //   }
  // ];

  //const filterData = subCategories.filter((obj) => (obj.catid = id));
  //console.log(filterData);
  return (
    <ComponentSkeleton>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Typography variant="h5" align="justify">
            {name}
          </Typography>
        </Grid>
        {
          // .filter((subcat) => subcat.catid === 1)
        }
        {subCategory.map((subcat) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <MainCard title={subcat.subcatname}>
              <>
                <Typography variant="body1" gutterBottom>
                  {subcat.subcatdesc}
                </Typography>
                <Divider sx={{ borderStyle: "dashed" }} />
                <Typography
                  component={RouterLink}
                  sx={{ textDecoration: "none" }}
                  to={`/examquiz/${subcat.subcatname}/${subcat.subcatid}`}
                  variant="body1"
                  color="primary"
                  align="right"
                >
                  Welcome
                </Typography>
              </>
            </MainCard>
          </Grid>
        ))}
      </Grid>
    </ComponentSkeleton>
  );
};

export default SubDashboard;
