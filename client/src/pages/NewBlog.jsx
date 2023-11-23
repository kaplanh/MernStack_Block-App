/* eslint-disable react/no-unescaped-entities */

import { Container, Grid } from "@mui/material"
import BlogForm from "../components/BlogForm"


const NewBlog = () => {

  return (
      <Container
          maxWidth="false"
          style={{
              backgroundImage:
                  "url(https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
              
          }}
      >
          <Grid
              container
              justifyContent={"center"}
              height={"80vh"}
              alignItems={"center"}
          >
              <Grid
                  item
                  xs={12}
                  sm={10}
                  md={6}
                  lg={6}
                  boxShadow={10}
                  p={5}
                  backgroundColor={"#FFC018"}
              >
                  <BlogForm
                      formValues={{
                          title: "",
                          content: "",
                          image: "",
                          category: "",
                          status: "",
                      }}
                  />
              </Grid>
          </Grid>
      </Container>
  );
}

export default NewBlog