import { Fragment } from "react";
import { Box } from "@chakra-ui/react";
import Header from "./header";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <Box textAlign="center" fontSize="xl" w={"100%"}>
        <Box pt={10} pb={10}>
          {props.children}
        </Box>
      </Box>
    </Fragment>
  );
}

export default Layout;
