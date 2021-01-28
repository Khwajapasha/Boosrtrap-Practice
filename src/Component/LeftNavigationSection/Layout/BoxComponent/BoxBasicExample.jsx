import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
export const BoxBasicExample = () => {
  return (
    <div className="mt-2">
      <br />
      <h6>...Basic Example of Box Comp...</h6>
      <br />
      <Box component="span" m={1}>
        <Button>basic MUI button</Button>
      </Box>
    </div>
  );
};
