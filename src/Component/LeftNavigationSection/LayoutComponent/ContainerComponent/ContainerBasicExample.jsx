import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
export const ContainerBasicExample = () => {
  return (
    <div>
      <br />
      <h6>...Container Basic Example...</h6>
      <br />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "30vh" }}
          />
        </Container>
        <br />
        <h6>...Fixed Container...</h6>
        <br />
        <CssBaseline />
        <Container fixed>
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "30vh" }}
          />
        </Container>
      </React.Fragment>
    </div>
  );
};
