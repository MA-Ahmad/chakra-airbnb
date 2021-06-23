import { Fragment } from "react";
import { Box } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <Box textAlign="center" fontSize="xl" w={"100%"}>
        {props.children}
      </Box>
      <Footer />
    </Fragment>
  );
}

export default Layout;
