import { InlineWidget } from "react-calendly";
import { Box} from "@chakra-ui/react";
import Head from "next/head";

export default  function EyeTestCalendar () {
    return (
        <Box>
      <Head>
        <title>Book Appointment | MedOptics Ltd</title>
        <meta name="description" content="MedOptics Ltd Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>

        <InlineWidget 
        
        url="https://calendly.com/medoptics" 
        styles={{
          height: '90vh'
        }}

        />
      </Box>
    );
}